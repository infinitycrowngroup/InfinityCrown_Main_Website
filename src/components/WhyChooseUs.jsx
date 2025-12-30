import React from 'react';
import { ShieldCheck, Zap, TrendingUp, Heart } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

const values = [
    {
        icon: <ShieldCheck size={40} />,
        title: "Trust & Transparency",
        description: "We build relationships based on honesty. No hidden costs, no jargon — just clear communication and results."
    },
    {
        icon: <Heart size={40} />,
        title: "Quality-Driven",
        description: "We don't settle for 'good enough'. Every line of code is crafted with precision and care for the user experience."
    },
    {
        icon: <TrendingUp size={40} />,
        title: "Growth-Oriented",
        description: "Your success is our success. We build scalable solutions that grow with your ambitions."
    },
    {
        icon: <Zap size={40} />,
        title: "Visionary",
        description: "We stay ahead of tech trends to ensure your business is future-proof and competitive."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="order-2 lg:order-1 relative">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-royal-blue/30 rounded-full blur-3xl"></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                            {values.map((item, index) => (
                                <Motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="p-6 bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-2xl hover:bg-gray-900 transition-colors"
                                >
                                    <div className="text-gold mb-4">{item.icon}</div>
                                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </Motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-royal-blue font-semibold tracking-wide uppercase mb-3 text-sm">Why Choose Us?</h2>
                        <h3 className="text-4xl font-bold text-white mb-6">
                            More Than Just a <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">Tech Partner.</span>
                        </h3>
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            In a digital world crowded with options, Infinity Crown stands out by prioritizing what truly matters: <strong>Value, Integrity, and Impact.</strong>
                        </p>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            We understand that technology is an investment. That's why we focus on delivering returns through efficient code, stunning design, and reliable support.
                        </p>

                        <div className="flex items-center space-x-8">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-white">5</p>
                                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Projects</p>
                            </div>
                            <div className="w-px h-12 bg-white/10"></div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-white">98%</p>
                                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Satisfaction</p>
                            </div>
                            <div className="w-px h-12 bg-white/10"></div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-white">24/7</p>
                                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Support</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
