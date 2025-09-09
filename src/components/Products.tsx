import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Dna,
  Snowflake,
  Zap,
  Leaf,
  CheckCircle
} from "lucide-react";
import cbdProduct from "@/assets/cbd-product-original.png";
import mscExosomalLysate from "@/assets/msc-exosomal-lysate.png";
import cbscCryo from "@/assets/cbsc-cryo.png";
import hucFreshMsc from "@/assets/huc-fresh-msc.png";
import wellnessResults from "@/assets/wellness-results.jpg";

const Products = () => {
  const cellularProducts = [
    {
      icon: Dna,
      title: "MSC Exosomal Lysate",
      description: "Advanced exosomal therapy for cellular regeneration and tissue repair",
      features: ["Tissue Regeneration", "Anti-Inflammatory", "Cellular Communication"],
      color: "from-blue-500 to-blue-600",
      image: mscExosomalLysate
    },
    {
      icon: Snowflake,
      title: "CBSC Cryo",
      description: "Cryopreserved cord blood stem cells with multiple potency levels",
      features: ["Multiple Tiers Available", "Cryopreserved Quality", "High Viability"],
      color: "from-cyan-500 to-cyan-600",
      image: cbscCryo
    },
    {
      icon: Zap,
      title: "hUC Fresh MSC",
      description: "Fresh umbilical cord mesenchymal stem cells for optimal potency",
      features: ["Fresh Preparation", "High Cell Count", "Maximum Potency"],
      color: "from-purple-500 to-purple-600",
      image: hucFreshMsc
    },
    {
      icon: Leaf,
      title: "Premium CBD",
      description: "Daily 200 CBD and specialized formulations for wellness support",
      features: ["Daily Wellness", "Pain Management", "Inflammation Support"],
      color: "from-green-500 to-green-600",
      image: cbdProduct
    }
  ];


  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Cellular Products Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Advanced Bio-Therapies
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Cutting-Edge Regenerative Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our scientifically-advanced cellular products designed to harness 
            your body's natural healing mechanisms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {cellularProducts.map((product, index) => (
            <Card key={index} className="group hover:shadow-medical transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mb-4">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-24 h-24 mx-auto object-contain"
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
              <Badge variant="secondary" className="mb-4">
                Real Results
              </Badge>
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
              
              <Button variant="medical" size="lg">
                Learn More About Results
              </Button>
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