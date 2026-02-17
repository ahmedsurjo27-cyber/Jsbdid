import { motion } from "framer-motion";
import { Target, Shield, Users, Trophy } from "lucide-react";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const values = [
  { icon: Target, title: "Results-Driven", desc: "Every program is designed with measurable outcomes in mind." },
  { icon: Shield, title: "Safety First", desc: "Proper form and injury prevention are our top priorities." },
  { icon: Users, title: "Community", desc: "We build a supportive tribe that lifts each other up." },
  { icon: Trophy, title: "Excellence", desc: "We never settle for average — in equipment, coaching, or results." },
];

const trainers = [
  { img: trainer1, name: "Mike Reynolds", role: "Head Trainer & Strength Coach", bio: "15+ years of experience in powerlifting and functional fitness. NSCA-CSCS certified with a passion for helping clients unlock their potential." },
  { img: trainer2, name: "Sarah Chen", role: "HIIT & Cardio Specialist", bio: "Former competitive athlete turned elite coach. Specializes in metabolic conditioning and fat loss programs with proven results." },
  { img: trainer3, name: "Carlos Rivera", role: "Bodybuilding & Nutrition Expert", bio: "Certified sports nutritionist and competitive bodybuilder. Designs custom programs combining training and nutrition for maximum gains." },
];

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className={`py-20 md:py-28 ${className}`}
  >
    <div className="container mx-auto px-4">{children}</div>
  </motion.section>
);

const About = () => {
  return (
    <div className="bg-background pt-20">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-heading text-sm tracking-[0.3em] uppercase">Our Story</span>
          <h1 className="font-heading text-4xl md:text-6xl mt-2 mb-6 text-foreground">Built on Grit & Passion</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Founded in 2010, ForgeFit started as a small garage gym with one mission: to create a space where everyday people could train like athletes. Today, we're a premium fitness destination with world-class facilities, but our DNA remains the same — hard work, community, and results.
          </p>
        </div>
      </section>

      {/* Values */}
      <Section>
        <div className="text-center mb-14">
          <span className="text-primary font-heading text-sm tracking-[0.3em] uppercase">What Drives Us</span>
          <h2 className="font-heading text-3xl md:text-5xl mt-2 text-foreground">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-gradient-card border border-border rounded-lg p-8 text-center shadow-card">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl mb-2 text-foreground">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Trainers */}
      <Section className="bg-secondary">
        <div className="text-center mb-14">
          <span className="text-primary font-heading text-sm tracking-[0.3em] uppercase">The Team</span>
          <h2 className="font-heading text-3xl md:text-5xl mt-2 text-foreground">Meet Our Trainers</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((t) => (
            <div key={t.name} className="bg-gradient-card border border-border rounded-lg overflow-hidden shadow-card">
              <img src={t.img} alt={t.name} className="w-full aspect-[3/4] object-cover" />
              <div className="p-6">
                <h3 className="font-heading text-xl text-foreground">{t.name}</h3>
                <p className="text-primary text-sm mb-3">{t.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
