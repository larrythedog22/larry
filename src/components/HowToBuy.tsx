"use client";

import { motion } from 'framer-motion';
import { FaEthereum, FaWallet, FaRocket } from 'react-icons/fa';

export default function HowToBuy() {
  const steps = [
    {
      icon: FaWallet,
      title: "Get a Web3 Wallet",
      description: "Make sure you have a Web3 wallet like MetaMask installed and ready."
    },
    {
      icon: FaEthereum,
      title: "Have ETH Ready",
      description: "Ensure you have enough ETH in your wallet for the purchase and gas fees."
    },
    {
      icon: FaRocket,
      title: "Buy on Uniswap",
      description: "Click the Buy button to go to Uniswap and make your purchase directly!"
    }
  ];

  return (
    <section id="how-to-buy" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pack-pattern.png')] opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            How to Buy <span className="text-purple-400">$LARRY</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get your $LARRY tokens in just a few simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://app.uniswap.org/swap?chain=optimism&inputCurrency=NATIVE&outputCurrency=0xad984fbd3fb10d0b47d561be7295685af726fdb3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-medium text-xl transition-all duration-300 transform hover:scale-105"
          >
            Buy on Uniswap
            <FaRocket className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
