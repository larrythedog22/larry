"use client";

import { motion } from 'framer-motion';

const funBenefits = [
  {
    title: "Howl-arious Updates",
    description: "Get first access to Larry's daily misadventures and dad jokes that are so bad, they're good! ",
    icon: "🐺",
    perks: [
      "📱 Daily Paw-some Memes",
      "🎬 Behind-the-scenes Bloopers",
      "💝 Larry's Failed Pickup Lines"
    ]
  },
  {
    title: "Full Moon Parties",
    description: "Join our legendary virtual gatherings where Larry attempts to DJ... pray for everyone's ears! ",
    icon: "🌕",
    perks: [
      "🎵 Virtual Moon Howling",
      "🕺 Worst Dance Competition",
      "🎤 Lunar Karaoke Nights"
    ]
  },
  {
    title: "Pack Pranks",
    description: "Be part of Larry's elaborate community pranks! (Warning: May involve fake squirrels) ",
    icon: "🎭",
    perks: [
      "🎪 Prank Planning Sessions",
      "🐿️ Squirrel Decoy Workshop",
      "🎬 Epic Fail Compilations"
    ]
  },
  {
    title: "Fur-tastic Fashion",
    description: "Watch Larry model the latest in werewolf fashion. Spoiler: It's mostly torn jeans and bad ties! ",
    icon: "👔",
    perks: [
      "👕 Monthly Fashion Disasters",
      "🎀 Tie-Eating Contests",
      "💇‍♂️ Fur Styling Tips"
    ]
  }
];

const roadmapSteps = [
  {
    phase: "Phase 1: The Grand Howl-ening",
    title: "Larry's First Full Moon Party",
    description: "Our furry friend discovers the joy of community howling and decides to start his own pack",
    status: "Completed",
    icon: "🌕🐺",
    funFact: "Larry accidentally started a neighborhood howl-along that lasted 3 days"
  },
  {
    phase: "Phase 2: Pack Growth Spurt",
    title: "Building the Ultimate Wolf Den",
    description: "Creating the coziest hangout spots across multiple territories (platforms) for all pack members",
    status: "In Progress",
    icon: "🏰🎪",
    funFact: "Current den decoration budget: 1 million belly rubs"
  },
  {
    phase: "Phase 3: Paw-some Collectibles",
    title: "Larry's Legendary Moments",
    description: "Immortalizing Larry's most embarrassing moments as collectible memorabilia",
    status: "Upcoming",
    icon: "🎭📸",
    funFact: "Including the infamous 'Squirrel Chase Gone Wrong' series"
  },
  {
    phase: "Phase 4: Wolf Pack Democracy",
    title: "When Wolves Vote",
    description: "Let the pack decide! (Warning: May result in unlimited bacon treats)",
    status: "Planning",
    icon: "🗳️🦴",
    funFact: "First community vote: Should Larry learn to use a smartphone? (Spoiler: Still struggling)"
  }
];

export default function WolfPackBenefits() {
  return (
    <section className="py-24 bg-gradient-to-b from-purple-900/20 to-black relative overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => {
          // Use deterministic positions based on index
          const left = `${(i * 13.7) % 100}%`;
          const top = `${(i * 17.3) % 100}%`;
          
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2 + (i % 2),
                repeat: Infinity,
                delay: i % 2,
              }}
              style={{ left, top }}
              className="absolute w-1 h-1 bg-purple-300/50 rounded-full"
            />
          );
        })}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pack <span className="text-purple-400">Perks</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join Larry's pack of misfits and enjoy these totally "professional" benefits! 
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-32">
          {funBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, rotate: [-0.5, 0.5, -0.5, 0] }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
            >
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 mb-6">{benefit.description}</p>
              
              <div className="space-y-3">
                {benefit.perks.map((perk, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-purple-500/10 rounded-lg p-3"
                  >
                    <span className="text-purple-400"></span>
                    <span className="text-gray-300">{perk}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Roadmap Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Larry's <span className="text-purple-400">Master Plan</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Watch Larry stumble his way through these totally achievable goals! 
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {roadmapSteps.map((step, index) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-16 last:mb-0"
            >
              {/* Connecting Line */}
              {index !== roadmapSteps.length - 1 && (
                <div className="absolute left-[2.5rem] top-20 bottom-0 w-0.5 bg-purple-500/20" />
              )}

              <div className="flex gap-6">
                <div className="text-4xl flex-shrink-0 w-20 h-20 bg-purple-900/30 rounded-full flex items-center justify-center border border-purple-500/20">
                  {step.icon}
                </div>
                <div className="flex-grow">
                  <div className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                    <div className="text-sm text-purple-400 mb-2">{step.phase}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 mb-4">{step.description}</p>
                    <div className="flex justify-between items-center">
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        step.status === 'Completed' ? 'bg-green-500/20 text-green-300' :
                        step.status === 'In Progress' ? 'bg-blue-500/20 text-blue-300' :
                        'bg-purple-500/20 text-purple-300'
                      }`}>
                        {step.status}
                      </span>
                      <span className="text-sm text-gray-400 italic">"{step.funFact}"</span>
                    </div>
                  </div>
                </div>
              </div>
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
            "Join the pack! We promise to make your life at least 420% more entertaining! "
          </p>
          <p className="text-gray-400 mt-2">
            Side effects may include: uncontrollable howling, increased moon-watching, and spontaneous dad jokes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
