import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import ResourcesPreview from "@/components/ResourcesPreview";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <Products />
      
      {/* Full Width Video Section */}
      <div style={{ 
        position: 'relative',
        left: 0,
        right: 0,
        width: '100vw',
        height: '500px',
        margin: '0 calc(-50vw + 50%)'
      }}>
        <iframe
          src="https://player.vimeo.com/video/703393362?h=c2afb21c93&autoplay=1&title=0&portrait=0&byline=0&badge=0&loop=0&muted=0&controls=1"
          style={{ 
            width: '100vw', 
            height: '100%', 
            border: 'none',
            display: 'block'
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
      
      <ResourcesPreview />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
