import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Camera } from "lucide-react";

const memories = [
  {
    title: "Premier Rendez-vous",
    description: "Ce sourire qui m'a fait fondre",
    date: "Décembre 2023",
  },
  {
    title: "Week-end à la montagne",
    description: "Notre première escapade ensemble",
    date: "Février 2024",
  },
  {
    title: "Soirée sous les étoiles",
    description: "Une nuit magique à contempler le ciel",
    date: "Avril 2024",
  },
  {
    title: "Pique-nique au parc",
    description: "Rires et moments de complicité",
    date: "Juin 2024",
  },
  {
    title: "Concert",
    description: "Dancing toute la nuit ensemble",
    date: "Août 2024",
  },
  {
    title: "Anniversaire surprise",
    description: "Le jour où tu m'as surpris",
    date: "Septembre 2024",
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-lavender via-background to-soft-pink opacity-40" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Camera className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gradient mb-4">
            Nos Souvenirs
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Chaque photo raconte une partie de notre histoire
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
            >
              <Card className="overflow-hidden glass-effect border-primary/20 hover:border-primary/40 transition-all group">
                {/* Placeholder for photo */}
                <div className="aspect-square bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="w-16 h-16 text-primary/30 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="p-6">
                  <p className="text-sm text-primary font-semibold mb-1">{memory.date}</p>
                  <h3 className="text-xl font-serif font-bold mb-2">{memory.title}</h3>
                  <p className="text-foreground/70 text-sm">{memory.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16 p-8 glass-effect rounded-3xl max-w-2xl mx-auto"
        >
          <p className="text-lg text-foreground/70 italic">
            "Chaque photo est un trésor, chaque moment avec toi est précieux. 
            Merci pour tous ces souvenirs inoubliables. ❤️"
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
