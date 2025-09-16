import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cookie, X } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("biocellrx-cookie-consent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("biocellrx-cookie-consent", "accepted");
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem("biocellrx-cookie-consent", "declined");
    setShowConsent(false);
  };

  const handleClose = () => {
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
      <Card className="max-w-4xl mx-auto p-6 bg-white border border-accent/20 shadow-lg backdrop-blur-sm">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            <Cookie className="w-6 h-6 text-accent" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              We Value Your Privacy
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              BioCellRx uses cookies to enhance your browsing experience, provide personalized content, 
              and analyze website traffic. These cookies help us understand how you interact with our site 
              and improve our services. By clicking "Accept All," you consent to our use of cookies for 
              analytics, personalization, and marketing purposes.
            </p>
            <p className="text-muted-foreground text-xs mb-4">
              You can manage your cookie preferences at any time. For more information, please read our{" "}
              <Link to="/privacy-policy" className="text-accent hover:text-accent/80 underline">
                Privacy Policy
              </Link>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={handleAccept}
                variant="medical"
                size="sm"
                className="flex-1 sm:flex-none"
              >
                Accept All Cookies
              </Button>
              <Button 
                onClick={handleDecline}
                variant="outline"
                size="sm"
                className="flex-1 sm:flex-none border-accent text-accent hover:bg-accent hover:text-black"
              >
                Decline Non-Essential
              </Button>
            </div>
          </div>
          
          <Button
            onClick={handleClose}
            variant="ghost"
            size="sm"
            className="flex-shrink-0 h-8 w-8 p-0"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CookieConsent;