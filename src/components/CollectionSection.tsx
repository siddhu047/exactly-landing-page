import { ArrowRight, Wrench } from "lucide-react";
import productScrewcap from "@/assets/product-screwcap.jpg";
import productClassic from "@/assets/product-classic.jpg";
import productGlass from "@/assets/product-glass.jpg";

const products = [
  {
    image: productScrewcap,
    title: "1000ml Screw Cap",
    desc: "Industrial precision with a classic silhouette.",
    badge: "Bestseller",
    cta: "Get Best Quote",
    offset: false,
  },
  {
    image: productClassic,
    title: "1000ml Classic",
    desc: "The gold standard for daily Ayurvedic hydration.",
    cta: "Get Best Quote",
    offset: true,
  },
  {
    image: productGlass,
    title: "350ml Copper Glass",
    desc: "Hammered texture for improved surface area benefits.",
    cta: "Get Best Quote",
    offset: false,
  },
];

const CollectionSection = () => {
  return (
    <section className="py-32 bg-surface">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-primary font-label uppercase tracking-widest text-xs">
              Curated Catalog
            </span>
            <h2 className="text-5xl font-headline text-on-surface">
              The Collection
            </h2>
          </div>
          <p className="max-w-md text-secondary leading-relaxed">
            Precision-engineered industrial grade copper vessels designed for the
            modern lifestyle while honoring ancient traditions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className={`group space-y-6 ${product.offset ? "lg:mt-12" : ""}`}
            >
              <div className="aspect-[3/4] overflow-hidden bg-surface-container-low rounded-lg relative">
                {product.badge && (
                  <div className="absolute top-4 right-4 z-10 copper-gradient text-primary-foreground text-[10px] font-bold px-3 py-1 uppercase tracking-tighter">
                    {product.badge}
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={1067}
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-headline">{product.title}</h3>
                <p className="text-secondary text-sm">{product.desc}</p>
                <button className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest pt-4 group-hover:gap-4 transition-all">
                  {product.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
          {/* Custom Manufacturing Card */}
          <div className="group space-y-6 lg:mt-12">
            <div className="aspect-[3/4] overflow-hidden bg-primary/5 rounded-lg border border-primary/20 flex items-center justify-center p-8 text-center">
              <div className="space-y-4">
                <Wrench className="w-12 h-12 text-primary/40 mx-auto" />
                <h3 className="text-2xl font-headline">
                  Custom Manufacturing
                </h3>
                <p className="text-secondary text-sm">
                  Bespoke sizing and branding for corporate and bulk clients.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-headline">OEM &amp; Bulk</h3>
              <p className="text-secondary text-sm">
                Direct factory supply for your specific needs.
              </p>
              <button className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest pt-4 group-hover:gap-4 transition-all">
                Inquire Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
