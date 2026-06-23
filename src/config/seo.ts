export const seoConfig = {
  siteName: 'Kicktemp – Praxismarketing',
  baseUrl: 'https://praxismarketing.kicktemp.com',
  locale: 'de_DE',
  defaultDescription:
    'Wir übernehmen alles Digitale für ästhetische Kliniken und Praxen – Website, Technik, Werbung und Auswertung. Aus einer Hand.',
  defaultOgImage: 'https://praxismarketing.kicktemp.com/og-image.jpg',
};

export function generateCanonical(path = '') {
  let cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (cleanPath === '/' || cleanPath === '') {
    return `${seoConfig.baseUrl}/`;
  }
  cleanPath = cleanPath.replace(/\/?$/, '/');
  return `${seoConfig.baseUrl}${cleanPath}`;
}
