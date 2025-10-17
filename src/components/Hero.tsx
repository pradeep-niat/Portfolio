import { ArrowRight, Calendar, GraduationCap, Briefcase, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { startVapiVoice } from '@/lib/vapiClient';
import heroImage from '@/assets/profile-upload.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: GraduationCap, label: '2025–Present', sublabel: 'BTech AI & ML (NIAT)' },
  ];

  const handleTalkToAI = async () => {
    try {
      await startVapiVoice();
    } catch (err) {
      console.error('Failed to start AI voice:', err);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-hero-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-card text-foreground border-primary/20 text-sm font-medium">
                AI & Robotics Enthusiast
              </Badge>
              
              {/* Name with Profile Photo */}
              <div className="flex items-center gap-6">
                <div>
                  <h1 className="font-poppins font-bold text-5xl lg:text-6xl text-foreground leading-tight">
                    Hey There,<br />
                    I'm <span className="text-primary">Pradeep Kumar S</span>
                  </h1>
                </div>
                {/* Profile Image beside name */}
                <div className="relative block">
                  <div className="relative w-56 h-56 md:w-80 md:h-80">
                    <div className="absolute inset-0 bg-hero-accent/20 rounded-full blur-2xl"></div>
                    <div className="relative rounded-full shadow-elegant ring-4 ring-white">
                      <img 
                        src={heroImage}
                        alt="Profile photo of Pradeep Kumar S"
                        className="w-full h-full object-cover rounded-full"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-muted-foreground font-inter max-w-2xl">
                BTech AI & ML Student at NIAT | Building the future with AI, robotics, and IoT solutions
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('#projects')}
                className="bg-primary text-primary-foreground hover:shadow-elegant transition-all duration-300 group"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Compact Stats Section */}
            <div className="pt-4 max-w-md">
              {stats.map((stat, index) => (
                <div key={index} className="bg-card/70 backdrop-blur-sm rounded-lg p-3 border border-border/50">
                  <div className="flex items-center gap-2">
                    <stat.icon className="h-5 w-5 text-primary" />
                    <div className="flex-1">
                      <div className="font-poppins font-medium text-sm text-foreground">{stat.label}</div>
                      <div className="text-xs text-primary">{stat.sublabel}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;