import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Phone,
  ArrowRight,
  Mail,
  Clock,
  Facebook
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import labHeroBg from "@/assets/lab-hero-bg.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    primaryHealthConcern: "",
    additionalInfo: "",
    agreeToComms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      agreeToComms: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToComms) {
      toast({
        title: "Agreement Required",
        description: "Please agree to receive communications to proceed.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Form Submitted Successfully!",
      description: "We'll contact you soon to schedule your consultation.",
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      primaryHealthConcern: "",
      additionalInfo: "",
      agreeToComms: false
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "(858) 519-7305",
      description: "Call today to schedule an appointment or phone consultation",
      href: "tel:+18585197305"
    },
    {
      icon: Mail,
      title: "Email", 
      value: "info@biocellrx.com",
      description: "Send us your questions or new patient forms",
      href: "mailto:info@biocellrx.com"
    },
    {
      icon: Clock,
      title: "Hours",
      value: "Monday - Friday: 8AM–8PM",
      description: "Saturday: 8AM–6PM, Sunday: Closed",
      href: null
    },
    {
      icon: Facebook,
      title: "Follow Us",
      value: "Facebook Page",
      description: "Stay updated with our latest treatments and wellness tips",
      href: "https://www.facebook.com/111531213660668"
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 text-white overflow-hidden"
        style={{
          backgroundImage: `url(${labHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Ready to Transform
              <span className="block bg-gradient-to-r from-accent to-accent-foreground bg-clip-text text-transparent">
                Your Health?
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Schedule your personalized consultation today and discover how our advanced regenerative therapies can help you achieve optimal wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-black font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Call (858) 519-7305
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                Schedule Online
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Contact us directly with any questions, comments, or scheduling inquiries. Our team is here to support your wellness journey.
            </p>
          </div>

          {/* Contact Form Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Side - Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg flex-shrink-0">
                    <info.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-lg font-medium text-accent hover:text-accent/80 transition-colors block mb-2"
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-accent mb-2">
                        {info.value}
                      </p>
                    )}
                    <p className="text-muted-foreground leading-relaxed">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-2xl p-8 border border-border shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground font-medium">
                      First Name <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your first name"
                      className="bg-white border-border focus:border-accent focus:ring-accent/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground font-medium">
                      Last Name <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your last name"
                      className="bg-white border-border focus:border-accent focus:ring-accent/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                    className="bg-white border-border focus:border-accent focus:ring-accent/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    Phone Number <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="(555) 123-4567"
                    className="bg-white border-border focus:border-accent focus:ring-accent/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="primaryHealthConcern" className="text-foreground font-medium">
                    Primary Health Concern
                  </Label>
                  <Input
                    id="primaryHealthConcern"
                    name="primaryHealthConcern"
                    value={formData.primaryHealthConcern}
                    onChange={handleInputChange}
                    placeholder="What brings you to BioCellRx?"
                    className="bg-white border-border focus:border-accent focus:ring-accent/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo" className="text-foreground font-medium">
                    Additional Information
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={4}
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your health goals or any questions you have..."
                    className="bg-white border-border focus:border-accent focus:ring-accent/20 resize-none"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreeToComms"
                    checked={formData.agreeToComms}
                    onCheckedChange={handleCheckboxChange}
                    required
                    className="border-border data-[state=checked]:bg-accent data-[state=checked]:border-accent mt-1"
                  />
                  <Label htmlFor="agreeToComms" className="text-sm leading-relaxed text-muted-foreground">
                    I agree to receive communications from BioCellRx regarding my inquiry and understand that I can unsubscribe at any time. <span className="text-accent">*</span>
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-black font-semibold py-4 rounded-lg transition-all duration-300"
                >
                  Send New Patient Form
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Begin Your Wellness Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don't wait to start feeling your best. Our team is standing by to help you discover the transformative power of regenerative medicine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-black font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (858) 519-7305
              </Button>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;