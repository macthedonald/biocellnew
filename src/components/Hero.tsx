import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Award, Network } from "lucide-react";
import { Link } from "react-router-dom";
import labHeroBg from "@/assets/lab-hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Unlock Your Body's{" "}
            <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Healing Potential
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the future of regenerative medicine with BioCellRx's advanced stem 
            cell therapies and premium CBD products. Scientifically-backed solutions that 
            harness your body's natural healing capabilities for optimal health and enhanced 
            quality of life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/contact">
              <Button variant="medical" size="lg" className="group">
                Start Your Healing Journey
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
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