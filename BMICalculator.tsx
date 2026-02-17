import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculate = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      setBmi(Math.round((w / (h * h)) * 10) / 10);
    }
  };

  const getCategory = (bmi: number) => {
    if (bmi < 18.5) return { label: "Underweight", color: "text-accent" };
    if (bmi < 25) return { label: "Normal", color: "text-green-400" };
    if (bmi < 30) return { label: "Overweight", color: "text-accent" };
    return { label: "Obese", color: "text-destructive" };
  };

  return (
    <div className="bg-gradient-card border border-border rounded-lg p-8 shadow-card">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Height (cm)</label>
          <Input
            type="number"
            placeholder="175"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="bg-secondary border-border text-foreground"
            min={50}
            max={300}
          />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Weight (kg)</label>
          <Input
            type="number"
            placeholder="75"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="bg-secondary border-border text-foreground"
            min={10}
            max={500}
          />
        </div>
      </div>
      <Button
        onClick={calculate}
        className="w-full bg-gradient-primary text-primary-foreground font-heading tracking-wider shadow-glow hover:opacity-90"
      >
        Calculate BMI
      </Button>

      {bmi !== null && (
        <div className="mt-6 text-center">
          <p className="font-heading text-4xl text-foreground">{bmi}</p>
          <p className={`font-heading text-lg ${getCategory(bmi).color}`}>
            {getCategory(bmi).label}
          </p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
