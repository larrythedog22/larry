"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

const funAchievements = [
  {
    title: "Professional Howler",
    description: "Successfully woke up the entire neighborhood at 3 AM! 🌙",
    progress: 85,
    reward: "Official 'Sorry Neighbors!' greeting card",
    funFact: "Local dogs started a petition to make Larry take singing lessons",
    icon: "🐺🎤"
  },
  {
    title: "Moon Chaser",
    description: "Tried to catch the moon's reflection in a lake... got wet! 💦",
    progress: 92,
    reward: "Waterproof fur treatment",
    funFact: "The fish now tell stories about the flying wolf",
    icon: "🌕🏃‍♂️"
  },
  {
    title: "Squirrel Whisperer",
    description: "Failed to catch any squirrels for 30 days straight 🐿️",
    progress: 78,
    reward: "A 'How to Make Friends with Squirrels' guidebook",
    funFact: "The squirrels started a support group for Larry",
    icon: "🐿️🤝"
  },
  {
    title: "Paw-fessional Dancer",
    description: "Mastered the Moonwalk... sort of! 🕺",
    progress: 65,
    reward: "Custom wolf-sized dance shoes",
    funFact: "Michael Jackson's ghost gave Larry a standing ovation",
    icon: "🐺💃"
  }
];

const funQuotes = [
  "Every howl counts! ",
  "Chase your dreams (and maybe some squirrels)! ",
  "Dancing with the Wolves: Larry Edition ",
  "Howl yeah! "
];

export default function WolfPackAchievements() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-black to-purple-900/20 relative overflow-hidden">
      {/* Animated moon particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 2, 1],
              x: [0, (i % 2 ? 200 : -200)],
              y: [0, (i % 3 ? 200 : -200)]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: i * 0.7
            }}
            className="absolute rounded-full bg-purple-300/10 blur-lg"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
              width: (4 + (i % 3) * 2) + 'rem',
              height: (4 + (i % 3) * 2) + 'rem'
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
            Larry's <span className="text-purple-400">Greatest Hits</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join us in celebrating Larry's most memorable (and hilarious) achievements! 
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {funAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, rotate: [-0.5, 0.5, -0.5, 0] }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
              <p className="text-gray-400 mb-6">{achievement.description}</p>

              {/* Progress Bar */}
              <div className="relative h-4 bg-purple-900/40 rounded-full overflow-hidden mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${achievement.progress}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-400 to-purple-600"
                />
              </div>

              <div className="bg-purple-500/20 rounded-lg p-4 mb-4">
                <p className="text-purple-300 text-sm">
                  Reward: {achievement.reward}
                </p>
              </div>

              {/* Fun Fact Popup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0, y: hoveredIndex === index ? 0 : 20 }}
                className="absolute bottom-0 left-0 right-0 bg-black/90 text-white p-4 text-sm rounded-b-xl"
              >
                <p className="text-purple-400"> Behind the Achievement:</p>
                <p>{achievement.funFact}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Fun Quotes */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {funQuotes.map((quote, index) => (
            <motion.div
              key={quote}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1, rotate: [-2, 2, -2, 0] }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-purple-600/20 px-6 py-3 rounded-full border border-purple-500/20"
            >
              <span className="text-white font-medium">{quote}</span>
            </motion.div>
          ))}
        </div>

        {/* Fun Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-purple-400 text-lg font-medium italic">
            "They said he couldn't do it... they were right, but it was hilarious to watch! "
          </p>
          <p className="text-gray-400 mt-2">
            Every failure is just another opportunity for a legendary story! 
          </p>
        </motion.div>
      </div>
    </section>
  );
}
