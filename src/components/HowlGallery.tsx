"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

const funCollectibles = [
  {
    title: "Larry's Bad Hair Day",
    description: "That awkward moment when Larry tried to use human shampoo... Spoiler: It didn't end well! 🧴",
    rarity: "Ultra Rare Blooper",
    funFact: "Larry now exclusively uses Moon-Approved Fur Conditioner",
    image: "🐺💇‍♂️"
  },
  {
    title: "Midnight Snack Attack",
    description: "Caught on camera: Larry raiding the fridge at 3 AM looking for his favorite moon-shaped cookies! 🍪",
    rarity: "Legendary Moment",
    funFact: "He ate the entire cookie jar... including the jar!",
    image: "🌙🍽️"
  },
  {
    title: "Yoga Gone Wrong",
    description: "Larry attempting 'Downward Moon Wolf' pose... ended up tangled in his own tail! 🧘‍♂️",
    rarity: "Epic Fail",
    funFact: "His yoga mat has mysterious bite marks now",
    image: "🧘‍♂️🐾"
  },
  {
    title: "Karaoke Night",
    description: "That time Larry tried singing 'Who Let The Dogs Out' at the community karaoke... AWOOO! 🎤",
    rarity: "Priceless Memory",
    funFact: "All windows within 5 miles mysteriously shattered",
    image: "🎵🐺"
  },
  {
    title: "Beach Day Disaster",
    description: "Larry discovered his fur isn't exactly beach-ready... Sand everywhere! 🏖️",
    rarity: "Comedy Gold",
    funFact: "Local vacuum cleaners filed a formal complaint",
    image: "🏖️🐾"
  },
  {
    title: "Squirrel Chase Fiasco",
    description: "Watch Larry chase a squirrel... right into a tree! The squirrel won. 🐿️",
    rarity: "Viral Moment",
    funFact: "That squirrel now teaches self-defense classes",
    image: "🐿️💨"
  }
];

const funSlogans = [
  "Collect Larry's Most Embarrassing Moments! ",
  "Every Full Moon Brings New Hilarity! ",
  "Join the Pack of Laughter! ",
  "Howl at These Memories! ",
  "Warning: Contains Extreme Wolfiness! "
];

export default function HowlGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-purple-900/20 to-black relative overflow-hidden">
      {/* Animated paw prints background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0.5, 1, 0.5],
              x: [0, (i % 2 ? 100 : -100)],
              y: [0, (i % 3 ? 100 : -100)]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 0.5
            }}
            className="absolute w-8 h-8 text-purple-500/20"
            style={{
              left: `${(i * 23) % 100}%`,
              top: `${(i * 17) % 100}%`
            }}
          >
            
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
            Larry's <span className="text-purple-400">Hall of Fame</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Witness the most hilarious moments in Larry's journey! Each one more embarrassing than the last! 
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {funCollectibles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">
                {item.image}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <div className="bg-purple-500/20 rounded-lg p-4 mb-4">
                <p className="text-purple-300 text-sm">{item.rarity}</p>
              </div>

              {/* Fun Fact Popup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0, y: hoveredIndex === index ? 0 : 20 }}
                className="absolute bottom-0 left-0 right-0 bg-black/90 text-white p-4 text-sm rounded-b-xl"
              >
                <p className="text-purple-400"> Behind the Scenes:</p>
                <p>{item.funFact}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Fun Slogans */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {funSlogans.map((slogan, index) => (
            <motion.div
              key={slogan}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1, rotate: [-2, 2, -2, 0] }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-purple-600/20 px-6 py-3 rounded-full border border-purple-500/20"
            >
              <span className="text-white font-medium">{slogan}</span>
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
            "Join us in collecting Larry's most memorable (and embarrassing) moments! "
          </p>
          <p className="text-gray-400 mt-2">
            No wolves were harmed in the making of these memories... just Larry's dignity! 
          </p>
        </motion.div>
      </div>
    </section>
  );
}
