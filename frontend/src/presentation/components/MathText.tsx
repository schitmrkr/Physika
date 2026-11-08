import katex from 'katex';
import { splitMath } from '../../shared/lib/math';
import 'katex/dist/katex.min.css';

interface MathTextProps {
  text: string;
}

export const MathText = ({ text }: MathTextProps) => (
  <span className="math-text">
    {splitMath(text).map((part, index) =>
      part.type === 'math' ? (
        <span
          key={`math-${index}`}
          dangerouslySetInnerHTML={{
            __html: katex.renderToString(part.value, {
              displayMode: false,
              throwOnError: false,
            }),
          }}
        />
      ) : (
        <span key={`text-${index}`}>{part.value}</span>
      ),
    )}
  </span>
);
