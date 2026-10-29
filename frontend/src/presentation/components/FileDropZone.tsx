import { useRef, useState, type ReactNode } from 'react';
import { ArrowDownToLine, FileUp } from 'lucide-react';

interface FileDropZoneProps {
  onFile: (file: File) => void;
  children?: ReactNode;
  compact?: boolean;
  label?: string;
  hint?: string;
}

const ACCEPT = '.md,.markdown,.txt,.pdf,.png,.jpg,.jpeg,.gif,.webp,.svg,.avif';

export const FileDropZone = ({
  onFile,
  children,
  compact = false,
  label = 'Drop a study here',
  hint = 'Markdown, text, PDF, or a figure · stays on this device',
}: FileDropZoneProps) => {
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null): void => {
    const file = files?.[0];
    if (file) onFile(file);
  };

  return (
    <div
      className={`dropzone ${compact ? 'dropzone--compact' : ''} ${dragging ? 'is-dragging' : ''}`}
      role="button"
      tabIndex={0}
      aria-label={label}
      onClick={() => inputRef.current?.click()}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          inputRef.current?.click();
        }
      }}
      onDragOver={(event) => {
        event.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(event) => {
        event.preventDefault();
        setDragging(false);
        handleFiles(event.dataTransfer.files);
      }}
    >
      <input
        ref={inputRef}
        className="visually-hidden"
        type="file"
        accept={ACCEPT}
        onChange={(event) => {
          handleFiles(event.target.files);
          event.target.value = '';
        }}
      />

      {children ?? (
        <div className="dropzone__default">
          <span className="dropzone__icon">
            {compact ? <ArrowDownToLine size={18} /> : <FileUp size={22} />}
          </span>
          <span>
            <strong>{label}</strong>
            <small>{hint}</small>
          </span>
        </div>
      )}
    </div>
  );
};
