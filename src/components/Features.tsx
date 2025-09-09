import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Microscope, 
  Award, 
  Users, 
  Shield,
  Zap,
  Target
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Medical Professionals",
      description: "Our team of experienced medical professionals provides personalized assessments and custom recovery plans tailored to your unique health needs.",
      badge: "Personalized Care"
    },
    {
      icon: Shield,
      title: "Scientifically-Backed Solutions",
      description: "We provide only the safest and most effective regenerative products, grounded in extensive research and clinical studies with regulatory compliance.",
      badge: "FDA Compliant"
    },
    {
      icon: Zap,
      title: "Industry-Leading Innovation",
      description: "Access to the most clinically advanced cellular products including MSC Exosomal Lysate, CBSC cryo, and fresh MSC stem cells.",
      badge: "Advanced Technology"
    }
  ];

  return (
    <section id="about" className="py-20 bg-medical-light">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Advanced Bio-Therapies
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose BioCellRx
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-leading cellular products backed by two decades of research 
            and development in stem cell therapeutics
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-medical transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8 text-center">
                <Badge variant="outline" className="mb-4 border-accent/20 text-accent">
                  {feature.badge}
                </Badge>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Exclusive Preview
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              See the Science Behind the Breakthrough
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Go inside our state-of-the-art laboratory and witness the precision 
              technology that's transforming lives
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl overflow-hidden border border-accent/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-4 cursor-pointer hover:bg-accent/90 transition-colors">
                    <svg className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-foreground">BioCellRx Explainer Video</p>
                  <p className="text-muted-foreground">3.2M views • See our breakthrough technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;