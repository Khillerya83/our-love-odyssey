import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Plane, Home, Heart, MapPin, Music, Camera } from "lucide-react";

const dreams = [
  {
    title: "Voyager ensemble",
    description: "Découvrir le monde main dans la main, créer des souvenirs dans chaque coin de la planète.",
    icon: Plane,
    color: "text-primary",
  },
  {
    title: "Notre chez-nous",
    description: "Créer un foyer rempli d'amour, de rires et de moments chaleureux.",
    icon: Home,
    color: "text-accent",
  },
  {
    title: "Grandir ensemble",
    description: "Continuer à évoluer ensemble, en se soutenant dans tous nos projets.",
    icon: Heart,
    color: "text-warm-coral",
  },
  {
    title: "Nos aventures",
    description: "Vivre mille et une aventures, des plus simples aux plus extraordinaires.",
    icon: MapPin,
    color: "text-rose-gold",
  },
  {
    title: "Créer des souvenirs",
    description: "Partager des moments musicaux, danser sous les étoiles et chanter ensemble.",
    icon: Music,
    color: "text-primary",
  },
  {
    title: "Capturer chaque instant",
    description: "Immortaliser tous nos moments précieux à travers nos yeux et nos cœurs.",
    icon: Camera,
    color: "text-accent",
  },
];

const Together = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-lavender/30 via-background to-warm-coral/20" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Heart className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gradient mb-4">
            Notre Avenir Ensemble
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Tous les rêves que nous allons réaliser côte à côte
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {dreams.map((dream, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="p-8 glass-effect border-primary/20 hover:border-primary/40 transition-all h-full group">
                <div className={`p-4 rounded-full bg-primary/10 w-fit mx-auto mb-4 ${dream.color} group-hover:scale-110 transition-transform`}>
                  <dream.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3 text-center">
                  {dream.title}
                </h3>
                <p className="text-foreground/70 text-center leading-relaxed">
                  {dream.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-12 glass-effect border-primary/30 romantic-glow relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <Heart className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse-glow" />
              <h2 className="text-4xl font-serif font-bold mb-6 text-gradient">
                Notre Promesse
              </h2>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p className="italic">
                  "Main dans la main, cœur contre cœur, nous écrirons ensemble 
                  les plus beaux chapitres de notre vie."
                </p>
                <p>
                  Chaque rêve que nous partageons nous rapproche un peu plus. 
                  Chaque projet que nous construisons ensemble renforce notre amour. 
                  L'avenir nous appartient, et je suis impatient de le vivre avec toi.
                </p>
                <div className="flex items-center justify-center gap-4 mt-8">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-primary" />
                  <Heart className="w-6 h-6 text-primary" />
                  <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-primary" />
                </div>
                <p className="text-2xl font-serif text-primary mt-6">
                  Pour toujours et à jamais
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Floating hearts animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: "100vh" }}
              animate={{
                opacity: [0, 1, 0],
                y: "-10vh",
                x: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
              }}
              className="absolute"
            >
              <Heart className="w-4 h-4 text-primary/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Together;
