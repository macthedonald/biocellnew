import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", href: "/", isRoute: true },
    { name: "Services", href: "/services", isRoute: true },
    { name: "About", href: "/about", isRoute: true },
    { name: "Contact", href: "#contact", isRoute: false },
    { name: "Products", href: "#products", isRoute: false },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-foreground">BioCellRx</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
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
          <Button variant="cta" size="lg">
            Book Consultation
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;