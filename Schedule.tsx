import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const schedule: Record<string, { time: string; name: string; trainer: string; duration: string }[]> = {
  Monday: [
    { time: "06:00", name: "Morning HIIT", trainer: "Sarah Chen", duration: "45 min" },
    { time: "08:00", name: "Weight Training", trainer: "Mike Reynolds", duration: "60 min" },
    { time: "10:00", name: "Yoga Flow", trainer: "Sarah Chen", duration: "60 min" },
    { time: "17:00", name: "Spinning", trainer: "Carlos Rivera", duration: "45 min" },
    { time: "19:00", name: "Boxing Fitness", trainer: "Mike Reynolds", duration: "60 min" },
  ],
  Tuesday: [
    { time: "06:00", name: "Cardio Blast", trainer: "Carlos Rivera", duration: "45 min" },
    { time: "09:00", name: "Strength & Conditioning", trainer: "Mike Reynolds", duration: "60 min" },
    { time: "12:00", name: "Lunch Express HIIT", trainer: "Sarah Chen", duration: "30 min" },
    { time: "18:00", name: "CrossFit", trainer: "Carlos Rivera", duration: "60 min" },
    { time: "20:00", name: "Stretch & Recovery", trainer: "Sarah Chen", duration: "45 min" },
  ],
  Wednesday: [
    { time: "06:00", name: "Morning HIIT", trainer: "Sarah Chen", duration: "45 min" },
    { time: "08:00", name: "Powerlifting", trainer: "Mike Reynolds", duration: "75 min" },
    { time: "11:00", name: "Pilates", trainer: "Sarah Chen", duration: "60 min" },
    { time: "17:00", name: "Functional Training", trainer: "Carlos Rivera", duration: "45 min" },
    { time: "19:00", name: "Kickboxing", trainer: "Mike Reynolds", duration: "60 min" },
  ],
  Thursday: [
    { time: "06:00", name: "Cardio Blast", trainer: "Carlos Rivera", duration: "45 min" },
    { time: "09:00", name: "Olympic Lifting", trainer: "Mike Reynolds", duration: "60 min" },
    { time: "12:00", name: "Lunch Express HIIT", trainer: "Sarah Chen", duration: "30 min" },
    { time: "18:00", name: "Body Pump", trainer: "Carlos Rivera", duration: "60 min" },
    { time: "20:00", name: "Yoga Flow", trainer: "Sarah Chen", duration: "60 min" },
  ],
  Friday: [
    { time: "06:00", name: "Morning HIIT", trainer: "Sarah Chen", duration: "45 min" },
    { time: "08:00", name: "Weight Training", trainer: "Mike Reynolds", duration: "60 min" },
    { time: "10:00", name: "Spinning", trainer: "Carlos Rivera", duration: "45 min" },
    { time: "17:00", name: "CrossFit", trainer: "Carlos Rivera", duration: "60 min" },
    { time: "19:00", name: "Friday Fight Night", trainer: "Mike Reynolds", duration: "60 min" },
  ],
  Saturday: [
    { time: "08:00", name: "Weekend Warrior HIIT", trainer: "Sarah Chen", duration: "60 min" },
    { time: "10:00", name: "Strength Bootcamp", trainer: "Mike Reynolds", duration: "75 min" },
    { time: "12:00", name: "Yoga & Meditation", trainer: "Sarah Chen", duration: "60 min" },
  ],
  Sunday: [
    { time: "09:00", name: "Active Recovery", trainer: "Sarah Chen", duration: "60 min" },
    { time: "11:00", name: "Open Gym", trainer: "Carlos Rivera", duration: "120 min" },
  ],
};

const Schedule = () => {
  const [activeDay, setActiveDay] = useState("Monday");

  return (
    <div className="bg-background pt-20">
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-heading text-sm tracking-[0.3em] uppercase">Timetable</span>
          <h1 className="font-heading text-4xl md:text-6xl mt-2 mb-6 text-foreground">Class Schedule</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find the perfect class for your schedule. Book your spot today.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Day Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`font-heading text-sm tracking-wider px-5 py-2.5 rounded-lg transition-all ${
                  activeDay === day
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {day.slice(0, 3).toUpperCase()}
              </button>
            ))}
          </div>

          {/* Classes */}
          <div className="max-w-3xl mx-auto space-y-4">
            {schedule[activeDay].map((cls, i) => (
              <motion.div
                key={`${activeDay}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-gradient-card border border-border rounded-lg p-6 shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="text-center min-w-[60px]">
                    <span className="font-heading text-xl text-primary">{cls.time}</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-foreground">{cls.name}</h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center gap-1"><User className="h-3 w-3" /> {cls.trainer}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {cls.duration}</span>
                    </div>
                  </div>
                </div>
                <Button className="bg-gradient-primary text-primary-foreground font-heading tracking-wider text-sm shadow-glow hover:opacity-90 flex-shrink-0">
                  Book Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
