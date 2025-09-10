import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import researchImage1 from "@/assets/research-image-1.jpg";
import researchImage2 from "@/assets/research-image-2.png";
import researchImage3 from "@/assets/research-image-3.png";
import processGraph from "@/assets/process-graph.jpg";

const ResourcesPreview = () => {
  const featuredResources = [
    {
      image: researchImage1,
      title: "Understanding Stem Cells",
      description: "Complete guide to mesenchymal stem cells and their regenerative capabilities",
      category: "Educational Guide"
    },
    {
      image: researchImage2,
      title: "Therapy Benefits",
      description: "Comprehensive overview of conditions treatable with stem cell therapy",
      category: "Treatment Applications"
    },
    {
      image: researchImage3,
      title: "Market Insights",
      description: "Industry analysis and research trends in regenerative medicine",
      category: "Industry Analysis"
    },
    {
      image: processGraph,
      title: "Treatment Process",
      description: "Step-by-step workflow from collection to transplantation",
      category: "Process Guide"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            KNOWLEDGE CENTRE
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Knowledge &{" "}
            <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Centre
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Access comprehensive educational materials, clinical research, and treatment guides 
            from our knowledge centre to understand regenerative medicine and our advanced therapies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredResources.map((resource, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-3 left-3 bg-white/90 text-primary text-xs"
                  >
                    {resource.category}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {resource.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/resources">
            <Button size="lg" className="group">
              Visit Knowledge Centre
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResourcesPreview;