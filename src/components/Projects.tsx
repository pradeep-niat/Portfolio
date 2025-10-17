import { useState } from 'react';
import { ExternalLink, Github, Brain, Car, Bot, Bluetooth, Zap, Trophy, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "Diabetes Prediction Web App",
      description: "ML-powered web application that predicts diabetes likelihood using trained machine learning models with an intuitive user interface.",
      tech: ["Python", "Machine Learning", "Streamlit", "Web UI"],
      icon: Brain,
      color: "bg-primary/10 text-primary",
      category: "AI/ML",
      github: "https://github.com/pradeep-niat/Diabetes-Predictor"
    },
    {
      title: "Car Price Predictor Web App",
      description: "Intelligent system that estimates used car prices based on multiple input factors using advanced regression models.",
      tech: ["ML", "Web Interface", "Data Analysis"],
      icon: Car,
      color: "bg-secondary/10 text-secondary",
      category: "AI/ML",
      github: "https://github.com/pradeep-niat/Car-Price-Predictor-"
    },
    {
      title: "Obstacle Avoiding Robot",
      description: "Smart autonomous robot equipped with sensors that can navigate and avoid obstacles in real-time using intelligent algorithms.",
      tech: ["Sensors", "Arduino", "Autonomous Navigation"],
      icon: Bot,
      color: "bg-hero-accent/10 text-hero-accent",
      category: "Robotics",
      github: "https://github.com/pradeep-niat/Obstacles-Avoiding-Car"
    },
    {
      title: "Bluetooth-Controlled Car",
      description: "IoT-enabled smart vehicle that can be controlled remotely via mobile app using Bluetooth connectivity.",
      tech: ["IoT", "Bluetooth Module", "Mobile Control"],
      icon: Bluetooth,
      color: "bg-primary/10 text-primary",
      category: "IoT",
      github: "https://github.com/pradeep-niat/Bluetooth-Control-Car-"
    },
    {
      title: "High Voltage Laser Fighter Drone",
      description: "Custom-built experimental drone with advanced embedded systems designed for defense mechanism research and development.",
      tech: ["Embedded Systems", "Hardware Design", "Drone Technology"],
      icon: Zap,
      color: "bg-secondary/10 text-secondary",
      category: "Hardware",
      github: "https://github.com/pradeep-niat/High-Voltage-Laser-Fighting-Drone-"
    },
    {
      title: "IPL Winner Predictor",
      description: "Machine learning web application that predicts IPL match winners and tournament outcomes using historical data and team statistics.",
      tech: ["Python", "Machine Learning", "Flask", "Data Analysis", "Cricket Analytics"],
      icon: Trophy,
      color: "bg-hero-accent/10 text-hero-accent",
      category: "AI/ML",
      github: "https://github.com/pradeep-niat/IPL-Winner-Predictor"
    },
    {
      title: "LostLink",
      description: "LostLink – A smart lost-and-found platform that helps users quickly recover misplaced items by connecting finders with owners through unique id. It enhances convenience, reduces loss-related stress, and promotes a community-driven approach to item recovery.",
      tech: ["AI-Powered", "Mobile App", "Unique ID System", "Smart Matching"],
      icon: Search,
      color: "bg-primary/10 text-primary",
      category: "AI/ML",
      github: "https://github.com/pradeep-niat/LostLink"
    }
  ];

  const categories = ["All", "AI/ML", "Robotics", "IoT", "Hardware"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Portfolio
            </Badge>
            <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-foreground mb-6">
              My Latest Works
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
              Showcasing innovative projects that combine AI, robotics, and IoT to solve real-world problems
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className={`cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-200 px-4 py-2 ${
                  selectedCategory === category ? 'bg-primary text-primary-foreground' : ''
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105 group overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`${project.color} p-3 rounded-lg`}>
                      <project.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="font-poppins text-xl group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full group/btn"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground font-inter mb-6">
              Interested in seeing more of my work or collaborating on a project?
            </p>
            <Button 
              size="lg"
              className="bg-gradient-primary text-white hover:shadow-elegant transition-all duration-300"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;