import { Button } from "@/components/ui/button";
import paulSunPortrait from "@/assets/paul-sun-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-campaign-navy via-campaign-blue to-campaign-light-blue overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-white opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                Paul <span className="text-campaign-gold">Sun</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 font-medium mb-2">
                Candidate for Albert Eden Pukutupapa Ward
              </p>
              <p className="text-lg text-blue-200">
                Albert Eden Local Board
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                Practical Solutions for Our Community
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed max-w-xl">
                Fighting for fiscal responsibility, improved infrastructure, and common-sense governance. 
                It's time to respect every ratepayer dollar and deliver real results for Albert Eden.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="px-8 py-4">
                View My Policies
              </Button>
              <Button variant="campaign-outline" size="lg" className="px-8 py-4">
                Get Involved
              </Button>
            </div>
          </div>
          
          {/* Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-campaign-gold blur-2xl opacity-20 scale-110"></div>
              <img 
                src={paulSunPortrait} 
                alt="Paul Sun - Candidate for Albert Eden" 
                className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-strong border-4 border-white"
              />
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-campaign-gold opacity-60 rounded-full blur-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white opacity-40 rounded-full blur-md"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
          <path d="M0,120L48,115C96,110 192,100 288,95C384,90 480,90 576,95C672,100 768,110 864,105C960,100 1056,80 1152,80C1200,80 1248,100 1296,110L1344,120V120H1296C1248,120 1152,120 1056,120C960,120 864,120 768,120C672,120 576,120 480,120C384,120 288,120 192,120C96,120 48,120 24,120L0,120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;