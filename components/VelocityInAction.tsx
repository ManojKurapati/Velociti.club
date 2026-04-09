"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Clock } from "lucide-react";

const successData = [
  {
    metric: "$47M",
    label: "Series A Raised",
    context: "in 11 weeks post-deployment",
    icon: TrendingUp,
    color: "from-green-400 to-emerald-600"
  },
  {
    metric: "82%",
    label: "Cost Reduction",
    context: "in Level 1 customer support",
    icon: Users,
    color: "from-neon-cyan to-blue-500"
  },
  {
    metric: "1.4s",
    label: "Voice Latency",
    context: "down from 4.2s industry avg",
    icon: Clock,
    color: "from-neon-violet to-purple-600"
  }
];

export function VelocityInAction() {
  return (
    <section className="py-32 bg-black relative border-t border-white/5 overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-neon-cyan/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-white mb-4">
              Velocity in Action
            </h2>
            <p className="text-cool-gray-400 max-w-xl">
              We measure success strictly in enterprise exit-velocity and capital efficiency.
            </p>
          </div>
          <a href="/enterprise" className="text-neon-cyan hover:text-white transition-colors border-b border-neon-cyan/30 hover:border-white pb-1 font-medium">
            View full case studies &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successData.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity`} />
              
              <stat.icon className="w-8 h-8 text-white/50 mb-8" />
              <div className={`text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-4`}>
                {stat.metric}
              </div>
              <h4 className="text-xl font-medium text-white mb-2">{stat.label}</h4>
              <p className="text-sm text-cool-gray-400">{stat.context}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
