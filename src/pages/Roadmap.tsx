import React from 'react';
import { motion } from 'framer-motion';

const roadmapItems = [
  { phase: "Phase 1", title: "Launch", items: ["Token creation", "Website launch", "Community building"] },
  { phase: "Phase 2", title: "Growth", items: ["Exchange listings", "Partnerships", "Meme contest platform"] },
  { phase: "Phase 3", title: "Expansion", items: ["OIIAOIIA NFT marketplace", "Mobile app development", "Cross-chain integration"] },
  { phase: "Phase 4", title: "Ecosystem", items: ["OIIAOIIA DeFi products", "Governance implementation", "Real-world collaborations"] },
];

const Roadmap: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-6">OIIAOIIA Roadmap</h1>
      <div className="space-y-8">
        {roadmapItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold mb-3">{item.phase}: {item.title}</h2>
            <ul className="list-disc list-inside">
              {item.items.map((listItem, itemIndex) => (
                <li key={itemIndex}>{listItem}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Roadmap;
