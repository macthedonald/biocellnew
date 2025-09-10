import { Facebook, Instagram, Linkedin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-medical-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/abc8e5e6-fdc8-4aeb-83a6-f51637383091.png" 
                alt="BioCellRx Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">BioCellRx</span>
            </div>
            <p className="text-white/70 leading-relaxed max-w-md">
              Leading the future of regenerative medicine with advanced stem cell 
              therapies and premium wellness products. Transforming lives through 
              scientific innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-white/70 hover:text-accent transition-colors">Home</a></li>
              <li><a href="/services" className="text-white/70 hover:text-accent transition-colors">Services</a></li>
              <li><a href="/about" className="text-white/70 hover:text-accent transition-colors">About</a></li>
              <li><a href="/contact" className="text-white/70 hover:text-accent transition-colors">Contact</a></li>
              <li><a href="/resources" className="text-white/70 hover:text-accent transition-colors">Knowledge Centre</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+18585197305" className="hover:text-accent transition-colors">
                  (858) 519-7305
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:info@biocellrx.com" className="hover:text-accent transition-colors">
                  info@biocellrx.com
                </a>
              </li>
              <li>Available 24/7</li>
            </ul>
            
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Connect With Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/111531213660668"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1877F2] hover:text-[#1877F2]/80 transition-colors"
                  title="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/accounts/suspended/?next=https%3A%2F%2Fwww.instagram.com%2Fbiocellrx%2F%3Figshid%3DYmMyMTA2M2Y%253D%26__coig_ufac%3D1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E4405F] hover:text-[#E4405F]/80 transition-colors"
                  title="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/eloisa-sultan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A66C2] hover:text-[#0A66C2]/80 transition-colors"
                  title="Connect with us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2025 BioCellRx. All rights reserved. | Advanced regenerative medicine solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;