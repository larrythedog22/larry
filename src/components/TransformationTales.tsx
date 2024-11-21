"use client";

import { motion } from 'framer-motion';
import { FaWolfPackBattalion, FaFilm, FaMoon, FaGem } from 'react-icons/fa';

const stories = [
  {
    title: "The Origin",
    year: "1941",
    description: "Larry Talbot returns to his ancestral home in Wales, where a fateful encounter with a wolf changes his life forever. Just as Larry transformed under the full moon, $LARRY transforms the crypto landscape.",
    icon: FaFilm
  },
  {
    title: "The Curse",
    year: "Present",
    description: "The curse of the werewolf becomes a blessing in crypto. Every full moon brings new opportunities for $LARRY holders, with special events and increased rewards.",
    icon: FaMoon
  },
  {
    title: "The Legacy",
    year: "Future",
    description: "Like Larry Talbot's enduring legacy in horror cinema, $LARRY aims to leave an indelible mark on the crypto world, building a strong, loyal community of holders.",
    icon: FaGem
  }
];

// Pre-calculated paw print positions
const pawPositions = Array.from({ length: 20 }, (_, i) => ({
  startX: `${(i * 19) % 100}%`,
  startY: `${(i * 23) % 100}%`,
  endX: `${((i * 19 + 50) % 100)}%`,
  endY: `${((i * 23 + 50) % 100)}%`,
  delay: i * 0.5
}));

export default function TransformationTales() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Animated paw prints background */}
      <div className="absolute inset-0">
        {pawPositions.map((pos, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.2, 0],
              x: [pos.startX, pos.endX],
              y: [pos.startY, pos.endY]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: pos.delay
            }}
            className="absolute w-4 h-4 text-purple-500/20"
          >
            🐾
          </motion.div>
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
            Transformation <span className="text-purple-400">Tales</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From Silver Screen to Digital Gold: The Evolution of Larry Talbot
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0"
            >
              <div className={`w-full md:w-1/3 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                  <story.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{story.title}</h3>
                  <div className="text-purple-400 mb-4">{story.year}</div>
                </div>
              </div>
              <div className={`w-full md:w-2/3 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <p className="text-gray-300 text-lg leading-relaxed">{story.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600/20 rounded-full border border-purple-500/20">
            <FaWolfPackBattalion className="w-6 h-6 text-purple-400" />
            <span className="text-white font-medium">Join the Transformation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
