import { Heart, Mail, Phone, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:pradeepkumarniatian@gmail.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:+916385388984", 
      label: "Phone"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/pradeep-kumar-s-61856336b",
      label: "LinkedIn"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-poppins font-bold text-2xl text-foreground">
              Pradeep Kumar S
            </h3>
            <p className="text-muted-foreground font-inter leading-relaxed">
              AI & ML enthusiast building the future with intelligent solutions. 
              Passionate about robotics, IoT, and creating innovative technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-poppins font-semibold text-lg text-foreground">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-inter text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-poppins font-semibold text-lg text-foreground">
              Connect With Me
            </h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200 group"
                >
                  <social.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span className="font-inter">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground font-inter text-sm text-center md:text-left">
              © {currentYear} Pradeep Kumar S. Made with{' '}
              <Heart className="inline h-4 w-4 text-red-500 mx-1" />
              for innovation.
            </p>
            <button
              onClick={scrollToTop}
              className="text-primary hover:text-primary/80 transition-colors duration-200 font-inter text-sm font-medium"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;