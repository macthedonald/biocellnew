import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { findRedirect, logRedirect, normalizeUrl } from '../utils/redirectHandler';

interface RedirectHandlerProps {
  children?: React.ReactNode;
}

const RedirectHandler: React.FC<RedirectHandlerProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = location.pathname;
    
    // First, try to normalize the URL
    const normalizedPath = normalizeUrl(currentPath);
    
    // If the path needs normalization, redirect to normalized version
    if (currentPath !== normalizedPath && normalizedPath !== currentPath.toLowerCase()) {
      navigate(normalizedPath, { replace: true });
      return;
    }
    
    // Then check for explicit redirect rules
    const redirect = findRedirect(currentPath);
    
    if (redirect) {
      // Log the redirect for analytics
      logRedirect(currentPath, redirect.to, redirect.permanent);
      
      // Perform the redirect with proper error handling
      try {
        navigate(redirect.to, { 
          replace: redirect.permanent,
          state: { redirected: true, originalPath: currentPath }
        });
      } catch (error) {
        console.error('Navigation error:', error);
        // Fallback to window.location for problematic cases
        window.location.href = redirect.to;
      }
    }
  }, [location.pathname, navigate]);

  return <>{children}</>;
};

export default RedirectHandler;