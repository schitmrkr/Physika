import ReactMarkdown, { type Components } from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { rehypeHeadingIds } from '../../shared/lib/rehypeHeadingIds';
import { resolveAssetUrl } from '../../shared/lib/markdownAssets';
import 'katex/dist/katex.min.css';

const createComponents = (assetBase?: string): Components => ({
  a: ({ href, children }) => (
    <a href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
      {children}
    </a>
  ),
  img: ({ src, alt }) => (
    <img src={resolveAssetUrl(src, assetBase)} alt={alt ?? ''} loading="lazy" />
  ),
});

interface MarkdownNoteProps {
  content: string;
  className?: string;
  assetBase?: string;
}

export const MarkdownNote = ({ content, className = '', assetBase }: MarkdownNoteProps) => (
  <div className={`markdown-body ${className}`.trim()}>
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeHeadingIds, rehypeKatex]}
      components={createComponents(assetBase)}
    >
      {content}
    </ReactMarkdown>
  </div>
);
