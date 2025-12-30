import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Gaming Website - ET Gaming",
        description: "Official ET Gaming website featuring YouTube content showcase, merchandise shop, and community engagement hub.",
        status: "View Details",
    },
    {
        title: "E-commerce",
        description: "Full-featured e-commerce platform with user authentication, product management, and payment integration.",
        status: "View Details",
    },
    {
        title: "Restaurant App",
        description: "Restaurant management platform with reservation system and inventory tracking.",
        status: "View Details"
    },
    {
        title: "LMS Platform",
        description: "Learning management system with course creation, student tracking, and assessment tools.",
        status: "View Details"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-royal-blue font-semibold tracking-wide uppercase mb-2">Our Work</h2>
                        <h3 className="text-4xl font-bold text-white">Featured Projects</h3>
                    </div>
                    <a href="/projects" className="hidden md:flex items-center text-gold hover:text-white transition-colors mt-4 md:mt-0 font-medium group">
                        View All Projects <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-white/10 hover:border-royal-blue/40 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10 opacity-90"></div>

                            {/* Project image area (fills the box) */}
                            <div className="h-64 w-full relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover object-center" />
                                ) : (
                                    <div className="absolute inset-0 bg-gray-800"></div>
                                )}
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center p-6 z-20">
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 mb-0 max-w-md mx-auto line-clamp-2">{project.description}</p>
                                </div>
                            </div>
                        </Motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a href="/projects" className="flex items-center justify-center text-gold hover:text-white transition-colors font-medium">
                        View All Projects <ExternalLink size={16} className="ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
