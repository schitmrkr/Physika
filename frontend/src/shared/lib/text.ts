export interface NoteHeading {
  id: string;
  text: string;
  level: number;
}

const ACRONYMS: Record<string, string> = {
  qft: 'QFT',
  qm: 'QM',
  qed: 'QED',
  cmos: 'CMOS',
  fdtd: 'FDTD',
  u1: 'U(1)',
  qcd: 'QCD',
  qm3d: 'QM 3D',
};

export const slugify = (value: string): string =>
  value
    .toLowerCase()
    .trim()
    .replace(/[`*_~$\\]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

export const stripMarkdown = (value: string): string =>
  value
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/\$\$[\s\S]*?\$\$/g, ' ')
    .replace(/\$[^$]*\$/g, ' ')
    .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)]\([^)]*\)/g, '$1')
    .replace(/[#>*_`~\-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

export const excerptFrom = (value: string, length = 190): string => {
  const text = stripMarkdown(value);
  if (text.length <= length) return text;
  return `${text.slice(0, length).trimEnd()}…`;
};

export const countWords = (value: string): number =>
  stripMarkdown(value).split(/\s+/).filter(Boolean).length;

export const readingMinutes = (value: string): number => Math.max(1, Math.round(countWords(value) / 210));

export const titleFromFilename = (filename: string): string => {
  const base = filename
    .replace(/\.[^.]+$/, '')
    .replace(/^\d+(?:\.\d+)*[\s._-]*/, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!base) return 'Untitled study';

  return base
    .split(' ')
    .map((word) => {
      const lower = word.toLowerCase();
      if (ACRONYMS[lower]) return ACRONYMS[lower];
      if (word.length <= 1) return word.toUpperCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ')
    .replace(/\bKlein\b/gi, 'Klein–')
    .replace(/Klein–\s*Gordan/gi, 'Klein–Gordon');
};

export const extractHeadings = (markdown: string): NoteHeading[] => {
  const withoutCode = markdown.replace(/```[\s\S]*?```/g, '');
  return withoutCode
    .split('\n')
    .map((line) => {
      const match = /^(#{1,3})\s+(.+?)\s*$/.exec(line);
      if (!match) return null;
      const text = match[2].replace(/[*_`]/g, '').trim();
      return {
        id: slugify(text),
        text,
        level: match[1].length,
      };
    })
    .filter((heading): heading is NoteHeading => heading !== null);
};

export const normalizeTag = (value: string): string =>
  value
    .trim()
    .replace(/^#/, '')
    .replace(/\s+/g, '-')
    .toLowerCase();

export const initials = (value: string): string =>
  value
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join('')
    .toUpperCase();
