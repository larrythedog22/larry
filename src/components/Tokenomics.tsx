"use client";

import { motion } from 'framer-motion';

const TokenomicsData = [
  {
    percentage: 64,
    label: 'Moon Pack Distribution 🌕',
    description: 'Fair share for all wolf pack members via lunar bonding',
    color: 'bg-purple-500',
    icon: '🐺',
    funFact: 'Each token represents one howl at the moon!'
  },
  {
    percentage: 21,
    label: 'Alpha Wolf Purchase 🎯',
    description: 'Early wolves who joined the pack at launch',
    color: 'bg-purple-700',
    icon: '🐾',
    funFact: 'First 100 wolves get a limited "Early Howler" badge'
  },
  {
    percentage: 10,
    label: 'Pack Airdrops 🎁',
    description: 'Surprise treats for loyal pack members',
    color: 'bg-purple-600',
    icon: '🦴',
    funFact: 'Random full moon surprises for active members'
  },
  {
    percentage: 5,
    label: 'Howl Marketing 📢',
    description: 'Spreading the legend of Larry far and wide',
    color: 'bg-purple-800',
    icon: '🎪',
    funFact: 'Part of this funds Larry\'s comedy tour!'
  }
];

const WolfFeatures = [
  {
    title: 'Fair Moon Launch 🌕',
    description: 'Everyone starts as a pup - no VIP wolves here!',
    icon: '🚀',
    extraIcons: ['🌙', '✨', '🐺']
  },
  {
    title: 'Community Den 🏰',
    description: 'The pack decides together - democracy at its finest!',
    icon: '🐾',
    extraIcons: ['🗳️', '🤝', '🎭']
  },
  {
    title: 'Anti-Dump Protection 🛡️',
    description: 'Smart contracts prevent paper-pawed panic!',
    icon: '🔒',
    extraIcons: ['💎', '🐾', '✨']
  }
];

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-24 bg-gradient-to-b from-purple-900/20 to-black relative overflow-hidden">
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
            Larry's Token Treasury 🐺
          </h2>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Total Pack Size: 1,000,000,000,000,000 $LARRY 🌕
          </p>
          <p className="text-purple-400 mt-2">
            (That's a lot of howls!)
          </p>
        </motion.div>

        {/* Token Distribution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Distribution Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {TokenomicsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20
                          hover:border-purple-500/40 transition-all duration-300
                          hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{item.icon}</span>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-white">{item.label}</h3>
                      <span className="text-2xl font-bold text-purple-400">{item.percentage}%</span>
                    </div>
                    <p className="text-gray-300 mt-1">{item.description}</p>
                  </div>
                </div>
                <div className="h-3 bg-purple-900/30 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className={`h-full ${item.color}`}
                  />
                </div>
                <p className="text-purple-300/80 text-sm mt-3 italic">
                  {item.funFact}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Features */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Pack Features 🐾</h3>
              <div className="space-y-6">
                {WolfFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-3xl mb-2">{feature.icon}</span>
                      <div className="flex gap-1">
                        {feature.extraIcons.map((icon, i) => (
                          <span key={i} className="text-lg transform hover:scale-125 transition-transform cursor-pointer">
                            {icon}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Fun Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-4">Fun Pack Stats 📊</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Average Howls Per Minute: Over 9000! 🐺</li>
                <li>• Moon Phases Tracked: All of them! 🌑🌒🌓🌔🌕</li>
                <li>• Squirrels Chased: Still counting... 🐿️</li>
                <li>• Pants Ripped During Transformation: Too many! 👖</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium text-lg transition-colors
                           transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
            Join the Pack! 🐺
          </button>
        </motion.div>
      </div>
    </section>
  );
}
