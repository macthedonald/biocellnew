import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { findRedirect, logRedirect } from '../utils/redirectHandler';

interface RedirectHandlerProps {
  children?: React.ReactNode;
}

const RedirectHandler: React.FC<RedirectHandlerProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = location.pathname;
    const redirect = findRedirect(currentPath);
    
    if (redirect) {
      // Log the redirect for analytics
      logRedirect(currentPath, redirect.to, redirect.permanent);
      
      // Perform the redirect
      navigate(redirect.to, { 
        replace: redirect.permanent,
        state: { redirected: true, originalPath: currentPath }
      });
    }
  }, [location.pathname, navigate]);

  return <>{children}</>;
};

export default RedirectHandler;