const specs = [
  { value: "100%", label: "Pure Copper Guarantee" },
  { value: "Seamless", label: "Hydraulic Press Formed" },
  { value: "Life-Long", label: "Structural Warranty" },
];

const EngineeringSection = () => {
  return (
    <section className="py-32 bg-on-surface">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-primary-fixed-dim font-label uppercase tracking-[0.3em] text-xs">
            Technical Specs
          </span>
          <h2 className="text-6xl font-headline text-surface-bright">
            Engineering Excellence
          </h2>
          <div className="w-24 h-px bg-primary/50 mx-auto"></div>
          <p className="text-xl font-light text-surface-container-highest/70 leading-relaxed">
            Unlike standard vessels, our tools are forged from{" "}
            <span className="text-primary-fixed-dim font-medium">
              99.9% pure industrial grade copper
            </span>
            . Our signature "Jointless" construction ensures a seamless finish
            that eliminates leak points and bacterial build-up in crevices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16">
            {specs.map((spec) => (
              <div key={spec.label} className="space-y-4">
                <div className="text-4xl font-headline text-primary-fixed-dim">
                  {spec.value}
                </div>
                <p className="text-xs font-label uppercase tracking-widest text-surface-bright">
                  {spec.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringSection;
