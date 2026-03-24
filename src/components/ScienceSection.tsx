import { ShieldCheck, HeartPulse } from "lucide-react";
import scienceWater from "@/assets/science-water.jpg";

const ScienceSection = () => {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-surface-container-lowest/50">
              <img
                src={scienceWater}
                alt="Water ripples on copper surface"
                className="w-full aspect-square object-cover"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
          </div>
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-primary font-label uppercase tracking-widest text-xs">
                Ayurvedic Wisdom
              </span>
              <h2 className="text-5xl font-headline text-on-surface">
                The Science of Tamra Jal
              </h2>
            </div>
            <p className="text-xl font-light leading-relaxed text-secondary">
              Storing water in a copper vessel creates a natural purification
              process. It can kill all the microorganisms, molds, fungi, algae
              and bacteria present in the water that could be harmful to the
              body.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <ShieldCheck className="w-6 h-6 text-primary" />
                <h4 className="font-bold text-on-surface">
                  Oligodynamic Effect
                </h4>
                <p className="text-sm text-secondary">
                  Micro-leaching of copper ions creates an alkaline environment,
                  naturally sanitizing the water.
                </p>
              </div>
              <div className="space-y-3">
                <HeartPulse className="w-6 h-6 text-primary" />
                <h4 className="font-bold text-on-surface">
                  Digestive Balance
                </h4>
                <p className="text-sm text-secondary">
                  Helps in balancing the three doshas — Vata, Kapha, and Pitta —
                  in the human body.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
