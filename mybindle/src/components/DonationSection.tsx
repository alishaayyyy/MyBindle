import phonePayment from "@/assets/phone-payment.png";
import phoneThankyou from "@/assets/phone-thankyou.png";

const DonationSection = () => {
  return (
    <section className="bg-primary text-primary-foreground py-12 sm:py-14 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        
        {/* Left content */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold mb-4 italic leading-tight">
            Be the Reason<br />
            Someone Smiles Today!
          </h2>

          <p className="text-sm sm:text-base opacity-90 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Your generosity can change lives. Every donation brings hope, support, and a brighter future. Give today and make a difference!
          </p>

          <button className="bg-foreground text-background px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">
            Donate Now
          </button>
        </div>

        {/* Right: phone images */}
        <div className="flex justify-center items-end gap-3 sm:gap-4 flex-wrap lg:flex-nowrap">
          <img
            src={phonePayment}
            alt="Payment methods"
            className="w-[140px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-auto rounded-2xl"
            loading="lazy"
          />
          <img
            src={phoneThankyou}
            alt="Thank you"
            className="w-[140px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-auto rounded-2xl"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default DonationSection;