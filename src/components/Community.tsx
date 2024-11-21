"use client";

import { motion } from 'framer-motion';
import { FaTelegram, FaTwitter, FaDiscord, FaMoon, FaPaw, FaWolfPackBattalion } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'Telegram',
    icon: FaTelegram,
    url: 'https://t.me/Larrytalboteth',
    color: 'hover:bg-blue-500/20',
    description: "Join the pack's main den 🐺"
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    url: 'https://twitter.com/Larrytalboteth',
    color: 'hover:bg-sky-500/20',
    description: 'Howl with us on Twitter 🌙'
  },
  {
    name: 'Discord',
    icon: FaDiscord,
    url: 'https://discord.gg/Larrytalboteth',
    color: 'hover:bg-indigo-500/20',
    description: 'Run with the pack 🐾'
  }
];

const funFacts = [
  "Full moons make $LARRY stronger! 🌕",
  "Our community never sleeps (like real wolves) 🐺",
  "Each howl brings more members to the pack 🎵",
  "Larry's favorite time is moonlight trading ⭐",
  "We're building a global wolf pack! 🌍",
  "Every wolf gets their share of the hunt 💎"
];

const WolfSilhouette = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
    <path d="M20,80 Q30,70 35,75 Q40,80 50,80 Q60,80 65,75 Q70,70 80,80 L80,90 L20,90 Z" />
    <path d="M40,40 L45,35 L50,40 L55,35 L60,40 L50,50 Z" />
    <circle cx="35" cy="30" r="3" />
    <circle cx="65" cy="30" r="3" />
  </svg>
);

export default function Community() {
  return (
    <section id="community" className="py-20 bg-black relative overflow-hidden">
      {/* Animated Moon Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-20 right-20 w-40 h-40 rounded-full bg-purple-400/20 blur-2xl"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Join the <span className="text-purple-400">Pack</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Where every wolf has a voice in the pack
          </p>
        </motion.div>

        {/* Social Links with Fun Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col items-center justify-center p-8 rounded-2xl border border-purple-500/20 ${link.color} transition-all duration-300`}
            >
              <link.icon className="w-12 h-12 text-white mb-4" />
              <span className="text-white font-medium text-lg mb-2">{link.name}</span>
              <span className="text-gray-400 text-center">{link.description}</span>
            </motion.a>
          ))}
        </div>

        {/* Fun Wolf Facts Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <div className="flex items-center justify-center mb-4">
              <FaWolfPackBattalion className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Pack Facts</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <FaPaw className="text-purple-400 flex-shrink-0" />
                  <span>{fact}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Unified Handle Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600/20 rounded-full border border-purple-500/20"
          >
            <span className="text-purple-400 text-2xl">🐺</span>
            <span className="text-white font-medium text-xl">@Larrytalboteth</span>
            <FaMoon className="text-purple-400 w-5 h-5" />
          </motion.div>
          <p className="text-gray-400 mt-4">
            One pack, one howl - find us everywhere with the same handle!
          </p>
        </motion.div>

        {/* Wolf Silhouette Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 w-24 h-24 mx-auto text-purple-400/20"
        >
          <WolfSilhouette />
        </motion.div>
      </div>
    </section>
  );
}
