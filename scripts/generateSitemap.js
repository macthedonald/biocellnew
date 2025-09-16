const fs = require('fs');
const path = require('path');

// Since we can't directly import TypeScript in Node.js without compilation,
// we'll recreate the static routes here for the build process
const STATIC_ROUTES = [
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

const generateSitemap = (baseUrl = 'https://biocellrx.com') => {
  const sitemapHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

  const sitemapFooter = `
</urlset>`;

  const urlEntries = STATIC_ROUTES.map(route => {
    const fullUrl = `${baseUrl}${route.url}`;
    const lastmod = new Date().toISOString().split('T')[0]; // Format as YYYY-MM-DD
    
    let entry = `  
  <!-- ${route.url === '/' ? 'Home Page' : route.url.charAt(1).toUpperCase() + route.url.slice(2).replace('-', ' ') + ' Page'} -->
  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>`;

    // Add image entries for key pages
    if (route.url === '/') {
      entry += `
    <image:image>
      <image:loc>${baseUrl}/uploads/abc8e5e6-fdc8-4aeb-83a6-f51637383091.png</image:loc>
      <image:title>BioCellRx Logo</image:title>
      <image:caption>BioCellRx - Advanced Regenerative Medicine</image:caption>
    </image:image>`;
    } else if (route.url === '/services') {
      entry += `
    <image:image>
      <image:loc>${baseUrl}/uploads/f51f3f85-b0dd-4995-85c2-5c41f0080e4e.png</image:loc>
      <image:title>MSC Exosomal Lysate</image:title>
      <image:caption>Premium cellular therapy product</image:caption>
    </image:image>`;
    }

    entry += `
  </url>`;
    
    return entry;
  }).join('\n');

  return `${sitemapHeader}${urlEntries}${sitemapFooter}`;
};

const generateRobotsTxt = (baseUrl = 'https://biocellrx.com') => {
  return `User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /
Disallow: /503
Disallow: /maintenance
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_*
Disallow: /*.json$

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Allow all major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

# Block common unwanted bots
User-agent: SemrushBot
Disallow: /

User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /`;
};

// Main execution
const main = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL || 'https://biocellrx.com';
  const publicDir = path.join(__dirname, '..', 'public');
  
  // Generate sitemap.xml
  const sitemapContent = generateSitemap(baseUrl);
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log(`✅ Generated sitemap.xml at ${sitemapPath}`);
  
  // Generate robots.txt
  const robotsContent = generateRobotsTxt(baseUrl);
  const robotsPath = path.join(publicDir, 'robots.txt');
  
  fs.writeFileSync(robotsPath, robotsContent, 'utf8');
  console.log(`✅ Generated robots.txt at ${robotsPath}`);
  
  console.log(`🚀 SEO files generated successfully for ${baseUrl}`);
};

// Run the script
if (require.main === module) {
  main();
}

module.exports = { generateSitemap, generateRobotsTxt };