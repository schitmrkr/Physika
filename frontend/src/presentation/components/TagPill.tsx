import { X } from 'lucide-react';

interface TagPillProps {
  tag: string;
  onRemove?: () => void;
}

export const TagPill = ({ tag, onRemove }: TagPillProps) => (
  <span className="tag-pill">
    #{tag}
    {onRemove && (
      <button type="button" className="tag-pill__remove" onClick={onRemove} aria-label={`Remove ${tag}`}>
        <X size={11} />
      </button>
    )}
  </span>
);
