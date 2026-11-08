import ReactMarkdown, { type Components } from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { rehypeHeadingIds } from '../../shared/lib/rehypeHeadingIds';
import 'katex/dist/katex.min.css';

const components: Components = {
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
      rehypePlugins={[rehypeHeadingIds, rehypeKatex]}
      components={components}
    >
      {content}
    </ReactMarkdown>
  </div>
);
