const basePath = import.meta.env.BASE_URL;

/**
 * Resolve asset path with proper base path handling
 * Works in both dev (/) and production (/ft-article-sopra-steria/)
 */
export function getAssetPath(path) {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}${cleanPath}`;
}

export function getMobilePath(path) {
  if (!path || path.includes('_mobile')) return path;
  const ext = path.match(/\.[^.]+$/)?.[0] || '';
  if (path.includes('_desktop')) {
    return path.replace(`_desktop${ext}`, `_mobile${ext}`);
  }
  return path.replace(ext, `_mobile${ext}`);
}
