import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Star } from "lucide-react";

const loveReasons = [
  {
    title: "Ton sourire",
    message: "Ton sourire illumine mes journées et réchauffe mon cœur, même dans les moments les plus difficiles.",
    icon: Heart,
  },
  {
    title: "Ta gentillesse",
    message: "Ta bienveillance envers moi et les autres me montre chaque jour la beauté de ton âme.",
    icon: Sparkles,
  },
  {
    title: "Ton humour",
    message: "Tu sais me faire rire comme personne, et chaque moment avec toi est rempli de joie.",
    icon: Star,
  },
  {
    title: "Ta force",
    message: "Tu m'inspires par ta force et ta détermination face aux défis de la vie.",
    icon: Heart,
  },
  {
    title: "Ta complicité",
    message: "Nous partageons une connexion unique, et je me sens compris comme jamais auparavant.",
    icon: Sparkles,
  },
  {
    title: "Ton amour",
    message: "L'amour que tu me donnes me rend meilleur et me fait croire en nous chaque jour.",
    icon: Star,
  },
  {
    title: "Ta présence",
    message: "Simplement être à tes côtés me procure un sentiment de paix et de bonheur incomparable.",
    icon: Heart,
  },
  {
    title: "Tes petites attentions",
    message: "Chaque geste, chaque mot doux, montre à quel point tu tiens à moi.",
    icon: Sparkles,
  },
];

const LoveMessages = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-coral/20 via-background to-rose-gold/20" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Heart className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse-glow" />
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gradient mb-4">
            Pourquoi Je T'aime
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Il y a tant de raisons, mais voici quelques-unes des plus importantes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {loveReasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="p-6 glass-effect border-primary/20 hover:border-primary/40 transition-all h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold mb-2 text-primary">
                      {reason.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">{reason.message}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-10 glass-effect border-primary/30 romantic-glow">
            <div className="text-center">
              <Heart className="w-12 h-12 text-primary mx-auto mb-6 animate-pulse-glow" />
              <h2 className="text-3xl font-serif font-bold mb-6 text-gradient">
                Une lettre d'amour
              </h2>
              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Ma chérie,
                </p>
                <p>
                  Cette année passée à tes côtés a été la plus belle de ma vie. 
                  Chaque jour avec toi est une bénédiction, et je ne peux imaginer 
                  ma vie sans ton sourire, ton rire et ton amour.
                </p>
                <p>
                  Tu es ma meilleure amie, ma confidente, mon amour. Tu m'as appris 
                  ce que signifie vraiment aimer quelqu'un de tout son cœur. Avec toi, 
                  je me sens complet, heureux et prêt à affronter n'importe quoi.
                </p>
                <p>
                  Merci pour cette première année incroyable. J'ai hâte de vivre 
                  toutes les suivantes à tes côtés, de créer encore plus de souvenirs 
                  et de construire notre avenir ensemble.
                </p>
                <p className="font-serif text-xl text-primary">
                  Je t'aime plus que les mots ne peuvent le dire. ❤️
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default LoveMessages;
