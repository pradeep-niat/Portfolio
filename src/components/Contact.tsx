import { useState } from 'react';
import { Mail, Phone, Linkedin, Send, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import DOMPurify from 'dompurify';

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_y1s0hda';
  const EMAILJS_TEMPLATE_ID = 'template_zfm3kt8';
  const EMAILJS_PUBLIC_KEY = 'OTs3Vlo0u8nLPnLy8';

  const sanitizeInput = (input: string): string => {
    // Remove potentially harmful HTML tags but preserve spaces and normal characters
    return input.replace(/<[^>]*>/g, '');
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form inputs
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    if (formData.message.length < 10) {
      toast({
        title: "Message Too Short",
        description: "Please provide a more detailed message (at least 10 characters).",
        variant: "destructive",
      });
      return;
    }

    // Check if environment variables are configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast({
        title: "Configuration Error",
        description: "Email service is not properly configured. Please contact me directly.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Prepare sanitized email parameters (sanitize only when sending)
      const templateParams = {
        // Primary expected keys
        from_name: sanitizeInput(formData.name),
        from_email: sanitizeInput(formData.email),
        subject: sanitizeInput(formData.subject),
        message: sanitizeInput(formData.message),

        // Common alternative keys to match different EmailJS templates
        user_name: sanitizeInput(formData.name),
        name: sanitizeInput(formData.name),
        reply_to: sanitizeInput(formData.email),
        user_email: sanitizeInput(formData.email),
        message_html: sanitizeInput(formData.message),

        // Optional recipient info (ignored if not used in template)
        to_email: 'pradeepkumarniatian@gmail.com',
        to_name: 'Pradeep',
      };

      // Debug: inspect payload in development
      if (import.meta.env.DEV) {
        console.log('EmailJS templateParams:', templateParams);
      }
      // Send the email
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset the form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      // Log error in development only
      if (import.meta.env.DEV) {
        console.error('EmailJS Error:', error);
      }
      
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
              value: "pradeepkumarniatian@gmail.com",
              link: "mailto:pradeepkumarniatian@gmail.com",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 63853 88984",
      link: "tel:+916385388984",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Pradeep Kumar S",
      link: "https://www.linkedin.com/in/pradeep-kumar-s-61856336b",
      color: "bg-hero-accent/10 text-hero-accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      link: "",
      color: "bg-primary/10 text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Get In Touch
            </Badge>
            <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
              Ready to bring your AI, robotics, or IoT project to life? I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-poppins font-semibold text-2xl text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-border/50 hover:shadow-elegant transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className={`${info.color} p-3 rounded-lg`}>
                            <info.icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <p className="font-poppins font-medium text-foreground">{info.label}</p>
                            {info.link ? (
                              <a 
                                href={info.link}
                                target={info.link.startsWith('http') ? '_blank' : undefined}
                                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-inter"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-muted-foreground font-inter">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-poppins">
                    <Clock className="h-5 w-5 text-primary" />
                    Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-inter text-muted-foreground">Response Time</span>
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        Within 24 hours
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-inter text-muted-foreground">Best Time to Contact</span>
                      <span className="font-inter text-foreground">9 AM - 6 PM IST</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-inter text-muted-foreground">Current Status</span>
                      <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                        Available for Projects
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-border/50 hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-poppins text-2xl">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2 font-inter">
                        Your Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2 font-inter">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2 font-inter">
                      Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Collaboration"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2 font-inter">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or how I can help you..."
                      required
                      rows={6}
                      className="w-full resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-primary text-white hover:shadow-elegant transition-all duration-300 group disabled:opacity-50"
                    size="lg"
                  >
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;