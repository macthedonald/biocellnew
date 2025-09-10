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
import researchImage1 from "@/assets/research-image-1.jpg";
import researchImage2 from "@/assets/research-image-2.png";
import researchImage3 from "@/assets/research-image-3.png";
import processGraph from "@/assets/process-graph.jpg";
import researchImage5 from "@/assets/research-image-5.jpg";

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
          
          {/* Educational Infographics - Vertical Layout */}
          
          {/* Stem Cell Fundamentals */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  Educational Guide
                </Badge>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Understanding Stem Cells
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Learn about mesenchymal stem cells and their unique abilities to reduce inflammation, self-replicate, fight cell death, and differentiate into multiple tissue types including bone, muscle, cartilage, and fat.
                </p>
              </div>
              <div>
                <Card className="border-0 shadow-medical overflow-hidden">
                  <img 
                    src={researchImage1} 
                    alt="What is a Stem Cell - Complete Educational Guide"
                    className="w-full h-auto"
                  />
                </Card>
              </div>
            </div>
          </div>

          {/* Therapy Benefits */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <Badge variant="secondary" className="mb-4">
                  Treatment Applications
                </Badge>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Comprehensive Therapy Benefits
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Discover how stem cell therapy can effectively treat over 65 different conditions including diabetes, stroke, dementia, arthritis, retinal diseases, leukemia, and cancer with proven therapeutic benefits.
                </p>
              </div>
              <div className="lg:order-1">
                <Card className="border-0 shadow-medical overflow-hidden">
                  <img 
                    src={researchImage2} 
                    alt="Stem Cell Therapy Benefits for Multiple Medical Conditions"
                    className="w-full h-auto"
                  />
                </Card>
              </div>
            </div>
          </div>

          {/* Market Research */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  Industry Analysis
                </Badge>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Cell Culture Market Insights
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Comprehensive market analysis covering biopharmaceutical applications, cancer research, stem cell technologies, and regenerative medicine with detailed industry trends and forecasts for 2018-2023.
                </p>
              </div>
              <div>
                <Card className="border-0 shadow-medical overflow-hidden">
                  <img 
                    src={researchImage3} 
                    alt="Cell Culture Market Analysis and Industry Research"
                    className="w-full h-auto"
                  />
                </Card>
              </div>
            </div>
          </div>

          {/* Treatment Process */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <Badge variant="secondary" className="mb-4">
                  Process Workflow
                </Badge>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Stem Cell Processing Journey
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Step-by-step breakdown of the complete stem cell treatment process from collection of bone marrow, peripheral blood, or umbilical cord blood through processing, freezing, and final transplantation.
                </p>
              </div>
              <div className="lg:order-1">
                <Card className="border-0 shadow-medical overflow-hidden">
                  <img 
                    src={processGraph} 
                    alt="Complete Stem Cell Processing and Treatment Workflow"
                    className="w-full h-auto"
                  />
                </Card>
              </div>
            </div>
          </div>

          {/* Joint Conditions */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  Specialized Treatment
                </Badge>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Joint Conditions Therapy
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Specialized regenerative medicine solutions for joint conditions including knee pain, joint pain, and osteoarthritis, with detailed FDA criteria and clinical trial information for effective treatment outcomes.
                </p>
              </div>
              <div>
                <Card className="border-0 shadow-medical overflow-hidden">
                  <img 
                    src={researchImage5} 
                    alt="Joint Conditions and Regenerative Medicine Treatment Guide"
                    className="w-full h-auto"
                  />
                </Card>
              </div>
            </div>
          </div>

          {/* Educational Video Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Advanced Research & Technology
              </h3>
              <p className="text-muted-foreground">
                See our cutting-edge research facilities and breakthrough technology in action
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-accent/20 shadow-medical transition-all duration-300">
              <iframe
                src="https://player.vimeo.com/video/703393362?h=c2afb21c93&autoplay=1&title=0&portrait=0&byline=0&badge=0&loop=0&muted=1&controls=1"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
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