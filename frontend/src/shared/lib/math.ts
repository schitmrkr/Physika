export interface MathPart {
  type: 'text' | 'math';
  value: string;
  raw: string;
  display: boolean;
}

const MATH_PATTERN = /(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\))/g;

const unwrap = (token: string): { value: string; display: boolean } => {
  if (token.startsWith('$$')) return { value: token.slice(2, -2), display: true };
  if (token.startsWith('\\[')) return { value: token.slice(2, -2), display: true };
  if (token.startsWith('\\(')) return { value: token.slice(2, -2), display: false };
  return { value: token.slice(1, -1), display: false };
};

export const splitMath = (value: string): MathPart[] => {
  const parts: MathPart[] = [];
  let lastIndex = 0;

  for (const match of value.matchAll(MATH_PATTERN)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      const text = value.slice(lastIndex, index);
      parts.push({ type: 'text', value: text, raw: text, display: false });
    }
    const { value: tex, display } = unwrap(match[0]);
    parts.push({ type: 'math', value: tex, raw: match[0], display });
    lastIndex = index + match[0].length;
  }

  if (lastIndex < value.length) {
    const text = value.slice(lastIndex);
    parts.push({ type: 'text', value: text, raw: text, display: false });
  }

  return parts;
};
