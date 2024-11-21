"use client";

import { motion } from 'framer-motion';

const funRoadmap = [
  {
    title: "Larry's First Howl",
    description: "Our hero discovers he's not just a regular doggo - he's got some serious lunar talents! 🌕",
    achievement: "Successfully howled at 3 moons (though one was just a street lamp) 🔦",
    funFact: "Neighbors started a petition for 'quiet nights' (We ignored it) 📜✨",
    status: "completed",
    icon: "🐺🎵",
    extraIcons: ["🌙", "🎤", "🗣️", "✨"]
  },
  {
    title: "The Great Squirrel Chase",
    description: "Larry builds his pack while chasing the most elusive squirrel in crypto history! 🏃‍♂️",
    achievement: "Recruited 100 fellow chasers (squirrel still at large) 🔍",
    funFact: "Set world record for 'Most Trees Climbed by a Werewolf in Loafers' 👞",
    status: "in-progress",
    icon: "🐺🐿️",
    extraIcons: ["🌳", "👟", "💨", "😅"]
  },
  {
    title: "Moonlight Mischief",
    description: "Time to spread some howl-arious chaos across the blockchain! 🎭",
    achievement: "Created the first ever Werewolf Meme DAO (WMD) 🎪",
    funFact: "Larry accidentally became a TikTok star doing the 'Full Moon Dance' 🕺",
    status: "upcoming",
    icon: "🐺🎪",
    extraIcons: ["🎭", "🎪", "🎯", "🎨"]
  },
  {
    title: "The Ultimate Transformation",
    description: "Larry finally masters the art of not ripping his favorite pants during transformation! 👖",
    achievement: "Saved enough on clothing to fund next phase 🧥",
    funFact: "Local tailor now specializes in 'werewolf-proof' attire 🪡",
    status: "planned",
    icon: "🐺✨",
    extraIcons: ["👔", "🎩", "🧦", "🕶️"]
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-gradient-to-b from-purple-900/20 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/moon-bg.png')] bg-cover opacity-10" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Larry's Epic Journey 🐾
          </h2>
          <p className="text-xl text-purple-300 max-w-2xl mx-auto">
            Follow our furry friend's transformation from a regular wolf to a crypto legend! 🌟
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {funRoadmap.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 
                            hover:border-purple-500/40 transition-all duration-300 h-full
                            hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex flex-col items-center">
                    <span className="text-4xl mb-2">{phase.icon}</span>
                    <div className="flex gap-1">
                      {phase.extraIcons.map((icon, i) => (
                        <span key={i} className="text-lg transform hover:scale-125 transition-transform cursor-pointer">
                          {icon}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {phase.title}
                    </h3>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      phase.status === 'completed' ? 'bg-green-500/20 text-green-300' :
                      phase.status === 'in-progress' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-purple-500/20 text-purple-300'
                    }`}>
                      {phase.status.charAt(0).toUpperCase() + phase.status.slice(1)}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">
                  {phase.description}
                </p>
                
                <div className="space-y-3">
                  <div className="bg-purple-900/30 rounded-lg p-3">
                    <span className="text-purple-300 font-semibold">Achievement Unlocked:</span>
                    <p className="text-gray-300">{phase.achievement}</p>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-3">
                    <span className="text-purple-300 font-semibold">Fun Fact:</span>
                    <p className="text-gray-300">{phase.funFact}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-gray-400 text-sm"
        >
          <p>* No squirrels were harmed in the making of this roadmap (they're too fast) 🐿️💨</p>
        </motion.div>
      </div>
    </section>
  );
}
