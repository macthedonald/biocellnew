import { useEffect } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  AlertCircle, 
  RefreshCw, 
  Phone, 
  Mail,
  Clock,
  Settings
} from "lucide-react";

const ServiceUnavailable = () => {
  useEffect(() => {
    // Track 503 errors for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'service_unavailable', {
        event_category: 'Error',
        event_label: 'Maintenance Mode',
        value: 1
      });
    }
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <SEO 
        title="Service Temporarily Unavailable - BioCellRx"
        description="BioCellRx is currently undergoing maintenance to improve our services. We'll be back shortly with enhanced regenerative medicine solutions."
        canonical="https://biocellrx.com/503"
      />
      <div className="min-h-screen bg-background flex items-center justify-center py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            {/* Error Icon and Code */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-accent/10 rounded-full mb-6">
                <Settings className="w-12 h-12 text-accent" />
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-accent mb-4">503</h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Service Temporarily Unavailable
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're currently performing scheduled maintenance to enhance your experience 
                with our regenerative medicine services. Please check back shortly.
              </p>
            </div>

            {/* Status Information */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-accent mr-2" />
                  <span className="text-foreground font-medium">Estimated Restoration Time</span>
                </div>
                <p className="text-2xl font-bold text-accent mb-2">
                  Within 2 Hours
                </p>
                <p className="text-sm text-muted-foreground">
                  We're working hard to restore full functionality as quickly as possible.
                </p>
              </CardContent>
            </Card>

            {/* What's Being Improved */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  What We're Improving:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <AlertCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Enhanced performance</span>
                  </div>
                  <div className="flex items-center">
                    <AlertCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Security updates</span>
                  </div>
                  <div className="flex items-center">
                    <AlertCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground">New features</span>
                  </div>
                  <div className="flex items-center">
                    <AlertCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Database optimization</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our support team is still available for urgent inquiries:
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="tel:+18585197305">
                    <Button variant="medical" size="lg" className="w-full sm:w-auto">
                      <Phone className="w-4 h-4 mr-2" />
                      Call (858) 519-7305
                    </Button>
                  </a>
                  <a href="mailto:info@biocellrx.com">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Support
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Refresh Button */}
            <div className="mb-8">
              <Button onClick={handleRefresh} variant="outline" size="lg">
                <RefreshCw className="w-4 h-4 mr-2" />
                Check Again
              </Button>
            </div>

            {/* Auto-refresh notice */}
            <div className="text-sm text-muted-foreground">
              <p>This page will automatically refresh every 5 minutes</p>
              <p className="mt-2">
                Thank you for your patience as we improve your BioCellRx experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Auto-refresh script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            setTimeout(function() {
              window.location.reload();
            }, 300000); // 5 minutes
          `
        }}
      />
    </>
  );
};

export default ServiceUnavailable;