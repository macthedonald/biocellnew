interface SitemapRoute {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

// Define all static routes with their SEO metadata
const STATIC_ROUTES: SitemapRoute[] = [
  {
    url: '/',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 1.0
  },
  {
    url: '/services',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/about',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: '/contact',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: '/resources',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.7
  },
  {
    url: '/privacy-policy',
    lastmod: new Date().toISOString(),
    changefreq: 'yearly',
    priority: 0.3
  },
  {
    url: '/terms-of-service',
    lastmod: new Date().toISOString(),
    changefreq: 'yearly',
    priority: 0.3
  }
];

export const generateSitemap = (baseUrl: string = 'https://biocellrx.com'): string => {
  const sitemapHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  const sitemapFooter = `</urlset>`;

  const urlEntries = STATIC_ROUTES.map(route => {
    const fullUrl = `${baseUrl}${route.url}`;
    return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');

  return `${sitemapHeader}\n${urlEntries}\n${sitemapFooter}`;
};

export const generateRobotsTxt = (baseUrl: string = 'https://biocellrx.com'): string => {
  return `User-agent: *
Allow: /
Disallow: /503
Disallow: /maintenance
Disallow: /api/
Disallow: /_*
Disallow: /*.json$

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay (optional, helps with server load)
Crawl-delay: 1

# Cache directive for common search engines
# Google
User-agent: Googlebot
Crawl-delay: 0.5

# Bing
User-agent: bingbot
Crawl-delay: 1

# Additional directives
# Block common unwanted bots
User-agent: SemrushBot
Disallow: /

User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /`;
};

// Helper function to update sitemap with new routes or changed metadata
export const updateSitemapRoute = (url: string, metadata: Partial<SitemapRoute>): void => {
  const routeIndex = STATIC_ROUTES.findIndex(route => route.url === url);
  if (routeIndex !== -1) {
    STATIC_ROUTES[routeIndex] = { ...STATIC_ROUTES[routeIndex], ...metadata };
  } else {
    STATIC_ROUTES.push({
      url,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.5,
      ...metadata
    });
  }
};

export { STATIC_ROUTES };