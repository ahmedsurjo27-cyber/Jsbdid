import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Trophy, Clock, Dumbbell, Flame, Heart, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-gym.jpg";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

/* ── Animated Counter ── */
const Counter = ({ target, label, suffix = "" }: { target: number; label: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const step = Math.ceil(target / 60);
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl md:text-5xl font-bold text-primary">
        {count}{suffix}
      </div>
      <p className="text-muted-foreground text-sm mt-1 uppercase tracking-wider">{label}</p>
    </div>
  );
};

/* ── Section Wrapper ── */
const Section = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className={`py-20 md:py-28 ${className}`}
  >
    <div className="container mx-auto px-4">{children}</div>
  </motion.section>
);

const SectionTitle = ({ sub, title }: { sub: string; title: string }) => (
  <div className="text-center mb-14">
    <span className="text-primary font-heading text-sm tracking-[0.3em] uppercase">{sub}</span>
    <h2 className="font-heading text-3xl md:text-5xl mt-2 text-foreground">{title}</h2>
  </div>
);

/* ── Services Data ── */
const services = [
  { icon: Dumbbell, title: "Weight Training", desc: "Build strength and muscle with expert-guided programs." },
  { icon: Flame, title: "HIIT Classes", desc: "Burn maximum calories with high-intensity interval training." },
  { icon: Heart, title: "Cardio Programs", desc: "Boost endurance with our dynamic cardio sessions." },
  { icon: Target, title: "Personal Training", desc: "One-on-one coaching tailored to your goals." },
  { icon: Zap, title: "Group Fitness", desc: "Energetic group sessions that push your limits." },
  { icon: Users, title: "Nutrition Coaching", desc: "Personalized meal plans for optimal results." },
];

const trainers = [
  { img: trainer1, name: "Mike Reynolds", role: "Head Trainer & Strength Coach" },
  { img: trainer2, name: "Sarah Chen", role: "HIIT & Cardio Specialist" },
  { img: trainer3, name: "Carlos Rivera", role: "Bodybuilding & Nutrition Expert" },
];

const testimonials = [
  { name: "James T.", text: "ForgeFit changed my life. Lost 30kg in 6 months with their personal training program. The trainers actually care.", rating: 5 },
  { name: "Emily R.", text: "Best gym I've ever been to. The atmosphere is incredible, equipment is top-notch, and the classes are addictive.", rating: 5 },
  { name: "David K.", text: "The nutrition coaching combined with weight training gave me results I never thought possible. Truly elite.", rating: 5 },
];

const Index = () => {
  return (
    <div className="bg-background">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="ForgeFit gym interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-primary font-heading text-sm tracking-[0.3em] uppercase mb-4 border border-primary/30 px-4 py-1 rounded-full">
              Premium Fitness Experience
            </span>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] mb-6">
              FORGE YOUR<br />
              <span className="text-gradient">STRONGEST SELF</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 font-body">
              Elite training. Unmatched equipment. A community that pushes you further than you thought possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary text-primary-foreground font-heading text-lg tracking-wider shadow-glow hover:opacity-90 transition-opacity px-8 py-6">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-foreground/20 text-foreground font-heading text-lg tracking-wider hover:bg-foreground/5 px-8 py-6">
                  Explore Programs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 bg-secondary border-y border-border">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Counter target={5000} label="Active Members" suffix="+" />
          <Counter target={15} label="Years Experience" suffix="+" />
          <Counter target={50} label="Expert Trainers" suffix="+" />
          <Counter target={98} label="Success Rate" suffix="%" />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <Section>
        <SectionTitle sub="What We Offer" title="Our Programs" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <motion.div
              key={s.title}
              whileHover={{ y: -6 }}
              className="bg-gradient-card border border-border rounded-lg p-8 shadow-card group hover:border-primary/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl mb-2 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services">
            <Button variant="outline" className="border-primary/40 text-primary font-heading tracking-wider hover:bg-primary/10">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* ── TRAINERS ── */}
      <Section className="bg-secondary">
        <SectionTitle sub="Meet The Team" title="Elite Trainers" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((t) => (
            <motion.div
              key={t.name}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-lg shadow-card"
            >
              <img src={t.img} alt={t.name} className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-xl text-foreground">{t.name}</h3>
                <p className="text-primary text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/about">
            <Button variant="outline" className="border-primary/40 text-primary font-heading tracking-wider hover:bg-primary/10">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* ── TESTIMONIALS ── */}
      <Section>
        <SectionTitle sub="Real Results" title="What Members Say" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gradient-card border border-border rounded-lg p-8 shadow-card"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <p className="font-heading text-foreground">{t.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-foreground/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-foreground/10 rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-6xl text-primary-foreground mb-4">
            Ready to Transform?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Join ForgeFit today and get your first week completely free. No commitments, no excuses.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-background text-foreground font-heading text-lg tracking-wider hover:bg-background/90 px-10 py-6 shadow-card">
              Claim Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
