import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
            <Badge variant="secondary" className="mb-6 bg-accent/20 text-accent border-accent/30">
              CONTACT OUR TEAM
            </Badge>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-medical transition-all duration-300 border-0 bg-white text-center">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent to-accent-foreground rounded-full mb-4 mx-auto">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {info.href ? (
                    <a 
                      href={info.href}
                      className="font-medium text-accent hover:text-accent/80 transition-colors block"
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-medium text-accent">
                      {info.value}
                    </p>
                  )}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* New Patient Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-foreground">
                  New Patient Form
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out this form and send it to us to save time when you come in for your appointment.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="primaryHealthConcern">Primary Health Concern</Label>
                    <Input
                      id="primaryHealthConcern"
                      name="primaryHealthConcern"
                      value={formData.primaryHealthConcern}
                      onChange={handleInputChange}
                      className="bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      rows={4}
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      className="bg-white"
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreeToComms"
                      checked={formData.agreeToComms}
                      onCheckedChange={handleCheckboxChange}
                      required
                    />
                    <Label htmlFor="agreeToComms" className="text-sm leading-relaxed">
                      I agree to receive communications from BioCellRx regarding my inquiry and understand that I can unsubscribe at any time. *
                    </Label>
                  </div>

                  <Button type="submit" size="lg" variant="medical" className="w-full">
                    Send New Patient Form
                  </Button>
                </form>
              </CardContent>
            </Card>
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
              <Button variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;