import { motion } from "framer-motion";
import { Heart, Star, Smile, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const timelineEvents = [
  {
    date: "Novembre 2023",
    title: "Notre Première Rencontre",
    description: "Le jour où nos chemins se sont croisés pour la première fois, marquant le début d'une belle aventure.",
    icon: Heart,
    color: "text-primary",
  },
  {
    date: "Décembre 2023",
    title: "Notre Premier Rendez-vous",
    description: "Un moment magique où nous avons découvert tant de points communs et partagé nos premiers rires.",
    icon: Star,
    color: "text-accent",
  },
  {
    date: "Janvier 2024",
    title: "Je t'aime",
    description: "Les trois mots les plus importants, prononcés avec tout mon cœur.",
    icon: Heart,
    color: "text-warm-coral",
  },
  {
    date: "Mars 2024",
    title: "Notre Premier Voyage",
    description: "Des souvenirs inoubliables créés ensemble dans un nouvel endroit.",
    icon: Smile,
    color: "text-rose-gold",
  },
  {
    date: "Novembre 2024",
    title: "Un An d'Amour",
    description: "365 jours de bonheur, de complicité et d'amour inconditionnel.",
    icon: Calendar,
    color: "text-primary",
  },
];

const OurStory = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-soft-pink via-background to-cream opacity-50" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gradient mb-4">
            Notre Histoire
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Chaque moment avec toi est une page de notre belle histoire d'amour
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-12 relative"
            >
              <div className={`flex items-center gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="flex-1">
                  <Card className="p-6 glass-effect border-primary/20 hover:border-primary/40 transition-all">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full bg-primary/10 ${event.color}`}>
                        <event.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-primary font-semibold mb-1">{event.date}</p>
                        <h3 className="text-2xl font-serif font-bold mb-2">{event.title}</h3>
                        <p className="text-foreground/70">{event.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
                
                <div className="w-4 h-4 rounded-full bg-primary romantic-glow flex-shrink-0" />
                
                <div className="flex-1" />
              </div>

              {index < timelineEvents.length - 1 && (
                <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-transparent mx-auto my-4 opacity-30" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16 p-8 glass-effect rounded-3xl max-w-2xl mx-auto"
        >
          <Heart className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse-glow" />
          <h2 className="text-3xl font-serif font-bold mb-4 text-gradient">
            Et ce n'est que le début...
          </h2>
          <p className="text-lg text-foreground/70">
            Chaque jour avec toi est une nouvelle aventure que j'ai hâte de vivre.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OurStory;
