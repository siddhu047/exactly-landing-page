import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import mapHyderabad from "@/assets/map-hyderabad.jpg";

const ContactSection = () => {
  return (
    <section className="py-32 bg-surface overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="bg-surface-container-low rounded-3xl overflow-hidden shadow-sm flex flex-col lg:flex-row">
          <div className="p-16 flex-1 space-y-10">
            <div className="space-y-4">
              <span className="text-primary font-label uppercase tracking-widest text-xs">
                Connect With Us
              </span>
              <h2 className="text-4xl font-headline">
                Start Your Wellness Journey
              </h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-label uppercase text-secondary">
                    Phone Support
                  </p>
                  <p className="text-lg font-medium">+91-XXXXXXXXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-label uppercase text-secondary">
                    WhatsApp Direct
                  </p>
                  <p className="text-lg font-medium">Message our Craftsman</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-label uppercase text-secondary">
                    Email
                  </p>
                  <p className="text-lg font-medium">sales@jjtools.com</p>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <button className="copper-gradient text-primary-foreground px-12 py-4 rounded-md font-bold uppercase tracking-widest text-sm shadow-xl">
                Contact Sales
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[45%] h-96 lg:h-auto relative">
            <div className="absolute inset-0 bg-primary/5">
              <img
                src={mapHyderabad}
                alt="Map of Hyderabad HQ Location"
                className="w-full h-full object-cover grayscale"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-surface-container-lowest/90 backdrop-blur p-6 rounded-xl shadow-2xl flex flex-col items-center">
                <MapPin className="w-10 h-10 text-primary mb-2" />
                <p className="font-bold text-on-surface">Hyderabad HQ</p>
                <p className="text-xs text-secondary">Akshaya Enclave</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
