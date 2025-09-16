interface RedirectRule {
  from: string | RegExp;
  to: string;
  statusCode?: number;
  permanent?: boolean;
  condition?: () => boolean;
}

// Define redirect rules for common scenarios
const REDIRECT_RULES: RedirectRule[] = [
  // Legacy URL patterns
  { from: '/home', to: '/', permanent: true },
  { from: '/index.html', to: '/', permanent: true },
  { from: '/index.php', to: '/', permanent: true },
  
  // Old service URLs
  { from: '/treatments', to: '/services', permanent: true },
  { from: '/therapy', to: '/services', permanent: true },
  { from: '/products', to: '/services', permanent: true },
  
  // Old about URLs
  { from: '/company', to: '/about', permanent: true },
  { from: '/team', to: '/about', permanent: true },
  { from: '/about-us', to: '/about', permanent: true },
  
  // Old contact URLs
  { from: '/get-in-touch', to: '/contact', permanent: true },
  { from: '/contact-us', to: '/contact', permanent: true },
  { from: '/reach-out', to: '/contact', permanent: true },
  
  // Case-insensitive redirects
  { from: /^\/Services$/i, to: '/services', permanent: true },
  { from: /^\/About$/i, to: '/about', permanent: true },
  { from: /^\/Contact$/i, to: '/contact', permanent: true },
  { from: /^\/Resources$/i, to: '/resources', permanent: true },
  
  // File extensions that should be removed
  { from: /^(.+)\.html$/i, to: '$1', permanent: true },
  { from: /^(.+)\.php$/i, to: '$1', permanent: true },
  
  // Trailing slash normalization
  { from: /^(.+)\/$/, to: '$1', permanent: true },
  
  // Common typos and variations
  { from: '/bio-cell-rx', to: '/', permanent: true },
  { from: '/biocell-rx', to: '/', permanent: true },
  { from: '/bio-cellrx', to: '/', permanent: true }
];

// Check if a redirect rule matches the current path
const matchesRule = (path: string, rule: RedirectRule): boolean => {
  if (typeof rule.from === 'string') {
    return path === rule.from;
  } else if (rule.from instanceof RegExp) {
    return rule.from.test(path);
  }
  return false;
};

// Apply redirect rule to get destination
const applyRedirect = (path: string, rule: RedirectRule): string => {
  if (typeof rule.from === 'string') {
    return rule.to;
  } else if (rule.from instanceof RegExp) {
    return path.replace(rule.from, rule.to);
  }
  return rule.to;
};

// Find the first matching redirect rule
export const findRedirect = (path: string): { to: string; permanent: boolean } | null => {
  for (const rule of REDIRECT_RULES) {
    if (rule.condition && !rule.condition()) {
      continue;
    }
    
    if (matchesRule(path, rule)) {
      return {
        to: applyRedirect(path, rule),
        permanent: rule.permanent || false
      };
    }
  }
  
  return null;
};

// Handle redirect in React Router context
export const handleRouterRedirect = (path: string, navigate: (to: string, options?: any) => void) => {
  const redirect = findRedirect(path);
  
  if (redirect) {
    navigate(redirect.to, { replace: redirect.permanent });
    return true;
  }
  
  return false;
};

// Server-side redirect handling (for SSR or API routes)
export const handleServerRedirect = (path: string): { shouldRedirect: boolean; location?: string; statusCode?: number } => {
  const redirect = findRedirect(path);
  
  if (redirect) {
    return {
      shouldRedirect: true,
      location: redirect.to,
      statusCode: redirect.permanent ? 301 : 302
    };
  }
  
  return { shouldRedirect: false };
};

// Add new redirect rule at runtime
export const addRedirectRule = (rule: RedirectRule): void => {
  REDIRECT_RULES.push(rule);
};

// Remove redirect rule by pattern
export const removeRedirectRule = (from: string | RegExp): boolean => {
  const index = REDIRECT_RULES.findIndex(rule => {
    if (typeof from === 'string' && typeof rule.from === 'string') {
      return rule.from === from;
    }
    if (from instanceof RegExp && rule.from instanceof RegExp) {
      return rule.from.toString() === from.toString();
    }
    return false;
  });
  
  if (index !== -1) {
    REDIRECT_RULES.splice(index, 1);
    return true;
  }
  
  return false;
};

// Get all redirect rules (for debugging)
export const getRedirectRules = (): RedirectRule[] => {
  return [...REDIRECT_RULES];
};

// Normalize URL for consistent redirects
export const normalizeUrl = (url: string): string => {
  let normalized = url.toLowerCase();
  
  // Remove trailing slash except for root
  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1);
  }
  
  // Remove common file extensions
  normalized = normalized.replace(/\.(html|php|asp|aspx)$/i, '');
  
  return normalized;
};

// Check if URL should be redirected based on common patterns
export const shouldRedirect = (currentPath: string): boolean => {
  const normalized = normalizeUrl(currentPath);
  return currentPath !== normalized || findRedirect(currentPath) !== null;
};

// Log redirect for analytics
export const logRedirect = (from: string, to: string, permanent: boolean): void => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'page_redirect', {
      redirect_from: from,
      redirect_to: to,
      redirect_type: permanent ? 'permanent' : 'temporary'
    });
  }
};

export default {
  findRedirect,
  handleRouterRedirect,
  handleServerRedirect,
  addRedirectRule,
  removeRedirectRule,
  getRedirectRules,
  normalizeUrl,
  shouldRedirect,
  logRedirect
};