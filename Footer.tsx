import { Link } from "react-router-dom";
import { Dumbbell, Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Dumbbell className="h-7 w-7 text-primary" />
              <span className="font-heading text-xl font-bold tracking-wider text-foreground">
                FORGE<span className="text-primary">FIT</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transform your body and mind at ForgeFit. Where strength meets dedication and results speak louder than words.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-foreground">Quick Links</h4>
            {["About", "Services", "Pricing", "Schedule", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="block text-muted-foreground text-sm py-1.5 hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-foreground">Services</h4>
            {["Personal Training", "Group Classes", "Weight Training", "Cardio Programs", "Nutrition Coaching"].map((item) => (
              <p key={item} className="text-muted-foreground text-sm py-1.5">{item}</p>
            ))}
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>123 Iron Street, Fitness City, FC 10001</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span>info@forgefit.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} ForgeFit. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
