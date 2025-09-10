import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Dna,
  Snowflake,
  Zap,
  Leaf,
  CheckCircle
} from "lucide-react";
import mscExosomalLysate from "/lovable-uploads/f51f3f85-b0dd-4995-85c2-5c41f0080e4e.png";
import cbscCryo from "/lovable-uploads/ac57993d-bdef-4edf-a603-8a8c226e58a3.png";
import hucFreshMsc from "@/assets/huc-fresh-msc.png";
import wellnessResults from "@/assets/wellness-results-fullbody.jpg";

const Products = () => {
  const cellularProducts = [
    {
      icon: Dna,
      title: "MSC Exosomal Lysate",
      description: "Cytokines are a cell signaling vehicle transport. A Tetraspanin protein- potential suppressor of metastasis. 30-100nm in size, Increase the extracellular matrix composition of skin tissue and integrity. 86% average expression of cell surface protein",
      features: ["5ml", "Cell signaling vehicle", "30-100nm in size"],
      color: "from-blue-500 to-blue-600",
      image: mscExosomalLysate
    },
    {
      icon: Snowflake,
      title: "CBSC cryo",
      description: "CBSC® is a developed biological therapeutic derived from umbilical cord blood having stem cells for body transplant. The lower cell count makes the CB ® product line perfect for smaller, localized treatments. Each vial of CB ® contains 1mL/1cc of a cellular and protein that has demonstrated remarkable results in early research testing.",
      features: ["1ml", "Silver (8 Million nucleated cells)", "Gold (15 Million nucleated cells)", "Platinum (30 million nucleated cells)"],
      color: "from-cyan-500 to-cyan-600",
      image: cbscCryo
    },
    {
      icon: Leaf,
      title: "CBD 6000mg Total",
      description: "Premium Hemp Products - High Quality Infused Hemp Supplement. Our CBD 6000mg total offers therapeutic benefits with organic apple flavor in a convenient tincture format for optimal bioavailability.",
      features: ["6000mg total CBD", "Organic Apple flavor", "High Quality Infused", "Hemp Supplement"],
      color: "from-green-500 to-green-600",
      image: "/lovable-uploads/eaca80fb-dc37-43e5-b4cf-18bd12a0b5ea.png"
    }
  ];


  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Cellular Products Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Cutting-Edge Regenerative Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our scientifically-advanced cellular products designed to harness 
            your body's natural healing mechanisms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {cellularProducts.map((product, index) => (
            <Card key={index} className="group hover:shadow-medical transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mb-4">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-32 h-32 mx-auto object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center text-sm">
                      <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Wellness Results Section */}
        <div className="bg-gradient-to-r from-accent/5 to-accent/10 rounded-3xl p-8 md:p-12 mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Experience Renewed Vitality
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Our advanced regenerative therapies help patients regain mobility, reduce inflammation, 
                and experience improved quality of life through the body's natural healing processes.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-foreground">Enhanced mobility and flexibility</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-foreground">Reduced pain and inflammation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-foreground">Accelerated healing and recovery</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-foreground">Improved overall wellness</span>
                </div>
              </div>
              
              <Link to="/contact">
                <Button variant="medical" size="lg">
                  Learn More About Results
                </Button>
              </Link>
            </div>
            
            <div className="text-center">
              <img 
                src={wellnessResults} 
                alt="Person stretching demonstrating wellness results from regenerative therapy"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;