import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  FileText,
  Download,
  BookOpen,
  HelpCircle,
  Users,
  Award,
  Shield,
  Phone
} from "lucide-react";
import labHeroBg from "@/assets/lab-hero-bg.jpg";
import regenerativeProcessImg from "@/assets/regenerative-process-infographic.jpg";
import safetyQualityImg from "@/assets/safety-quality-infographic.jpg";
import treatmentTimelineImg from "@/assets/treatment-timeline-infographic.jpg";

const Resources = () => {
  const resourceCategories = [
    {
      icon: FileText,
      title: "Clinical Documentation",
      description: "Access comprehensive clinical studies and research papers supporting our regenerative therapies",
      resources: [
        "Stem Cell Therapy Research Compendium",
        "MSC Exosomal Lysate Clinical Studies",
        "Safety & Efficacy Documentation",
        "Regulatory Compliance Guidelines"
      ]
    },
    {
      icon: BookOpen,
      title: "Educational Materials",
      description: "Learn about regenerative medicine, treatment protocols, and recovery expectations",
      resources: [
        "Patient Education Handbook",
        "Understanding Stem Cell Therapy",
        "Treatment Protocol Guidelines",
        "Recovery & Aftercare Instructions"
      ]
    },
    {
      icon: Users,
      title: "Provider Resources",
      description: "Comprehensive resources for healthcare practitioners and medical professionals",
      resources: [
        "Practitioner Training Materials",
        "Clinical Implementation Guide",
        "Assessment & Evaluation Tools",
        "Professional Certification Programs"
      ]
    },
    {
      icon: Shield,
      title: "Safety & Quality",
      description: "Documentation ensuring the highest standards of safety and quality in our treatments",
      resources: [
        "Quality Assurance Protocols",
        "Safety Data Sheets",
        "Laboratory Certifications",
        "Regulatory Approvals"
      ]
    }
  ];

  const faqs = [
    {
      question: "What is regenerative medicine and how does it work?",
      answer: "Regenerative medicine harnesses your body's natural healing mechanisms to repair damaged tissues and organs. Our advanced cellular therapies use stem cells and exosomes to promote tissue regeneration, reduce inflammation, and support the body's natural recovery processes."
    },
    {
      question: "Are stem cell treatments safe?",
      answer: "Yes, our stem cell treatments are rigorously tested and meet the highest safety standards. All our cellular products are sourced from FDA-registered laboratories and undergo extensive quality control testing. Our medical professionals carefully evaluate each patient to ensure treatment safety and efficacy."
    },
    {
      question: "What conditions can be treated with regenerative therapy?",
      answer: "Our regenerative therapies have shown effectiveness in treating various conditions including arthritis, sports injuries, chronic pain, autoimmune conditions, neurodegenerative diseases, and cardiovascular issues. Each treatment plan is personalized based on your specific condition and health profile."
    },
    {
      question: "How long does it take to see results?",
      answer: "Results vary depending on the condition being treated and individual patient factors. Some patients notice improvements within weeks, while others may see gradual progress over several months. Our medical team will discuss realistic timelines during your consultation."
    },
    {
      question: "What is the difference between MSC, CBSC, and Exosomal therapies?",
      answer: "MSCs (Mesenchymal Stem Cells) are multipotent cells that can differentiate into various tissue types. CBSC (Cord Blood Stem Cells) are harvested from umbilical cord blood and offer high potency. Exosomal therapy uses cellular communication vesicles that promote healing without using actual cells."
    },
    {
      question: "Is treatment covered by insurance?",
      answer: "Coverage varies by insurance provider and specific treatment. Many regenerative therapies are considered investigational and may not be covered. We recommend contacting your insurance provider to discuss coverage options. Our team can provide necessary documentation for insurance inquiries."
    },
    {
      question: "How do I prepare for my treatment?",
      answer: "Preparation varies by treatment type. Generally, patients should stay hydrated, avoid anti-inflammatory medications for a specified period, and follow any specific pre-treatment instructions provided by our medical team. Detailed preparation guidelines will be provided during your consultation."
    },
    {
      question: "What makes BioCellRx different from other providers?",
      answer: "BioCellRx stands out through our 20+ years of research experience, partnerships with leading laboratories, comprehensive medical network, and commitment to using only the highest quality cellular products. We provide personalized treatment plans and ongoing support throughout your healing journey."
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
              EDUCATIONAL RESOURCES
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Resources &
              <span className="block bg-gradient-to-r from-accent to-accent-foreground bg-clip-text text-transparent">
                Knowledge Center
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Access comprehensive resources, clinical documentation, and educational materials about regenerative medicine and our advanced therapeutic solutions
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-black font-semibold">
              <Download className="w-5 h-5 mr-2" />
              Download Resources
            </Button>
        </div>

        {/* Visual Learning Section - Infographics */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Visual Learning Center
            </h3>
            <p className="text-muted-foreground">
              Understanding regenerative medicine through visual guides
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-medical transition-all duration-300 border-0 bg-white overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100">
                <img 
                  src={regenerativeProcessImg} 
                  alt="Regenerative Medicine Process"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-foreground mb-2">How It Works</h4>
                <p className="text-sm text-muted-foreground">Visual guide to regenerative healing</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-medical transition-all duration-300 border-0 bg-white overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-50 to-green-100">
                <img 
                  src={safetyQualityImg} 
                  alt="Safety and Quality Standards"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-foreground mb-2">Safety Standards</h4>
                <p className="text-sm text-muted-foreground">Quality control and compliance</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-medical transition-all duration-300 border-0 bg-white overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-50 to-purple-100">
                <img 
                  src={treatmentTimelineImg} 
                  alt="Treatment Timeline"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-foreground mb-2">Treatment Journey</h4>
                <p className="text-sm text-muted-foreground">From consultation to recovery</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Educational Video Section */}
        <div className="mb-20">
          <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <Badge variant="secondary" className="mb-4">
                    Educational Video
                  </Badge>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Understanding Regenerative Medicine
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Watch our comprehensive educational video that explains the science behind regenerative medicine, treatment protocols, and patient success stories.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>• Treatment Overview</span>
                    <span>• Scientific Foundation</span>
                    <span>• Patient Stories</span>
                  </div>
                </div>
                <div className="relative aspect-video bg-black">
                  <iframe
                    src="https://player.vimeo.com/video/703393362?h=c2afb21c93&autoplay=0&title=0&portrait=0&byline=0&badge=0&loop=0&muted=0&controls=1"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Resource Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Explore our comprehensive collection of clinical documentation, educational materials, and professional resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-medical transition-all duration-300 border-0 bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent to-accent-foreground rounded-full">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {category.resources.map((resource, idx) => (
                      <Button 
                        key={idx} 
                        variant="ghost" 
                        size="sm" 
                        className="h-auto p-3 justify-start text-xs text-left"
                      >
                        <Download className="w-3 h-3 mr-2 flex-shrink-0" />
                        <span className="truncate">{resource}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Find answers to common questions about regenerative medicine, our treatments, and what to expect
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border-0 shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:no-underline">
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Research & Studies */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Scientific Excellence
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Backed by Scientific Research
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our treatments are supported by extensive clinical research and peer-reviewed studies. Access our research database to explore the scientific foundation behind our regenerative therapies.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-foreground">20+ Years of Clinical Research</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-accent" />
                  <span className="text-foreground">50+ Published Studies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="text-foreground">FDA-Registered Laboratory Partners</span>
                </div>
              </div>
              <Button variant="medical" size="lg">
                Access Research Database
              </Button>
            </div>

            <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Recent Publications
                </h3>
                <div className="space-y-4">
                  {[
                    "Efficacy of MSC Exosomal Therapy in Joint Regeneration",
                    "Long-term Safety Analysis of Stem Cell Treatments",
                    "Comparative Study: Fresh vs. Cryopreserved MSCs",
                    "Clinical Outcomes in Regenerative Orthopedics"
                  ].map((publication, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg">
                      <span className="font-medium text-foreground">{publication}</span>
                      <Button variant="ghost" size="sm" className="text-accent">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Need More Information?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our medical team is available to answer your questions and provide additional resources tailored to your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-black font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Contact Our Team
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

export default Resources;