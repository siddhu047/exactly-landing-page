import heroBg from "@/assets/hero-bg.jpg";
import heroBottle from "@/assets/hero-bottle.jpg";

const HeroSection = () => {
  return (
    <header className="relative min-h-screen flex items-center bg-on-surface overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-40">
        <img
          src={heroBg}
          alt="Copper bottle with dramatic lighting"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </div>
      <div className="container mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1 border border-primary/30 rounded-full">
            <span className="text-primary-fixed-dim text-xs font-label uppercase tracking-[0.2em]">
              The Artisan Edition
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline text-surface-bright leading-tight -tracking-widest">
            Pure Copper.
            <br />
            <span className="italic text-primary-fixed-dim">Timeless</span>{" "}
            Wellness.
          </h1>
          <p className="text-xl text-surface-container-high max-w-lg font-light leading-relaxed">
            Seamlessly crafted for life. Experience the intersection of raw
            industrial precision and soulful Ayurvedic heritage.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="copper-gradient text-primary-foreground px-10 py-4 rounded-md font-bold hover:opacity-90 transition-all text-sm tracking-wider uppercase">
              Shop Collection
            </button>
            <button className="px-10 py-4 border border-surface-container-highest text-surface-bright hover:bg-surface-container-highest/10 transition-all text-sm tracking-wider uppercase">
              Bulk Quotes
            </button>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <div className="w-full aspect-[4/5] bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl overflow-hidden shadow-2xl border border-surface-container-lowest/5">
            <img
              src={heroBottle}
              alt="Premium copper bottle on stone pedestal"
              className="w-full h-full object-cover mix-blend-overlay"
              width={800}
              height={1000}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
