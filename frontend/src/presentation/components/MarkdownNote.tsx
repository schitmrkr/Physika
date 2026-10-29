import { isValidElement, type ReactNode } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { slugify } from '../../shared/lib/text';
import 'katex/dist/katex.min.css';

const nodeToText = (node: ReactNode): string => {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join('');
  if (isValidElement<{ children?: ReactNode }>(node)) return nodeToText(node.props.children);
  return '';
};

const components: Components = {
  h1: ({ children }) => <h1 id={slugify(nodeToText(children))}>{children}</h1>,
  h2: ({ children }) => <h2 id={slugify(nodeToText(children))}>{children}</h2>,
  h3: ({ children }) => <h3 id={slugify(nodeToText(children))}>{children}</h3>,
  a: ({ href, children }) => (
    <a href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
      {children}
    </a>
  ),
  img: ({ src, alt }) => <img src={src} alt={alt ?? ''} loading="lazy" />,
};

interface MarkdownNoteProps {
  content: string;
  className?: string;
}

export const MarkdownNote = ({ content, className = '' }: MarkdownNoteProps) => (
  <div className={`markdown-body ${className}`.trim()}>
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={components}
    >
      {content}
    </ReactMarkdown>
  </div>
);
