import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Award, Target } from "lucide-react";
import albertEdenAerial from "@/assets/albert-eden-aerial.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div>
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4 text-campaign-blue font-semibold px-4 py-2">
                About Paul Sun
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-campaign-navy mb-6 leading-tight">
                Experienced Leadership for Albert Eden
              </h2>
              <p className="text-xl text-campaign-gray leading-relaxed mb-6">
                With years of experience in business and community service, Paul Sun brings practical solutions 
                and fiscal responsibility to local government.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <Card className="border-l-4 border-l-campaign-blue shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-6 h-6 text-campaign-blue" />
                    <h3 className="font-semibold text-campaign-navy">Local Resident</h3>
                  </div>
                  <p className="text-campaign-gray">
                    Long-time Albert Eden resident who understands our community's unique needs and challenges.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-campaign-gold shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-campaign-gold" />
                    <h3 className="font-semibold text-campaign-navy">Community Focused</h3>
                  </div>
                  <p className="text-campaign-gray">
                    Committed to listening to residents and representing their interests at the council table.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-green-500 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-6 h-6 text-green-500" />
                    <h3 className="font-semibold text-campaign-navy">Proven Track Record</h3>
                  </div>
                  <p className="text-campaign-gray">
                    Successful business background with experience in budget management and strategic planning.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-purple-500 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="w-6 h-6 text-purple-500" />
                    <h3 className="font-semibold text-campaign-navy">Results Driven</h3>
                  </div>
                  <p className="text-campaign-gray">
                    Focused on delivering measurable outcomes and value for money in all council initiatives.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="campaign" size="lg" className="px-8">
                Contact Paul
              </Button>
              <Button variant="campaign-outline" size="lg" className="px-8">
                Download Policy Document
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <img 
              src={albertEdenAerial} 
              alt="Albert Eden local area aerial view" 
              className="rounded-2xl shadow-strong w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-campaign-navy/60 via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white font-bold text-2xl mb-2">Albert Eden Pukutupapa Ward</h3>
              <p className="text-blue-100">A vibrant community deserving strong, responsible representation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;