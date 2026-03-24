import { BadgeCheck, BookOpen, Receipt, MapPin } from "lucide-react";

const trustItems = [
  { icon: BadgeCheck, title: "4.5 Rating", subtitle: "IndiaMART Verified" },
  { icon: BookOpen, title: "7+ Years", subtitle: "Heritage Craft" },
  { icon: Receipt, title: "GST Reg.", subtitle: "Transparent Billing" },
  { icon: MapPin, title: "Hyderabad HQ", subtitle: "Crafted in India" },
];

const TrustBar = () => {
  return (
    <section className="bg-surface-container-low py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-items-center">
          {trustItems.map((item, i) => (
            <div
              key={item.title}
              className={`flex items-center gap-3 ${
                i > 0 ? "md:border-l border-outline-variant/30 md:pl-8" : ""
              }`}
            >
              <item.icon className="text-primary w-7 h-7" />
              <div className="flex flex-col">
                <span className="text-on-surface font-bold text-lg">
                  {item.title}
                </span>
                <span className="text-secondary text-xs font-label uppercase">
                  {item.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
