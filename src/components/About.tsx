"use client";

import { motion } from 'framer-motion';

const WolfmanIcon = () => (
  <svg 
    viewBox="0 0 100 100" 
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M50 20 C30 20 20 40 20 50 C20 70 35 80 50 80 C65 80 80 70 80 50 C80 40 70 20 50 20" className="text-purple-400"/>
    <circle cx="40" cy="45" r="3" fill="currentColor" className="text-purple-300"/>
    <circle cx="60" cy="45" r="3" fill="currentColor" className="text-purple-300"/>
    <path d="M45 55 C47 58 53 58 55 55" strokeLinecap="round"/>
    <path d="M30 35 L40 30 M70 35 L60 30" strokeLinecap="round"/>
    <path d="M25 25 L35 35 M75 25 L65 35" strokeLinecap="round"/>
  </svg>
);

const MoonIcon = () => (
  <svg 
    viewBox="0 0 100 100" 
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path 
      d="M60 25 C40 25 25 40 25 60 C25 80 40 95 60 95 C45 95 30 80 30 60 C30 40 45 25 60 25" 
      fill="currentColor" 
      className="text-purple-400"
    />
    <circle cx="70" cy="35" r="2" fill="currentColor"/>
    <circle cx="75" cy="45" r="1" fill="currentColor"/>
    <circle cx="65" cy="40" r="1" fill="currentColor"/>
  </svg>
);

const PawPrintIcon = () => (
  <svg 
    viewBox="0 0 100 100" 
    className="w-full h-full text-purple-400/20"
    fill="currentColor"
  >
    <circle cx="50" cy="50" r="15"/>
    <circle cx="35" cy="35" r="8"/>
    <circle cx="65" cy="35" r="8"/>
    <circle cx="35" cy="65" r="8"/>
    <circle cx="65" cy="65" r="8"/>
  </svg>
);

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-6 gap-8">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-20 h-20">
              <PawPrintIcon />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Who is <span className="text-purple-400">Larry Talbot?</span>
            </h2>
            <p className="text-lg text-gray-300">
              Larry Talbot, immortalized in the 1941 classic "The Wolf Man," is a tragic figure whose story resonates with the duality of human nature. 
              Now reborn as a meme coin, $LARRY embodies the transformative power of cryptocurrency.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <div className="w-24 h-24 mx-auto mb-6">
                <WolfmanIcon />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">The Legend</h3>
              <p className="text-gray-300 text-center">
                Originally played by Lon Chaney Jr., Larry Talbot's transformation under the full moon became a cultural phenomenon.
              </p>
            </div>

            <div className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <div className="w-24 h-24 mx-auto mb-6">
                <MoonIcon />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">The Transformation</h3>
              <p className="text-gray-300 text-center">
                Like the moon's influence on Talbot, $LARRY aims to transform the meme coin landscape with its unique approach.
              </p>
            </div>

            <div className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <div className="absolute inset-0 flex items-center justify-center text-4xl">🐺</div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">The Pack</h3>
              <p className="text-gray-300 text-center">
                Join our growing community of holders as we howl at the moon and reach new heights together.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <p className="text-lg text-purple-300 font-medium italic">
              "Even a man who is pure in heart and says his prayers by night, may become a wolf when the wolfbane blooms and the autumn moon is bright."
            </p>
            <p className="text-gray-400 mt-2">- The Wolf Man (1941)</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
