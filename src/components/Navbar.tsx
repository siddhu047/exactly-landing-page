const navLinks = [
  { label: "The Collection", active: true },
  { label: "The Science", active: false },
  { label: "The Craft", active: false },
  { label: "About Us", active: false },
  { label: "Contact", active: false },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
        <div className="text-2xl font-headline text-on-surface tracking-tight">
          Bottle+
        </div>
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`font-label text-xs tracking-widest uppercase transition-colors ${
                link.active
                  ? "text-primary font-semibold border-b border-primary/30 pb-1"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <button className="copper-gradient text-primary-foreground px-6 py-2 rounded-md font-medium text-sm hover:opacity-80 transition-all duration-300 active:scale-95">
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
