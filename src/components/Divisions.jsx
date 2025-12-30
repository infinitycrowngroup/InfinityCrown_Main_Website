import React, { useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { Globe, Cpu, Activity, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const divisions = [
    {
        name: "Infinity Crown Web",
        description: "Modern web applications, scalable systems, dashboards, and digital platforms.",
        icon: <Globe size={32} />,
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        name: "Infinity Crown AI",
        description: "AI-powered solutions, automation, intelligent systems, and data-driven products.",
        icon: <Cpu size={32} />,
        color: "from-purple-500/20 to-pink-500/20"
    },
    {
        name: "Infinity Crown Healthcare",
        description: "Healthcare technology solutions, medical AI, smart diagnostics, and health-focused platforms.",
        icon: <Activity size={32} />,
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        name: "Infinity Crown Learn",
        description: "Learning platforms, skill development, technology education, and future-ready learning solutions.",
        icon: <GraduationCap size={32} />,
        color: "from-orange-500/20 to-yellow-500/20"
    }
];

const Divisions = ({ preview = false }) => {
    // Dynamically update title if not in preview mode
    useEffect(() => {
        if (!preview) {
            document.title = "Our Divisions | Infinity Crown";
        }
    }, [preview]);

    // If preview, maybe show only 2? For now showing all as they are specifically 4.
    const displayDivisions = preview ? divisions.slice(0, 4) : divisions;

    return (
        <section id="divisions" className={`relative ${preview ? 'py-24' : 'pt-32 pb-24'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-gold font-semibold tracking-wide uppercase mb-3 text-sm">Our Ecosystem</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white">Our Divisions</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                    {displayDivisions.map((division, index) => (
                        <Motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden p-8 bg-white/5 border border-white/5 rounded-2xl hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Hover Glow Effect */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${division.color} pointer-events-none`}></div>

                            <div className="relative z-10 flex items-start space-x-6">
                                <div className="p-4 bg-white/5 rounded-xl text-royal-blue group-hover:text-white group-hover:bg-royal-blue transition-colors duration-300">
                                    {division.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                                        {division.name}
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                                        {division.description}
                                    </p>
                                </div>
                            </div>

                            {/* Geometric Accent */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                </Motion.div>
                    ))}
                </div>

                {preview && (
                    <div className="text-center">
                        <Link to="/services" className="inline-flex items-center text-gold hover:text-white transition-colors font-semibold">
                            Explore All Services <ArrowRight className="ml-2" size={16} />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Divisions;
