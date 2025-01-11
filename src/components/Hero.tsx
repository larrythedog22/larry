"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const moonPhases = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];

export default function Hero() {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 1000, height: 800 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % moonPhases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize window size
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });

      // Update window size on resize
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        yoyo: Infinity
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-900/20 via-black to-black">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/moon-texture.png')] bg-cover opacity-5" />
        
        {/* Floating Elements */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 bg-purple-500/30 rounded-full"
            animate={{
              x: [
                Math.random() * (windowSize.width || 1000),
                Math.random() * (windowSize.width || 1000)
              ],
              y: [
                Math.random() * (windowSize.height || 800),
                Math.random() * (windowSize.height || 800)
              ],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 1.5 
            }}
            className="relative w-48 h-48 mx-auto mb-8"
          >
            <Image
              src="https://i.ibb.co/sv1n1sW/OIP.jpg"
              alt="Larry Talbot Logo"
              width={192}
              height={192}
              className="rounded-full border-4 border-purple-500/50 shadow-lg shadow-purple-500/20"
              priority
            />
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-purple-400/50"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Moon Phase Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-6xl mb-6 animate-pulse"
          >
            {moonPhases[currentPhase]}
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Unleash the Power of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Larry Talbot
            </span>{" "}
            <span className="text-purple-400">($LARRY)</span> 🐾
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
          >
            The meme coin inspired by legends. Larry is loyal, fun, and ready to lead the pack.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="https://app.uniswap.org/swap?chain=optimism&inputCurrency=NATIVE&outputCurrency=0xad984fbd3fb10d0b47d561be7295685af726fdb3"
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              whileHover="hover"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-bold text-lg transition-colors shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
            >
              Buy $LARRY 🌕
            </motion.a>
            
            <motion.a
              href="https://twitter.com/LarryTalbotXYZ"
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              whileHover="hover"
              className="px-8 py-4 bg-transparent border-2 border-purple-500 text-white rounded-full font-bold text-lg transition-colors hover:bg-purple-500/10"
            >
              Join the Pack 🐺
            </motion.a>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            {[
              {
                title: "Fair Launch",
                description: "No Presale, Equal Opportunity",
                icon: "🚀"
              },
              {
                title: "Community-Driven",
                description: "No Team Allocation",
                icon: "🤝"
              },
              {
                title: "Autonomous Agents",
                description: "Rewarding Community Milestones",
                icon: "🎯"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="p-6 rounded-2xl bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
