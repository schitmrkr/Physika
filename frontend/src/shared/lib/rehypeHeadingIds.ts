import { slugify } from './text';

interface HastNode {
  type: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
}

const textContent = (node: HastNode): string => {
  if (node.type === 'text') return node.value ?? '';
  if (!node.children) return '';
  return node.children.map(textContent).join('');
};

const HEADING_TAG = /^h[1-3]$/;

export const rehypeHeadingIds = () => (tree: HastNode) => {
  const seen = new Map<string, number>();

  const visit = (node: HastNode) => {
    if (node.type === 'element' && node.tagName && HEADING_TAG.test(node.tagName)) {
      const base = slugify(textContent(node)) || 'section';
      const count = seen.get(base) ?? 0;
      seen.set(base, count + 1);
      node.properties = {
        ...node.properties,
        id: count === 0 ? base : `${base}-${count + 1}`,
      };
    }
    node.children?.forEach(visit);
  };

  visit(tree);
};
