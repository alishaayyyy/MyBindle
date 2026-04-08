import logo from "@/assets/mybindle-logo.png";
import phoneMockup1 from "@/assets/phone-mockup-1.png";
import phoneMockup2 from "@/assets/phone-mockup-2.png";

const HeroSection = () => {
  return (
    <section className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Top nav */}
      <div className="container mx-auto px-6 py-4 flex items-center justify-center gap-2">
        <img src={logo} alt="MyBindle" width={32} height={32} className="brightness-0 invert" />
        <span className="text-lg font-semibold">Mybindle</span>
      </div>

      <div className="container mx-auto px-6 py-12 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Stay Connected<br />
            Stay Social<br />
            Stay You!
          </h1>
          <p className="text-sm md:text-base opacity-90 max-w-md mb-8 leading-relaxed">
            A place where friendships grow, communities thrive, and moments turn into unforgettable experiences. Whether you're looking to reconnect with old friends, build new relationships, or share what matters most to you – MyBindle is your home on the internet.
          </p>
          <button className="bg-foreground text-background px-8 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>

        {/* Right phone mockups */}
        <div className="relative flex justify-center items-center">
          {/* Badge: Seamless Connections */}
          <div className="absolute top-0 left-1/4 z-10 bg-background text-foreground px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-medium">
            <span className="text-primary">🔗</span> Seamless Connections
          </div>

          <div className="relative">
            <img src={phoneMockup1} alt="App screenshot" width={280} height={500} className="relative z-[2] rounded-3xl" />
          </div>
          <div className="relative -ml-8 mt-16">
            <img src={phoneMockup2} alt="Explore page" width={260} height={460} loading="lazy" className="rounded-3xl" />
            {/* Badge: Discover & Explore */}
            <div className="absolute bottom-12 right-0 z-10 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-medium">
              🔍 Discover & Explore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;