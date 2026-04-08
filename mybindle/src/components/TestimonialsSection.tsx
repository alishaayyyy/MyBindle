import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emily R.",
    location: "USA",
    text: "This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!",
    stars: 5,
  },
  {
    name: "Amit K.",
    location: "India",
    text: "Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online.",
    stars: 5,
  },
  {
    name: "Sophie M.",
    location: "UK",
    text: "I joined just to explore, but now I can't imagine my day without it. The real-time chat and engaging communities make every interaction special!",
    stars: 5,
  },
  {
    name: "Javier L.",
    location: "Spain",
    text: "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand.",
    stars: 5,
  },
  {
    name: "Lucas T.",
    location: "Brazil",
    text: "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!",
    stars: 5,
  },
  {
    name: "Nora S.",
    location: "Canada",
    text: "I've tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
          What Our Users Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {testimonials.map((t) => (
            <div key={t.name} className="border border-border rounded-xl p-6 bg-card">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-coral-light flex items-center justify-center text-primary font-bold text-xs">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-primary">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold text-sm hover:bg-coral-light transition-colors">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;