import { GraduationCap, Award, Brain, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const education = [
    {
      degree: "BTech in Artificial Intelligence & Machine Learning",
      institution: "NIAT",
      period: "2025 - Present",
      status: "Current",
      icon: Brain
    },
    {
      degree: "12th Grade, Computer Science",
      institution: "Completed",
      period: "2025",
      status: "Graduated",
      icon: GraduationCap
    }
  ];

  const certifications = [
    {
      title: "Prompt Engineering",
      provider: "LinkedIn Learning",
      icon: Award,
      link: "https://www.linkedin.com/learning/certificates/d6667b25ed18a7e5848d149078b273cc60cddf540d7936d1546569e931874f7f?trk=share_certificate"
    },
    {
      title: "Generative AI",
      provider: "LinkedIn Learning",
      icon: Award,
      link: "https://www.linkedin.com/learning/certificates/90ed4565bbb0412780339036017fb462bc49d77854c8bf8bb11fb13ca12f5216?trk=share_certificate"
    },
    {
      title: "Building AI Web Apps",
      provider: "AWS",
      icon: Award,
      link: "https://skillbuilder.aws/learn/TM4ZAXTGEZ/building-generative-ai-applications-using-amazon-bedrock/WM6Z6ZHU7K"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              About Me
            </Badge>
            <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-foreground mb-6">
              My Journey in AI & Technology
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
              I completed my 12th in 2025 with a computer science background. I'm currently pursuing a BTech in 
              Artificial Intelligence & Machine Learning at NIAT. Passionate about AI, generative models, and robotics, 
              I've completed several hands-on projects and internships. My journey includes developing ML-powered web apps 
              and building IoT and robotics systems.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="mb-16">
            <h3 className="font-poppins font-semibold text-2xl text-foreground mb-8 text-center">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-border/50 hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <edu.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-poppins font-semibold text-lg text-foreground">
                            {edu.degree}
                          </h4>
                          <Badge variant={edu.status === 'Current' ? 'default' : 'secondary'}>
                            {edu.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground font-inter mb-1">{edu.institution}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-poppins font-semibold text-2xl text-foreground mb-8 text-center">
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={index} 
                  className="border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => window.open(cert.link, '_blank')}
                >
                  <CardContent className="p-6 text-center">
                    <div className="bg-secondary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <cert.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <h4 className="font-poppins font-semibold text-lg text-foreground mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-muted-foreground font-inter">{cert.provider}</p>
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

export default About;