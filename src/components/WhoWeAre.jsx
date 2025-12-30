import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Shield, TrendingUp, BookOpen, Star, Eye } from 'lucide-react';

const values = [
    {
        icon: <Shield size={28} />,
        title: "Trust",
        description: "The foundation of every relationship we build."
    },
    {
        icon: <TrendingUp size={28} />,
        title: "Growth",
        description: "Sustainable progress through innovation and effort."
    },
    {
        icon: <BookOpen size={28} />,
        title: "Learning",
        description: "Adapting, evolving, and improving continuously."
    },
    {
        icon: <Star size={28} />,
        title: "Quality",
        description: "Precision, excellence, and attention to detail."
    },
    {
        icon: <Eye size={28} />,
        title: "Vision",
        description: "A forward-thinking mindset focused on long-term impact."
    }
];

const WhoWeAre = () => {
    return (
        <section id="who-we-are" className="py-24 relative overflow-hidden">
            {/* Additional subtle glow specifically for this section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-royal-blue/5 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">

                    <Motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-gold font-semibold tracking-wide uppercase mb-3 text-sm flex items-center">
                            <span className="w-8 h-px bg-gold mr-3"></span> Who We Are
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            Driven by Vision, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-blue to-blue-400">Defined by Values.</span>
                        </h3>
                    </Motion.div>

                    <Motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        <div>
                            <h4 className="text-xl font-bold text-white mb-3">Our Vision</h4>
                            <p className="text-gray-300 text-lg leading-relaxed border-l-2 border-gold/50 pl-6 italic">
                                “To become a trusted global brand that delivers infinite possibilities through innovative, reliable, and future-ready solutions.”
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-white mb-3">Our Mission</h4>
                            <p className="text-gray-400 leading-relaxed">
                                Infinity Crown is committed to solving problems without limits by building strong, dependable, and high-quality solutions.
                                We aim to grow as a reliable organization that businesses can trust for long-term success.
                            </p>
                        </div>
                    </Motion.div>

                </div>

                {/* Core Values */}
                <div className="relative">
                    <div className="text-center mb-12">
                        <h4 className="text-2xl font-bold text-white">Our Core Values</h4>
                        <div className="w-16 h-1 bg-royal-blue mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {values.map((item, index) => (
                            <Motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="group p-6 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-gold/30 transition-all duration-300 flex flex-col items-center text-center"
                            >
                                <div className="mb-4 text-royal-blue group-hover:text-gold transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <h5 className="text-lg font-semibold text-white mb-2">{item.title}</h5>
                                <p className="text-sm text-gray-400">{item.description}</p>
                            </Motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhoWeAre;
