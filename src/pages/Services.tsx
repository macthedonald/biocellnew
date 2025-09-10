import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  Phone,
  ArrowRight,
  Users,
  Stethoscope,
  Brain,
  Heart,
  Bone,
  Palette,
  Baby,
  UserCheck
} from "lucide-react";
import labHeroBg from "@/assets/lab-hero-bg.jpg";
import mscExosomalLysate from "@/assets/msc-exosomal-lysate.png";
import cbscCryo from "@/assets/cbsc-cryo.png";
import hucFreshMsc from "@/assets/huc-fresh-msc.png";

const Services = () => {
  const personalizedServices = [
    {
      title: "Individualized Health Assessments",
      description: "Comprehensive evaluations to understand your unique health profile and identify areas for improvement"
    },
    {
      title: "Innovative Treatment Protocols", 
      description: "Access to the latest and most effective treatments in regenerative medicine and holistic wellness"
    },
    {
      title: "Expert Practitioner Referrals",
      description: "Connections to a network of highly skilled and reputable specialists in your vicinity"
    },
    {
      title: "Ongoing Health Guidance",
      description: "Continuous support and education to keep you on track with your health goals"
    }
  ];

  const bioTherapies = [
    {
      title: "MSC Exosomal Lysate",
      badge: "Premium",
      description: "A potent cellular signaling vesicle transport, rich in cytokines and tetraspanin proteins, promoting extracellular matrix composition and aiding in immune regulation and tissue regeneration.",
      details: "Available in 5ml vials",
      image: mscExosomalLysate
    },
    {
      title: "CBSC cryo",
      badge: "Clinical Grade",
      description: "Developed from umbilical cord blood, CBSC® offers a concentrated cellular and protein therapeutic for localized treatments.",
      details: "Silver (8M), Gold (15M), Platinum (30M nucleated cells)",
      image: "/lovable-uploads/ac57993d-bdef-4edf-a603-8a8c226e58a3.png"
    },
    {
      title: "hUC Fresh MSC Stem Cells",
      badge: "Fresh",
      description: "Clinical-grade mesenchymal stem cells, non-frozen and fresh, obtained from umbilical cords with over 90% activity and 95% purity.",
      details: "Pharmaceutical-grade cGMP lab produced",
      image: hucFreshMsc
    },
    {
      title: "UC MSC 30 Million",
      badge: "Advanced",
      description: "DMSO-free, cryopreserved umbilical cord mesenchymal stem cells with ability to differentiate into bone, adipose, and cartilage lineages.",
      details: "30 Million cells, measured by surface markers",
      image: "/lovable-uploads/8362a3bb-d455-415a-a85d-5576bcf8a37d.png"
    }
  ];

  const specialists = [
    { name: "Aesthetics", icon: Palette },
    { name: "Orthopedic Surgeons", icon: Bone },
    { name: "Pain Specialists", icon: Heart },
    { name: "Plastic Surgery", icon: UserCheck },
    { name: "Dental", icon: Users },
    { name: "Internal Medicine", icon: Stethoscope },
    { name: "General Medicine", icon: Brain },
    { name: "Pediatrics", icon: Baby }
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
              Products &
              <span className="block bg-gradient-to-r from-accent to-accent-foreground bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive regenerative medicine services and cutting-edge products designed to support your body's natural healing processes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-black font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Call (858) 519-7305
              </Button>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                  View Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Wellness Support */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Personalized Wellness Support
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our dedicated team of medical professionals provides unparalleled wellness support, working collaboratively to build a healthier you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalizedServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-medical transition-all duration-300 border-0 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground flex items-center">
                    <CheckCircle className="w-6 h-6 text-accent mr-3" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Bio-Therapies */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Advanced Bio-Therapies & Regenerative Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Your gateway to the most advanced bio-therapies and regenerative products available, partnered with leading laboratories prioritizing safety and quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bioTherapies.map((therapy, index) => (
              <Card key={index} className="group hover:shadow-medical transition-all duration-300 border-0 bg-white">
                <CardHeader className="text-center">
                  <div className="mb-4">
                    <img 
                      src={therapy.image} 
                      alt={therapy.title}
                      className="w-32 h-32 mx-auto object-contain"
                    />
                  </div>
                  <div className="mb-2">
                    <Badge variant="secondary" className="bg-accent/20 text-accent">
                      {therapy.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {therapy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {therapy.description}
                  </p>
                  <p className="text-sm font-medium text-accent">
                    {therapy.details}
                  </p>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full">
                      Book a call
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Medical Care Network */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Specialized Medical Care Network
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Access to a comprehensive network of local specialists ensuring complete care for all your health needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specialists.map((specialist, index) => (
              <Card key={index} className="group hover:shadow-medical transition-all duration-300 border-0 bg-white text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent to-accent-foreground rounded-full mb-4">
                    <specialist.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {specialist.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Take a proactive step towards a healthier, more fulfilling life with BioCellRx's innovative solutions
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button size="lg" variant="medical">
                  Book Your Consultation
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

export default Services;