import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-campaign-blue/10 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-campaign-navy">
              Paul <span className="text-campaign-gold">Sun</span>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-campaign-navy hover:text-campaign-blue transition-colors font-medium">
              Home
            </a>
            <a href="#policies" className="text-campaign-navy hover:text-campaign-blue transition-colors font-medium">
              Policies
            </a>
            <a href="#about" className="text-campaign-navy hover:text-campaign-blue transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-campaign-navy hover:text-campaign-blue transition-colors font-medium">
              Contact
            </a>
            <Button variant="campaign" size="sm" className="px-6">
              Get Involved
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-campaign-blue/10 bg-white">
            <div className="py-4 space-y-4">
              <a 
                href="#home" 
                className="block px-4 py-2 text-campaign-navy hover:text-campaign-blue hover:bg-campaign-light-blue transition-colors font-medium"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a 
                href="#policies" 
                className="block px-4 py-2 text-campaign-navy hover:text-campaign-blue hover:bg-campaign-light-blue transition-colors font-medium"
                onClick={toggleMenu}
              >
                Policies
              </a>
              <a 
                href="#about" 
                className="block px-4 py-2 text-campaign-navy hover:text-campaign-blue hover:bg-campaign-light-blue transition-colors font-medium"
                onClick={toggleMenu}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="block px-4 py-2 text-campaign-navy hover:text-campaign-blue hover:bg-campaign-light-blue transition-colors font-medium"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <div className="px-4">
                <Button variant="campaign" className="w-full" onClick={toggleMenu}>
                  Get Involved
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;