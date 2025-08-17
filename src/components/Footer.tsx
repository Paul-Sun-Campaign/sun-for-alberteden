import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-campaign-navy text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Campaign Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">
                Paul <span className="text-campaign-gold">Sun</span>
              </h3>
              <p className="text-blue-200 text-lg mb-4">
                Candidate for Albert Eden Pukutupapa Ward & Albert Eden Local Board
              </p>
              <p className="text-blue-100 leading-relaxed max-w-md">
                Fighting for fiscal responsibility, improved infrastructure, and common-sense governance 
                that puts ratepayers first.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="campaign-outline" size="sm">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
              <Button variant="campaign-outline" size="sm">
                <Phone className="w-4 h-4 mr-2" />
                Call
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-campaign-gold">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#policies" className="text-blue-200 hover:text-white transition-colors">Policy Platform</a></li>
              <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">About Paul</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors">Get Involved</a></li>
              <li><a href="#events" className="text-blue-200 hover:text-white transition-colors">Upcoming Events</a></li>
              <li><a href="#news" className="text-blue-200 hover:text-white transition-colors">Campaign News</a></li>
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-campaign-gold">Stay Connected</h4>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-campaign-blue" />
                <span className="text-blue-200 text-sm">paul@paulsunauckland.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-campaign-blue" />
                <span className="text-blue-200 text-sm">021 XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-campaign-blue" />
                <span className="text-blue-200 text-sm">Albert Eden, Auckland</span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-blue-200 hover:text-white hover:bg-campaign-blue">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-blue-200 hover:text-white hover:bg-campaign-blue">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-blue-200 hover:text-white hover:bg-campaign-blue">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-campaign-blue/30">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-blue-200 text-sm">
                © 2024 Paul Sun for Albert Eden. All rights reserved.
              </p>
              <Badge variant="secondary" className="text-xs">
                Election 2024
              </Badge>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-blue-200">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Use</a>
              <span>•</span>
              <span>Authorized by Paul Sun</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;