import React, { useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { Quote, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Keep original testimonials array for reference but display a single, updated commitment card
const _testimonials = [
    {
        // legacy entries (not displayed)
        quote: "Infinity Crown transformed our legacy systems into a state-of-the-art digital platform efficiently.",
        name: "Alex Morgan",
        role: "CTO, FinTech Sol"
    },
    {
        quote: "Their strategic approach to AI integration helped us automate 40% of our workflow.",
        name: "Sarah Chen",
        role: "Director of Ops, RetailAI"
    },
    {
        quote: "A true partner in innovation. The team's dedication to quality is unmatched.",
        name: "James Wilson",
        role: "Founder, HealthTech Inc"
    }
];

const Testimonials = ({ preview = false }) => {
    // Dynamically update title if not in preview mode
    useEffect(() => {
        if (!preview) {
            document.title = "Our Commitment to Clients | Infinity Crown";
        }
    }, [preview]);

    // Always display a single commitment card (preserve visual design, only update content)
    const displayTestimonials = [
        {
            title: 'Built on Trust, Quality, and Vision',
            quote:
                `Infinity Crown is at the beginning of its journey.
We are working with early partners to deliver reliable, high-quality, and future-ready solutions.
Every project we take is treated as a long-term partnership — and our clients’ success will become our strongest testimonial.`
        }
    ];

    return (
        <section id="testimonials" className={`relative ${preview ? 'py-24' : 'pt-32 pb-24'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-gold font-semibold tracking-wide uppercase mb-3 text-sm">Our Commitment to Clients</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white">Trusted by Visionaries</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
                    {displayTestimonials.map((item, index) => (
                        <Motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group p-8 bg-white/5 border border-white/5 rounded-2xl relative hover:border-royal-blue/30 transition-all duration-300 hover:-translate-y-1"
                        >
                            <Quote className="text-gold mb-4 opacity-80" size={32} />

                            <h4 className="text-white font-bold text-xl mb-4">{item.title}</h4>

                            <p className="text-gray-300 mb-8 not-italic leading-relaxed relative z-10 whitespace-pre-line">
                                {item.quote}
                            </p>

                            <div className="flex items-center mt-auto">
                                {/* client/avatar intentionally removed per request */}
                                <div />
                            </div>

                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-royal-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                        </Motion.div>
                    ))}
                </div>

                {preview && (
                    <div className="text-center">
                        <Link to="/testimonials" className="inline-flex items-center text-gold hover:text-white transition-colors font-semibold">
                            Read More Reviews <ArrowRight className="ml-2" size={16} />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Testimonials;
