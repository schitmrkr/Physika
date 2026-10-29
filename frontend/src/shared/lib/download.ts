import type { Study } from '../../domain/entities/Study';

const safeFilename = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 72) || 'study';

export const downloadStudy = (study: Study, subjectName: string): void => {
  const frontmatter = [
    '---',
    `title: "${study.title.replace(/"/g, '\\"')}"`,
    `subject: "${subjectName}"`,
    `chapter: "${study.chapter}"`,
    `format: "${study.format}"`,
    `created: "${study.createdAt}"`,
    `tags: [${study.tags.map((tag) => `"${tag}"`).join(', ')}]`,
    '---',
    '',
  ].join('\n');

  const blob = new Blob([frontmatter, study.content], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `${safeFilename(study.title)}.md`;
  anchor.click();
  URL.revokeObjectURL(url);
};
