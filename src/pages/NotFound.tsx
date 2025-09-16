import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, Phone, ArrowLeft, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    // Track 404 errors for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_not_found', {
        event_category: 'Error',
        event_label: location.pathname,
        value: 1
      });
    }
    
    // Generate suggestions based on pathname
    generateSuggestions(location.pathname);
  }, [location.pathname]);

  const generateSuggestions = (pathname: string) => {
    const suggestions = [];
    
    if (pathname.includes('service') || pathname.includes('treatment')) {
      suggestions.push('/services');
    }
    if (pathname.includes('about') || pathname.includes('team')) {
      suggestions.push('/about');
    }
    if (pathname.includes('contact') || pathname.includes('consultation')) {
      suggestions.push('/contact');
    }
    if (pathname.includes('resource') || pathname.includes('knowledge') || pathname.includes('faq')) {
      suggestions.push('/resources');
    }
    if (pathname.includes('privacy')) {
      suggestions.push('/privacy-policy');
    }
    if (pathname.includes('terms')) {
      suggestions.push('/terms-of-service');
    }
    
    setSuggestions(suggestions.length > 0 ? suggestions : ['/services', '/about', '/contact']);
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      // Redirect to home with search intent
      window.location.href = `/?search=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <>
      <SEO 
        title="Page Not Found - 404 Error | BioCellRx"
        description="The page you're looking for couldn't be found. Explore our regenerative medicine services, stem cell therapy, and wellness solutions."
        canonical={`https://biocellrx.com${location.pathname}`}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex min-h-[calc(100vh-200px)] items-center justify-center py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              {/* Error Icon and Code */}
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-accent/10 rounded-full mb-6">
                  <AlertTriangle className="w-12 h-12 text-accent" />
                </div>
                <h1 className="text-6xl md:text-8xl font-bold text-accent mb-4">404</h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Page Not Found
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  The page you're looking for doesn't exist or has been moved. 
                  Let's help you find what you need.
                </p>
              </div>

              {/* Search Box */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Search for services, treatments, or information..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                      />
                    </div>
                    <Button onClick={handleSearch} variant="medical" className="sm:w-auto">
                      <Search className="w-4 h-4 mr-2" />
                      Search
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Suggested Pages */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Try these popular pages:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {suggestions.map((path, index) => {
                    const getPageInfo = (path: string) => {
                      switch (path) {
                        case '/services': return { name: 'Our Services', desc: 'Regenerative Medicine' };
                        case '/about': return { name: 'About Us', desc: 'Our Story & Team' };
                        case '/contact': return { name: 'Contact', desc: 'Schedule Consultation' };
                        case '/resources': return { name: 'Resources', desc: 'Knowledge Center' };
                        case '/privacy-policy': return { name: 'Privacy Policy', desc: 'Data Protection' };
                        case '/terms-of-service': return { name: 'Terms of Service', desc: 'Legal Terms' };
                        default: return { name: 'Page', desc: 'Information' };
                      }
                    };
                    
                    const pageInfo = getPageInfo(path);
                    
                    return (
                      <Link key={index} to={path} className="group">
                        <Card className="h-full hover:shadow-medical transition-all duration-300 hover-scale">
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                              {pageInfo.name}
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {pageInfo.desc}
                            </p>
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link to="/">
                  <Button variant="medical" size="lg" className="w-full sm:w-auto">
                    <Home className="w-4 h-4 mr-2" />
                    Go to Homepage
                  </Button>
                </Link>
                <a href="tel:+18585197305">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Phone className="w-4 h-4 mr-2" />
                    Call (858) 519-7305
                  </Button>
                </a>
              </div>

              {/* Error Details for Debugging */}
              <div className="text-sm text-muted-foreground">
                <p>Error Code: 404 | Requested URL: {location.pathname}</p>
                <p className="mt-2">
                  If you believe this is an error, please{" "}
                  <Link to="/contact" className="text-accent hover:underline">
                    contact our support team
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
