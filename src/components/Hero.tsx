import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Award, Network } from "lucide-react";
import { Link } from "react-router-dom";
import labHeroBg from "@/assets/lab-hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen h-screen sm:min-h-screen sm:h-auto flex items-center justify-center overflow-hidden" role="banner" aria-label="BioCellRx Hero Section">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${labHeroBg})`,
          backgroundPosition: 'center 20%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-medical-dark/90 to-medical-dark/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 sm:pt-28 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
            Advanced{" "}
            <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Stem Cell Therapy
            </span>
            {" "}& Regenerative Medicine
          </h1>

          {/* Subheadline with hot keywords */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Leading regenerative medicine clinic with FDA-approved stem cell treatments, MSC exosomal lysate, 
            and advanced cellular therapy. <strong className="text-accent">95% success rate</strong> with 
            <strong className="text-accent">20+ years</strong> of clinical experience in anti-aging, 
            joint pain relief, and chronic condition treatment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <Link to="/contact">
              <Button variant="medical" size="lg" className="group hover-scale">
                Get Free Stem Cell Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+18585197305">
              <Button variant="outline" size="lg" className="border-white bg-transparent text-white hover:bg-white hover:text-black hover-scale">
                Call (858) 519-7305
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-3">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div className="text-white font-semibold">Clinically Advanced</div>
              <div className="text-white/70 text-sm">Cellular Products</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-3">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div className="text-white font-semibold">20+ Years</div>
              <div className="text-white/70 text-sm">Research & Development</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-3">
                <Network className="w-6 h-6 text-accent" />
              </div>
              <div className="text-white font-semibold">Network of</div>
              <div className="text-white/70 text-sm">Expert Practitioners</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-accent to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;