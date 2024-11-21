"use client";

import { motion } from 'framer-motion';
import { FaMoon } from 'react-icons/fa';

const phases = [
  {
    name: "New Moon",
    description: "Larry's taking a power nap! Even werewolves need beauty sleep 😴",
    effect: "Time to stock up on $LARRY while he's snoozing!",
    icon: "🌑",
    funFact: "Did you know? Larry's snoring sounds like price charts going up!"
  },
  {
    name: "First Quarter",
    description: "Larry's getting itchy... Must be the full moon approaching 🐾",
    effect: "Watch him scratch those paper hands away!",
    icon: "🌓",
    funFact: "Larry's favorite scratching post? The bear market!"
  },
  {
    name: "Full Moon",
    description: "AWOOOOO! Larry's gone full wolf mode! 🐺",
    effect: "Hide your shorts, Larry's on the prowl!",
    icon: "🌕",
    funFact: "Larry's howls can be heard all the way to the moon... literally!"
  },
  {
    name: "Last Quarter",
    description: "Larry's doing his morning stretches after a wild night",
    effect: "Time to count those gains while Larry does yoga",
    icon: "🌗",
    funFact: "Larry's favorite yoga pose? The Downward Moon Dog!"
  }
];

// Pre-calculated moon positions for the background
const moonPositions = Array.from({ length: 12 }, (_, i) => ({
  left: `${(i * 19) % 100}%`,
  top: `${(i * 23) % 100}%`,
  size: 4 + (i % 3) * 2,
  delay: i * 0.3
}));

const wolfHowls = [
  "AWOOOOOOO! 🐺",
  "To the mooooon! 🌕",
  "Who's afraid of the big bad pump? 📈",
  "Catch me if you can! 🏃‍♂️",
  "Full moon, full pockets! 💰"
];

export default function LunarPhases() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-purple-900/20 relative overflow-hidden">
      {/* Animated moon background */}
      <div className="absolute inset-0 overflow-hidden">
        {moonPositions.map((pos, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              rotate: [0, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: pos.delay
            }}
            className="absolute rounded-full bg-purple-300/10 blur-sm"
            style={{
              left: pos.left,
              top: pos.top,
              width: pos.size + 'rem',
              height: pos.size + 'rem'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Larry's Lunar <span className="text-purple-400">Shenanigans</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Watch what happens when our favorite werewolf catches moonlight fever! 🌙✨
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                rotate: [-1, 1, -1, 0],
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 relative group overflow-hidden"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                {phase.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{phase.name}</h3>
              <p className="text-gray-400 mb-4">{phase.description}</p>
              <div className="bg-purple-500/20 rounded-lg p-4 mb-4">
                <p className="text-purple-300 text-sm">{phase.effect}</p>
              </div>
              
              {/* Fun Fact Popup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 right-0 bg-black/90 text-white p-4 text-sm rounded-b-xl"
              >
                <p className="text-purple-400">🐾 Fun Fact:</p>
                <p>{phase.funFact}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Random Howls */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {wolfHowls.map((howl, index) => (
            <motion.div
              key={howl}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1, rotate: [-2, 2, -2, 0] }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-purple-600/20 px-6 py-3 rounded-full border border-purple-500/20"
            >
              <span className="text-white font-medium">{howl}</span>
            </motion.div>
          ))}
        </div>

        {/* Fun Footer Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-purple-400 text-lg font-medium italic">
            "Not financial advice, just werewolf wisdom! 🐺✨"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
