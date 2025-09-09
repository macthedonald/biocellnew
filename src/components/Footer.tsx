const Footer = () => {
  return (
    <footer className="bg-medical-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">B</span>
              </div>
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
              <li><a href="#home" className="text-white/70 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#services" className="text-white/70 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#about" className="text-white/70 hover:text-accent transition-colors">About</a></li>
              <li><a href="#products" className="text-white/70 hover:text-accent transition-colors">Products</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-white/70">
              <li>1-800-BIOCELL</li>
              <li>info@biocellrx.com</li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2024 BioCellRx. All rights reserved. | Advanced regenerative medicine solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;