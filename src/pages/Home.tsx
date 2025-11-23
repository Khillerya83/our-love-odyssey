import { motion } from "framer-motion";
import { Heart, Sparkles, Calendar } from "lucide-react";
import { Scene3D } from "@/components/Scene3D";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-soft-pink via-background to-lavender opacity-60" />
      
      {/* 3D Scene */}
      <div className="absolute inset-0 opacity-40">
        <Scene3D />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <Heart className="w-24 h-24 text-primary animate-pulse-glow mx-auto mb-6" />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl font-serif font-bold text-gradient mb-6"
        >
          Un An Ensemble
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-2xl font-light"
        >
          Une année remplie d'amour, de rires et de moments inoubliables
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center gap-2 mb-12 glass-effect px-6 py-3 rounded-full"
        >
          <Calendar className="w-5 h-5 text-primary" />
          <span className="text-lg font-medium">365 jours de bonheur</span>
          <Sparkles className="w-5 h-5 text-accent animate-pulse" />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            onClick={() => navigate("/notre-histoire")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground romantic-glow text-lg px-8 py-6 rounded-full transition-all hover:scale-105"
          >
            Découvrir Notre Histoire
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/galerie")}
            className="glass-effect border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8 py-6 rounded-full transition-all hover:scale-105"
          >
            Voir Nos Souvenirs
          </Button>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              className="absolute"
            >
              <Heart className="w-6 h-6 text-primary/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
