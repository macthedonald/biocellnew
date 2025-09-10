import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  HelpCircle,
  Phone,
  Download
} from "lucide-react";
import labHeroBg from "@/assets/lab-hero-bg.jpg";
import regenerativeProcessImg from "@/assets/regenerative-process-infographic.jpg";
import safetyQualityImg from "@/assets/safety-quality-infographic.jpg";
import treatmentTimelineImg from "@/assets/treatment-timeline-infographic.jpg";
import cellularResearchLab from "@/assets/cellular-research-lab.jpg";
import stemCellFacility from "@/assets/stem-cell-facility.jpg";
import qualityControlLab from "@/assets/quality-control-lab.jpg";
import cryogenicStorage from "@/assets/cryogenic-storage.jpg";

const Resources = () => {
  // Updated component with new image imports
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
              Access comprehensive resources, clinical documentation, and educational materials about regenerative medicine
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-black font-semibold">
              <Download className="w-5 h-5 mr-2" />
              Download Resources
            </Button>
          </div>
        </div>
      </section>

      {/* Visual Learning Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          
          {/* How It Works Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  Regenerative Process
                </Badge>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  How Regenerative Medicine Works
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our regenerative medicine process harnesses your body's natural healing mechanisms through advanced cellular therapies. Using carefully selected stem cells and growth factors, we activate your body's repair systems to restore damaged tissues and promote natural healing.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Targeted cellular delivery to damaged tissues</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Natural tissue regeneration and repair</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Reduced inflammation and accelerated healing</span>
                  </li>
                </ul>
              </div>
              <div>
                <Card className="border-0 shadow-medical overflow-hidden">
                  <img 
                    src={regenerativeProcessImg} 
                    alt="Regenerative Medicine Process"
                    className="w-full h-auto"
                  />
                </Card>
              </div>
            </div>
          </div>

          {/* Safety Standards Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <Badge variant="secondary" className="mb-4">
                  Quality Assurance
                </Badge>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Rigorous Safety Standards
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Every cellular product we use undergoes extensive quality control testing and is sourced from FDA-registered laboratories. Our commitment to safety ensures each treatment meets the highest medical standards and regulatory requirements.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>FDA-registered laboratory sourcing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Comprehensive sterility testing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Strict chain of custody protocols</span>
                  </li>
                </ul>
              </div>
              <div className="lg:order-1">
                <Card className="border-0 shadow-medical overflow-hidden">
                  <img 
                    src={safetyQualityImg} 
                    alt="Safety and Quality Standards"
                    className="w-full h-auto"
                  />
                </Card>
              </div>
            </div>
          </div>

          {/* Treatment Journey Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  Treatment Timeline
                </Badge>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Your Treatment Journey
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  From initial consultation to recovery, we guide you through every step of your regenerative medicine journey. Our personalized approach ensures optimal outcomes tailored to your specific condition and health goals.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Comprehensive medical evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Personalized treatment planning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Ongoing monitoring and support</span>
                  </li>
                </ul>
              </div>
              <div>
                <Card className="border-0 shadow-medical overflow-hidden">
                  <img 
                    src={treatmentTimelineImg} 
                    alt="Treatment Timeline"
                    className="w-full h-auto"
                  />
                </Card>
              </div>
            </div>
          </div>


          {/* Research Gallery */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Research Laboratory Gallery
              </h3>
              <p className="text-muted-foreground">
                Advanced facilities and cutting-edge research technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="group hover:shadow-medical transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100">
                  <img 
                    src={cellularResearchLab} 
                    alt="Cellular Research Laboratory"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              <Card className="group hover:shadow-medical transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100">
                  <img 
                    src={stemCellFacility} 
                    alt="Stem Cell Processing Facility"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              <Card className="group hover:shadow-medical transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-purple-50 to-purple-100">
                  <img 
                    src={qualityControlLab} 
                    alt="Quality Control Laboratory"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              <Card className="group hover:shadow-medical transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-orange-50 to-orange-100">
                  <img 
                    src={cryogenicStorage} 
                    alt="Cryogenic Storage Facility"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>
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