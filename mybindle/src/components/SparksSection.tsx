import phonesFeatures from "@/assets/phones-features.png";
import { Film, Bell, Users } from "lucide-react";

const SparksSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Phone images */}
        <div className="relative flex justify-center">
          <div className="relative">
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-coral-light rounded-full -z-10" />
            <img
              src={phonesFeatures}
              alt="App features"
              width={500}
              height={500}
              loading="lazy"
              className="relative z-10"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Where Every Click<br />
            Sparks a Connection!
          </h2>
          <p className="text-muted-foreground text-sm mb-8 max-w-md">
            A small act of kindness today can create a lifetime of impact for someone in need. Give from the heart and change a life!
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-coral-light flex items-center justify-center flex-shrink-0">
                <Film className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Short Videos & Reels</h3>
                <p className="text-sm text-muted-foreground">
                  Share engaging, bite-sized content that keeps everyone entertained.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-coral-light flex items-center justify-center flex-shrink-0">
                <Bell className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Smart Notifications</h3>
                <p className="text-sm text-muted-foreground">
                  Stay updated on what matters without the noise.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-coral-light flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Interest-Based Communities</h3>
                <p className="text-sm text-muted-foreground">
                  Join groups and discussions that match your passion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SparksSection;