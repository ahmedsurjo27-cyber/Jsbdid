import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import BMICalculator from "@/components/BMICalculator";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-background pt-20">
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-heading text-sm tracking-[0.3em] uppercase">Get In Touch</span>
          <h1 className="font-heading text-4xl md:text-6xl mt-2 mb-6 text-foreground">Contact Us</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start your fitness journey? Reach out and we'll help you find the perfect plan.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-2xl mb-6 text-foreground">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                  maxLength={100}
                />
                <Input
                  type="email"
                  placeholder="Your Email *"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                  maxLength={255}
                />
                <Input
                  type="tel"
                  placeholder="Phone Number (optional)"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                  maxLength={20}
                />
                <Textarea
                  placeholder="Your Message *"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground min-h-[120px]"
                  maxLength={1000}
                />
                <Button type="submit" className="w-full bg-gradient-primary text-primary-foreground font-heading tracking-wider shadow-glow hover:opacity-90 py-6 text-lg">
                  Send Message <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-2xl mb-6 text-foreground">Visit Us</h2>
                <div className="space-y-5">
                  {[
                    { icon: MapPin, label: "Address", value: "123 Iron Street, Fitness City, FC 10001" },
                    { icon: Phone, label: "Phone", value: "(555) 123-4567" },
                    { icon: Mail, label: "Email", value: "info@forgefit.com" },
                    { icon: Clock, label: "Hours", value: "Mon-Fri 5am-11pm · Sat-Sun 7am-9pm" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="text-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-heading text-lg mb-3 text-foreground">Follow Us</h3>
                <div className="flex gap-4">
                  {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-lg overflow-hidden border border-border h-[200px] bg-secondary flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ForgeFit Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BMI Calculator */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10">
            <span className="text-primary font-heading text-sm tracking-[0.3em] uppercase">Free Tool</span>
            <h2 className="font-heading text-3xl md:text-4xl mt-2 text-foreground">BMI Calculator</h2>
          </div>
          <BMICalculator />
        </div>
      </section>
    </div>
  );
};

export default Contact;
