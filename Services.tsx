import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Dumbbell, Flame, Heart, Target, Zap, Users, ArrowRight, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Target, title: "Personal Training", desc: "Work one-on-one with our certified trainers who build a fully customized program around your goals, body type, and schedule. Includes monthly assessments and plan adjustments.", features: ["Custom workout plans", "Progress tracking", "Nutritional guidance", "Flexible scheduling"] },
  { icon: Users, title: "Group Classes", desc: "High-energy sessions with expert instructors. From spinning to kickboxing, our group classes bring motivation and fun to every workout.", features: ["20+ class types weekly", "All fitness levels", "Social atmosphere", "Expert instruction"] },
  { icon: Dumbbell, title: "Weight Training", desc: "Access state-of-the-art free weights, machines, and functional training equipment. Our floor coaches are always available to help with form and technique.", features: ["Premium equipment", "Form coaching", "Strength programs", "Progressive overload plans"] },
  { icon: Heart, title: "Cardio Programs", desc: "From treadmill intervals to rowing circuits, our cardio programs are designed to maximize fat burn and build endurance efficiently.", features: ["Heart rate monitoring", "Endurance building", "Fat loss focus", "Variety of equipment"] },
  { icon: Apple, title: "Nutrition Coaching", desc: "Our certified nutritionists create personalized meal plans that complement your training. Includes weekly check-ins and macro tracking.", features: ["Custom meal plans", "Macro tracking", "Weekly check-ins", "Supplement guidance"] },
  { icon: Flame, title: "HIIT Training", desc: "Our signature high-intensity interval training classes push you to your limits in 45-minute sessions that burn calories for hours after.", features: ["45-min sessions", "Afterburn effect", "Full body workout", "Scalable intensity"] },
];

const Services = () => {
  return (
    <div className="bg-background pt-20">
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-heading text-sm tracking-[0.3em] uppercase">What We Offer</span>
          <h1 className="font-heading text-4xl md:text-6xl mt-2 mb-6 text-foreground">Our Services</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive fitness solutions designed to help you reach your goals faster.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 space-y-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-gradient-card border border-border rounded-lg p-8 md:p-10 shadow-card flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <s.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-2xl mb-3 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {s.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-foreground/70">
                      <Zap className="h-3 w-3 text-primary flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/pricing">
            <Button className="bg-gradient-primary text-primary-foreground font-heading tracking-wider shadow-glow hover:opacity-90 px-8 py-6 text-lg">
              View Pricing <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
