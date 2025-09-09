import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Phone,
  ArrowRight,
  Users,
  Calendar,
  Building,
  TrendingUp,
  CheckCircle
} from "lucide-react";
import labHeroBg from "@/assets/lab-hero-bg.jpg";
import eloisaPhoto from "@/assets/eloisa-photo.jpg";

const About = () => {
  const stats = [
    { number: "20+", label: "Years of Research", icon: Calendar },
    { number: "1000+", label: "Patients Treated", icon: Users },
    { number: "50+", label: "Medical Partners", icon: Building },
    { number: "95%", label: "Success Rate", icon: TrendingUp }
  ];

  const conditions = [
    {
      title: "Arthritis",
      description: "Advanced treatment that repairs damaged joint cartilage and reduces inflammation, leading to improved mobility and reduced pain."
    },
    {
      title: "Cancer Support", 
      description: "Stem cell transplants for leukemia and lymphoma, replacing cells damaged by disease and offering vital pathways to recovery."
    },
    {
      title: "Parkinson's Disease",
      description: "Repair nerve damage and replace dopamine-producing brain cells, potentially slowing progression and improving quality of life."
    },
    {
      title: "Cardiac Regeneration",
      description: "Repair and replace damaged heart tissue and blood vessels for patients with heart attacks, heart failure, and vessel disease."
    },
    {
      title: "Multiple Sclerosis",
      description: "Repair neurological damage by traveling directly to brain lesions and controlling unusual immune system activity."
    },
    {
      title: "Diabetes Management",
      description: "Replace missing or damaged beta cells in the pancreas to improve glycemic control and reduce insulin dependence."
    },
    {
      title: "Fibromyalgia Relief",
      description: "Modulate inflammatory responses and repair damaged nerve cells that send erroneous pain signals."
    },
    {
      title: "Kidney Disease",
      description: "Transform into kidney tissue to treat acute and chronic injury, replacing damaged cells and restoring function."
    }
  ];

  const eloisaSkills = [
    "Scientific Pathology Education",
    "Assessment Training", 
    "Business Development",
    "Clinical Compliance"
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
              PIONEERING EXCELLENCE
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              About
              <span className="block bg-gradient-to-r from-accent to-accent-foreground bg-clip-text text-transparent">
                BioCellRx
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Standing at the intersection of medical science and technological advancement, 
              revolutionizing health and wellness for over <span className="text-accent font-semibold">two decades</span>
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

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At BioCellRx, our team of dedicated medical professionals and scientists has been at the forefront of regenerative medicine, conducting rigorous research and achieving breakthrough results in cellular therapies.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We are proud to be a leader in developing clinically advanced cellular products, offering hope and effective solutions for conditions once deemed untreatable.
              </p>
              <Button variant="medical" size="lg">
                Discover Your Treatment Options
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center bg-gradient-to-br from-accent/5 to-accent/10 border-0">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent to-accent-foreground rounded-full mb-4">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visionary Leadership */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Visionary Leadership
            </h2>
          </div>

          <Card className="max-w-4xl mx-auto bg-white border-0 shadow-medical overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    Eloisa Sultan
                  </h3>
                  <p className="text-accent font-semibold text-lg mb-4">
                    Medical Science Liaison
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Eloisa has cultivated exponential trust among nationwide doctors, clinics, and practitioners through her unwavering dedication and comprehensive expertise.
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {eloisaSkills.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  As a hands-on mobile clinician, Eloisa travels for Orthopedic clinics, VA groups, and athletic departments, demonstrating profound commitment to patient care and professional support.
                </p>
              </div>
              
              <div className="h-full">
                <img 
                  src={eloisaPhoto} 
                  alt="Eloisa Sultan - Medical Science Liaison"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Conditions We Transform */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Conditions We Transform
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Stem cell therapy represents a paradigm shift in modern medicine, offering powerful approaches to managing chronic conditions and promoting natural healing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {conditions.map((condition, index) => (
              <Card key={index} className="group hover:shadow-medical transition-all duration-300 border-0 bg-white h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {condition.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {condition.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
              This list is not exhaustive. Based on your individual medical history and symptoms, our medical professionals may recommend stem cell therapy for other conditions.
            </p>
            <Button variant="medical" size="lg">
              Explore Your Treatment Options
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Unlock Your Body's Healing Potential
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              BioCellRx is committed to advancing health through innovative science and compassionate care. 
              Contact us to discover how stem cell therapy can transform your health journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="medical">
                Schedule Your Consultation
              </Button>
              <Button variant="outline" size="lg">
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;