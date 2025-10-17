import { Briefcase, MapPin, Calendar, Star, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Experience = () => {
  const experience = {
    title: "Intern",
    company: "Internpe",
    type: "Online",
    period: "2025",
    status: "Completed",
    description: "Building ML-powered web applications and gaining hands-on experience in AI development, Python programming, and deployment strategies.",
    achievements: [
      "Developed multiple ML-powered web applications",
      "Gained expertise in AI development workflows",
      "Enhanced Python programming skills",
      "Learned deployment and production strategies"
    ],
    skills: ["AI Development", "Python", "Web Development", "Machine Learning", "Deployment"]
  };

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Work Experience
            </Badge>
            <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Professional Journey
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
              Gaining real-world experience in AI and machine learning development
            </p>
          </div>

          {/* Experience Card */}
          <Card className="border-border/50 hover:shadow-elegant transition-all duration-300 overflow-hidden">
            <div className="bg-gradient-primary p-6 text-white">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Briefcase className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-2xl">{experience.title}</h3>
                    <p className="text-white/90 font-inter text-lg">{experience.company}</p>
                  </div>
                </div>
                <Badge className="bg-white/20 text-white border-white/30">
                  {experience.status}
                </Badge>
              </div>
              
              <div className="flex items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span className="font-inter">{experience.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="font-inter">{experience.period}</span>
                </div>
              </div>
            </div>

            <CardContent className="p-8">
              <div className="space-y-8">
                {/* Description */}
                <div>
                  <h4 className="font-poppins font-semibold text-lg text-foreground mb-3">
                    Role Overview
                  </h4>
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {experience.description}
                  </p>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="font-poppins font-semibold text-lg text-foreground mb-4">
                    Key Achievements
                  </h4>
                  <div className="space-y-3">
                    {experience.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground font-inter">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Gained */}
                <div>
                  <h4 className="font-poppins font-semibold text-lg text-foreground mb-4">
                    Skills Developed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Certificate Button */}
                <div className="pt-4">
                  <Button 
                    onClick={() => window.open('https://ibb.co/4w2KfmH8', '_blank')}
                    className="bg-primary text-primary-foreground hover:shadow-elegant transition-all duration-300"
                  >
                    <Award className="mr-2 h-4 w-4" />
                    View Certificate
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-card border border-border/50 rounded-xl p-8">
              <h3 className="font-poppins font-semibold text-xl text-foreground mb-4">
                Looking for New Opportunities
              </h3>
              <p className="text-muted-foreground font-inter mb-6">
                I'm actively seeking internships and entry-level positions in AI, machine learning, 
                and robotics to further expand my skills and contribute to innovative projects.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  AI Development
                </Badge>
                <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                  Machine Learning
                </Badge>
                <Badge className="bg-hero-accent/10 text-hero-accent border-hero-accent/20">
                  Robotics
                </Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  IoT Systems
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;