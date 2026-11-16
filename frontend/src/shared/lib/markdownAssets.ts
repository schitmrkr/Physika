const CONTENT_ROOT = '../../content/studies/';

const STUDY_ASSETS = import.meta.glob(
  '../../content/studies/**/*.{png,jpg,jpeg,gif,webp,svg,avif}',
  { eager: true, query: '?url', import: 'default' },
) as Record<string, string>;

const assetUrls = new Map<string, string>();
for (const [path, url] of Object.entries(STUDY_ASSETS)) {
  assetUrls.set(path.slice(CONTENT_ROOT.length), url);
}

const isExternalSource = (src: string): boolean =>
  /^(?:[a-z][a-z0-9+.-]*:|\/\/|\/)/i.test(src);

export const resolveAssetUrl = (src: string | undefined, assetBase?: string): string | undefined => {
  if (!src || isExternalSource(src)) return src;

  const normalized = src.replace(/^\.?\//, '');
  const candidates = assetBase ? [`${assetBase}/${normalized}`, normalized] : [normalized];

  for (const candidate of candidates) {
    const url = assetUrls.get(candidate);
    if (url) return url;
  }

  if (!normalized.includes('/')) {
    let match: string | undefined;
    let matches = 0;
    for (const [key, url] of assetUrls) {
      if (!key.endsWith(`/${normalized}`)) continue;
      match = url;
      matches += 1;
      if (matches > 1) break;
    }
    if (matches === 1) return match;
  }

  return src;
};
