const steps = [
  { num: "01", title: "Download", desc: "Open Play Store or App Store" },
  { num: "02", title: "Install App", desc: "The app will install automatically." },
  { num: "03", title: "Ready to Use", desc: "Sign up or log in to start exploring!" },
];

const InstallSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-3">
          How to Install Our App
        </h2>
        <p className="text-muted-foreground text-sm mb-12 max-w-lg mx-auto">
          Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.
        </p>

        {/* Steps */}
        <div className="flex items-center justify-center gap-0 mb-8 max-w-2xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-center">
              <span className="text-primary font-bold text-xl">{step.num}</span>
              {i < steps.length - 1 && (
                <div className="w-24 md:w-40 h-0.5 bg-primary mx-2" />
              )}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {steps.map((step) => (
            <div key={step.num} className="border border-border rounded-xl p-6 bg-card">
              <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstallSection;