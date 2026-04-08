import { Link2, Camera, MessageCircle, Shield, Compass, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <Link2 className="w-5 h-5" />,
    title: "Seamless Connections",
    description: "Stay in touch with friends, family, and like-minded people with just a tap.",
    highlight: false,
  },
  {
    icon: <Camera className="w-5 h-5" />,
    title: "Share Your Story",
    description: "Upload photos, videos, and updates to let the world know what's happening in your life.",
    highlight: false,
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "Real-Time Chat",
    description: "Whether it's a DM or a group conversation, connect instantly with smooth, lightning-fast messaging.",
    highlight: false,
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Privacy First",
    description: "Your data, your control. We prioritize your privacy with world-class security.",
    highlight: true,
  },
  {
    icon: <Compass className="w-5 h-5" />,
    title: "Discover & Explore",
    description: "Find trending content, join communities, and follow pages that match your interests.",
    highlight: false,
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Grow Your Business",
    description: "Use our platform to market your brand, connect with customers, and build meaningful relationships.",
    highlight: false,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-3">
          Features That Keep You Hooked!
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Meet, Chat, Share – Anytime, Anywhere!
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`p-6 rounded-xl border transition-shadow hover:shadow-md ${
                feature.highlight
                  ? "border-primary bg-coral-light"
                  : "border-border bg-card"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-primary">{feature.icon}</span>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;