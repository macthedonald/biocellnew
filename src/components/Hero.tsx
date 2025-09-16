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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight">
            Discover Your Body's{" "}
            <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Healing Potential
            </span>
            {" "}with Stem Cell
          </h1>

          {/* Subheadline with hot keywords */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
            <strong className="text-accent">Scientifically-backed</strong> stem cell therapies and <strong className="text-accent">premium CBD products</strong>. 
            Harness your body's <strong className="text-accent">natural healing</strong> for optimal health with <strong className="text-accent">BioCellRX</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-16 sm:mb-12 px-4">
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
          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full mb-2 sm:mb-3">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <div className="text-white font-semibold text-sm sm:text-base">Clinically Advanced</div>
              <div className="text-white/70 text-xs sm:text-sm">Cellular Products</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full mb-2 sm:mb-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <div className="text-white font-semibold text-sm sm:text-base">20+ Years</div>
              <div className="text-white/70 text-xs sm:text-sm">Research & Development</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full mb-2 sm:mb-3">
                <Network className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <div className="text-white font-semibold text-sm sm:text-base">Network of</div>
              <div className="text-white/70 text-xs sm:text-sm">Expert Practitioners</div>
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