import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-[30%] -left-[10%] w-[800px] h-[800px] bg-royal-blue/25 rounded-full blur-[140px] opacity-60 animate-pulse"></div>
                <div className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] opacity-40"></div>
                {/* Extra richness for Hero */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-black/20 to-deep-black/80"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-6 inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        <span className="text-gold text-sm font-medium tracking-wide uppercase">Innovating the Future</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
                        INFINITY
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-blue to-blue-400"> CROWN</span>
                    </h1>

                    <p className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-6">
                        From a Flicker to
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-blue to-blue-400"> Infinite Possibilities</span>
                    </p>

                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10">
                        We build innovative, reliable, and future-ready technology solutions that transform ideas into impactful realities.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="/contact"
                            className="group relative px-8 py-3.5 bg-royal-blue hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(10,26,255,0.3)] hover:shadow-[0_0_30px_rgba(10,26,255,0.5)] flex items-center"
                        >
                            Contact Us
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/projects"
                            className="px-8 py-3.5 border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-semibold rounded-lg transition-all duration-300"
                        >
                            View Our Work
                        </a>
                    </div>
                </Motion.div>
            </div>

            <Motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 animate-bounce"
            >
                <ChevronDown size={24} />
            </Motion.div>
        </section>
    );
};

export default Hero;
