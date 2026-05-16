const Footer = () => {
  return (
    <footer className="bg-surface-container-low w-full py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 max-w-7xl mx-auto">
        <div className="col-span-1 space-y-6">
          <div className="text-xl font-headline text-on-surface">Bottle+</div>
          <p className="text-secondary text-sm leading-relaxed">
            Elevating everyday hydration through pure copper craftsmanship and
            timeless wellness rituals.
          </p>
        </div>
        <div className="space-y-6">
          <h4 className="text-primary font-headline text-sm font-bold uppercase tracking-widest">
            Resources
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-secondary hover:text-on-surface transition-colors text-sm">
                Manufacturing Process
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary hover:text-on-surface transition-colors text-sm">
                Ayurvedic Benefits
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary hover:text-on-surface transition-colors text-sm">
                Bulk Orders
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-primary font-headline text-sm font-bold uppercase tracking-widest">
            Legals
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-secondary hover:text-on-surface transition-colors text-sm">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary hover:text-on-surface transition-colors text-sm">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-outline-variant/10 text-center">
        <p className="text-secondary text-xs font-label">
          © 2024 Bottle+. Crafted with intention. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
