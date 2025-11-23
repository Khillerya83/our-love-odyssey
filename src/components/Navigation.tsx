import { NavLink } from "@/components/NavLink";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export const Navigation = () => {
  const navItems = [
    { to: "/", label: "Accueil" },
    { to: "/notre-histoire", label: "Notre Histoire" },
    { to: "/galerie", label: "Galerie" },
    { to: "/messages", label: "Messages d'Amour" },
    { to: "/ensemble", label: "Ensemble" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 group">
            <Heart className="w-6 h-6 text-primary animate-pulse-glow" />
            <span className="text-xl font-serif font-bold text-gradient">Notre Amour</span>
          </NavLink>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                activeClassName="text-primary after:scale-x-100"
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="md:hidden">
            {/* Mobile menu would go here */}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
