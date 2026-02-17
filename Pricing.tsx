import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    monthly: 29,
    yearly: 24,
    desc: "Perfect for getting started on your fitness journey.",
    features: ["Gym floor access", "Locker room access", "2 group classes/week", "Basic fitness assessment", "Mobile app access"],
    popular: false,
  },
  {
    name: "Pro",
    monthly: 59,
    yearly: 49,
    desc: "Our most popular plan for serious fitness enthusiasts.",
    features: ["Unlimited gym access", "All group classes", "1 PT session/month", "Nutrition consultation", "Sauna & steam room", "InBody scan quarterly", "Priority booking"],
    popular: true,
  },
  {
    name: "Elite",
    monthly: 99,
    yearly: 84,
    desc: "The ultimate package for those who demand the best.",
    features: ["Everything in Pro", "4 PT sessions/month", "Custom meal plan", "24/7 gym access", "Guest passes (2/month)", "Recovery zone access", "Monthly InBody scan", "Priority support"],
    popular: false,
  },
];

const Pricing = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="bg-background pt-20">
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-heading text-sm tracking-[0.3em] uppercase">Membership</span>
          <h1 className="font-heading text-4xl md:text-6xl mt-2 mb-6 text-foreground">Simple Pricing</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            No hidden fees. No contracts. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`font-heading text-sm uppercase tracking-wider ${!yearly ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`w-14 h-7 rounded-full relative transition-colors ${yearly ? "bg-primary" : "bg-muted"}`}
            >
              <div className={`w-5 h-5 rounded-full bg-foreground absolute top-1 transition-transform ${yearly ? "translate-x-8" : "translate-x-1"}`} />
            </button>
            <span className={`font-heading text-sm uppercase tracking-wider ${yearly ? "text-foreground" : "text-muted-foreground"}`}>
              Yearly <span className="text-primary text-xs">(Save 15%)</span>
            </span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-lg p-8 shadow-card border relative ${
                  plan.popular
                    ? "border-primary bg-gradient-card scale-105"
                    : "border-border bg-gradient-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground text-xs font-heading tracking-wider px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="font-heading text-2xl text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mt-1 mb-6">{plan.desc}</p>
                <div className="mb-6">
                  <span className="font-heading text-5xl text-foreground">
                    ${yearly ? plan.yearly : plan.monthly}
                  </span>
                  <span className="text-muted-foreground text-sm">/month</span>
                </div>
                <Link to="/contact">
                  <Button
                    className={`w-full font-heading tracking-wider mb-6 ${
                      plan.popular
                        ? "bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  >
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
