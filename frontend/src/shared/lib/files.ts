import type { StudyFormat } from '../../domain/entities/Study';

export const formatBytes = (bytes: number): string => {
  if (bytes === 0) return '0 B';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

export const detectFormat = (filename: string): StudyFormat => {
  const extension = filename.split('.').pop()?.toLowerCase();

  if (extension === 'md' || extension === 'markdown') return 'markdown';
  if (extension === 'pdf') return 'pdf';
  if (['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'avif'].includes(extension ?? '')) return 'image';
  return 'text';
};

export const isReadableText = (format: StudyFormat): boolean =>
  format === 'markdown' || format === 'text';

export const isAcceptedFile = (file: File): boolean => {
  const format = detectFormat(file.name);
  if (format !== 'text') return true;
  return file.type.startsWith('text/') || /\.(md|markdown|txt)$/i.test(file.name);
};

export const attachmentKind = (format: StudyFormat): 'note' | 'figure' | 'paper' => {
  if (format === 'image') return 'figure';
  if (format === 'pdf') return 'paper';
  return 'note';
};

export const formatLabel = (format: StudyFormat): string => {
  const labels: Record<StudyFormat, string> = {
    markdown: 'Markdown',
    text: 'Plain text',
    pdf: 'PDF',
    image: 'Figure',
  };
  return labels[format];
};
