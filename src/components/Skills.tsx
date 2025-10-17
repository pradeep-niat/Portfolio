import { Code, Cpu, Lightbulb, Globe, Smartphone, Bot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skills = [
    {
      category: "Programming & AI",
      icon: Code,
      items: ["Python", "Machine Learning", "Generative AI", "Prompt Engineering"],
      color: "bg-primary/10 text-primary"
    },
    {
      category: "Hardware & IoT",
      icon: Cpu,
      items: ["IoT Systems", "Arduino", "Embedded Systems", "Sensors"],
      color: "bg-secondary/10 text-secondary"
    },
    {
      category: "Robotics",
      icon: Bot,
      items: ["Autonomous Systems", "Obstacle Avoidance", "Bluetooth Control", "Drone Technology"],
      color: "bg-hero-accent/10 text-hero-accent"
    }
  ];

  const services = [
    {
      title: "AI Web Design",
      description: "Modern websites powered by AI and machine learning",
      icon: Globe,
      color: "bg-gradient-primary"
    },
    {
      title: "AI Automation",
      description: "Streamline processes with intelligent automation solutions",
      icon: Lightbulb,
      color: "bg-gradient-to-br from-secondary to-hero-accent"
    },
    {
      title: "IoT & Robotics Projects",
      description: "Smart devices and robotic systems for real-world applications",
      icon: Cpu,
      color: "bg-gradient-to-br from-primary to-secondary"
    },
    {
      title: "AI Image/Video Generation",
      description: "Create stunning visuals using generative AI models",
      icon: Smartphone,
      color: "bg-gradient-to-br from-hero-accent to-primary"
    },
    {
      title: "Personal AI Agent Development",
      description: "Custom AI assistants tailored to your specific needs",
      icon: Bot,
      color: "bg-gradient-to-br from-secondary via-primary to-hero-accent"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Skills & Services
            </Badge>
            <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-foreground mb-6">
              What I Bring to the Table
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
              Combining cutting-edge AI knowledge with hands-on technical skills to deliver innovative solutions
            </p>
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <h3 className="font-poppins font-semibold text-3xl text-foreground mb-10 text-center">
              Technical Skills
            </h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <Card key={index} className="border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className={`${skill.color} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                      <skill.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="font-poppins text-xl">{skill.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skill.items.map((item, itemIndex) => (
                        <Badge key={itemIndex} variant="secondary" className="text-sm">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-poppins font-semibold text-3xl text-foreground mb-10 text-center">
              Services I Offer
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105 overflow-hidden group">
                  <div className={`${service.color} p-6 text-white relative`}>
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <service.icon className="h-8 w-8 mb-4 relative z-10" />
                    <h4 className="font-poppins font-semibold text-xl mb-2 relative z-10">
                      {service.title}
                    </h4>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground font-inter">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;