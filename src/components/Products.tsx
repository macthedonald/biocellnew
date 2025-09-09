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

const Products = () => {
  const cellularProducts = [
    {
      icon: Dna,
      title: "MSC Exosomal Lysate",
      description: "Advanced exosomal therapy for cellular regeneration and tissue repair",
      features: ["Tissue Regeneration", "Anti-Inflammatory", "Cellular Communication"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Snowflake,
      title: "CBSC Cryo",
      description: "Cryopreserved cord blood stem cells with multiple potency levels",
      features: ["Multiple Tiers Available", "Cryopreserved Quality", "High Viability"],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Zap,
      title: "hUC Fresh MSC",
      description: "Fresh umbilical cord mesenchymal stem cells for optimal potency",
      features: ["Fresh Preparation", "High Cell Count", "Maximum Potency"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Leaf,
      title: "Premium CBD",
      description: "Daily 200 CBD and specialized formulations for wellness support",
      features: ["Daily Wellness", "Pain Management", "Inflammation Support"],
      color: "from-green-500 to-green-600"
    }
  ];

  const cbdFeatures = [
    "Full-spectrum formula",
    "Made in the USA",
    "Lab-tested for purity & potency",
    "Sugar-free & wheat-free",
    "Vegan-friendly",
    "Less than 0.3% THC"
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
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${product.color} rounded-full mb-4 mx-auto`}>
                  <product.icon className="w-8 h-8 text-white" />
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

        {/* Premium CBD Section */}
        <div className="bg-gradient-to-r from-accent/5 to-accent/10 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Premium Wellness
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Premium CBD Products
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Complement your wellness journey with our premium CBD products, crafted 
                with all-natural ingredients and lab-tested for purity and potency
              </p>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-foreground">
                  Daily 200 CBD Tincture Oil
                </h4>
                <p className="text-accent font-semibold mb-4">Premium Daily Wellness</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cbdFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button variant="medical" size="lg">
                Get Started
              </Button>
            </div>
            
            <div className="text-center">
              <img 
                src={cbdProduct} 
                alt="Premium CBD Tincture Oil"
                className="max-w-sm mx-auto rounded-2xl shadow-gold"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;