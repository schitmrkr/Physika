import ReactMarkdown, { type Components } from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { rehypeHeadingIds } from '../../shared/lib/rehypeHeadingIds';
import { resolveAssetUrl } from '../../shared/lib/markdownAssets';
import 'katex/dist/katex.min.css';

const isPercentage = (value: string | number | undefined): value is string =>
  typeof value === 'string' && /^\d+(?:\.\d+)?\s*%$/.test(value.trim());

const createComponents = (assetBase?: string): Components => ({
  a: ({ href, children }) => (
    <a href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
      {children}
    </a>
  ),
  img: ({ src, alt, width, height, style, className }) => {
    const themed = className?.split(/\s+/).includes('image--themed') ?? false;
    const cssWidth = isPercentage(width) ? width : style?.width;
    const cssHeight = isPercentage(height) ? height : style?.height;
    const image = themed ? (
      <img
        src={resolveAssetUrl(src, assetBase)}
        alt={alt ?? ''}
        className={className}
        style={{ ...style, width: '100%', height: 'auto' }}
        loading="lazy"
      />
    ) : (
      <img
        src={resolveAssetUrl(src, assetBase)}
        alt={alt ?? ''}
        className={className}
        width={isPercentage(width) ? undefined : width}
        height={isPercentage(height) ? undefined : height}
        style={{ ...style, width: cssWidth, height: cssHeight }}
        loading="lazy"
      />
    );

    return themed ? <span className="markdown-image" style={{ width: cssWidth }}>{image}</span> : image;
  },
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
      rehypePlugins={[rehypeRaw, rehypeHeadingIds, rehypeKatex]}
      components={createComponents(assetBase)}
    >
      {content}
    </ReactMarkdown>
  </div>
);
