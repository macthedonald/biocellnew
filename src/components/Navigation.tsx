import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", href: "/", isRoute: true },
    { name: "Wellness and Biologics", href: "/services", isRoute: true },
    { name: "About", href: "/about", isRoute: true },
    { name: "Contact", href: "/contact", isRoute: true },
    { name: "Knowledge Center", href: "/resources", isRoute: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/abc8e5e6-fdc8-4aeb-83a6-f51637383091.png" 
              alt="BioCellRx Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Navigation Links - Make sure they're always visible */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors duration-300 ${
                    location.pathname === item.href 
                      ? "text-accent font-medium" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item.name}
                </a>
              )
            )}
          </div>

          {/* CTA Button */}
          <Link to="/contact">
            <Button variant="cta" size="lg">
              Book Consultation
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;