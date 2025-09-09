import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";

// Video embed component for different platforms
const VideoEmbed = ({ url, title }: { url: string; title: string }) => {
  // Extract video ID for different platforms
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.includes('youtu.be') 
        ? url.split('/').pop()?.split('?')[0]
        : url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    if (url.includes('vimeo.com')) {
      const videoId = url.split('/').pop();
      return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    }
    return url;
  };

  return (
    <iframe
      src={getEmbedUrl(url)}
      title={title}
      width="100%"
      height="100%"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute inset-0"
    />
  );
};

interface VideoPlayerProps {
  thumbnail: string;
  title: string;
  description: string;
  videoUrl?: string;
  duration?: string;
  views?: string;
}

const VideoPlayer = ({ 
  thumbnail, 
  title, 
  description, 
  videoUrl = "https://vimeo.com/76979871", // Default demo video
  duration = "4:32",
  views = "3.2M views"
}: VideoPlayerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Video Thumbnail */}
      <div 
        className="relative aspect-video bg-cover bg-center rounded-2xl overflow-hidden border border-accent/20 cursor-pointer group shadow-medical hover:shadow-gold transition-all duration-300"
        style={{ backgroundImage: `url(${thumbnail})` }}
        onClick={() => setIsOpen(true)}
      >
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/90 rounded-full shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-300">
            <Play className="w-8 h-8 text-medical-dark ml-1" />
          </div>
        </div>
        
        {/* Video Info */}
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold mb-1">{title}</p>
              <p className="text-white/80 text-sm">{views} • {description}</p>
            </div>
            <Button variant="medical" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Watch Now
            </Button>
          </div>
        </div>
        
        {/* Duration Badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
            {duration}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl w-full p-0 bg-black border-0">
          <DialogTitle className="sr-only">{title}</DialogTitle>
          
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Video Player */}
          <div className="relative aspect-video">
            <VideoEmbed url={videoUrl} title={title} />
          </div>

          {/* Video Info Below Player */}
          <div className="p-6 bg-white">
            <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground mb-4">{views} • {description}</p>
            <div className="flex gap-4">
              <Button variant="medical">
                Book Consultation
              </Button>
              <Button variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VideoPlayer;