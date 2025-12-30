import React, { useState, useRef, useEffect } from 'react';
import { Mail, MapPin, Phone, Send, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        subject: '',
        message: ''
    });
    const formRef = useRef(null);
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Sanitize inputs to prevent injection attacks
    const sanitize = (str = '') => {
        return String(str)
            .replace(/<[^>]*>?/gm, '') // Remove HTML tags
            .trim()
            .slice(0, 2000); // Limit to 2000 chars
    };

    // Validate email format
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prevent multiple submissions
        if (isSending) return;

        // Sanitize all inputs
        const name = sanitize(formData.from_name);
        const email = sanitize(formData.from_email);
        const subject = sanitize(formData.subject);
        const message = sanitize(formData.message);

        // Validation
        if (!name || !email || !message) {
            setStatus({ type: 'error', message: 'Please fill in all required fields.' });
            return;
        }

        if (!isValidEmail(email)) {
            setStatus({ type: 'error', message: 'Please enter a valid email address.' });
            return;
        }

        // Get environment variables
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceID || !templateID || !publicKey) {
            setStatus({
                type: 'error',
                message: 'Email service is not configured. Please contact the administrator.'
            });
            console.error('Missing EmailJS environment variables');
            return;
        }

        setIsSending(true);
        setStatus({ type: '', message: '' });

        try {
            // Prefer sending explicit template params so we control recipient fields
            const toName = import.meta.env.VITE_EMAILJS_TO_NAME || 'Infinity Crown';
            const toEmail = import.meta.env.VITE_EMAILJS_TO_EMAIL || '';

            const templateParams = {
                from_name: name,
                from_email: email,
                subject,
                message,
                reply_to: email,
                to_name: toName,
            };
            if (toEmail) templateParams.to_email = toEmail;

            // Use emailjs.send with explicit params to avoid template variable mismatch
            await emailjs.send(serviceID, templateID, templateParams, publicKey);

            setStatus({ type: 'success', message: '✓ Message sent successfully! We will reply soon.' });
            // Reset form after successful submission
            setFormData({ from_name: '', from_email: '', subject: '', message: '' });
            if (formRef.current) formRef.current.reset();
        } catch (err) {
            // Better error logging to surface HTTP status and response text from EmailJS
            console.error('EmailJS Error:', err);
            try {
                const statusCode = err.status || (err && err.statusCode) || 'unknown';
                const statusText = err.text || err.message || JSON.stringify(err);
                console.error('EmailJS response:', statusCode, statusText);

                // Specific handling for Gmail API 412 precondition failures
                if (statusCode === 412 || (typeof statusText === 'string' && statusText.includes('Gmail_API'))) {
                    setStatus({
                        type: 'error',
                        message: 'Email service rejected the request (Gmail API scopes). Check EMAILJS setup: enable Gmail API scopes (gmail.send) or use SMTP service. See setup docs.'
                    });
                } else {
                    setStatus({ type: 'error', message: `Failed to send: ${statusText}` });
                }
            } catch {
                setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
            }
        } finally {
            setIsSending(false);
        }
    };

    // Initialize EmailJS public key once on mount (helps avoid some 4xx errors)
    useEffect(() => {
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        if (publicKey && typeof emailjs.init === 'function') {
            try {
                emailjs.init(publicKey);
            } catch (e) {
                console.warn('EmailJS init failed:', e);
            }
        }
    }, []);

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-royal-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    <div>
                        <h2 className="text-gold font-semibold tracking-wide uppercase mb-3 text-sm">Get in Touch</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Create Something <br />Extraordinary.</h3>
                        <p className="text-gray-400 text-lg mb-10 max-w-lg">
                            Whether you have a groundbreaking idea or need to modernize your existing infrastructure, we are here to help.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-white/5 rounded-lg text-royal-blue">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Email Us</h4>
                                    <a href="mailto:hello@infinitycrown.com" className="text-gray-400 hover:text-white transition-colors">infinitycrowngroup@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-white/5 rounded-lg text-royal-blue">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Call Us</h4>
                                    <p className="text-gray-400">+91 9566535909</p>
                                </div>
                            </div>

                        </div>

                        <div className="mt-12">
                            <h4 className="text-white font-medium mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="https://www.linkedin.com/company/infinity-crown-group/" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-royal-blue transition-all duration-300">
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://www.instagram.com/infinity__crown/" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-royal-blue transition-all duration-300">
                                    <Instagram size={20} />
                                </a>
                                <a href="https://x.com/CrownInfin24163" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-royal-blue transition-all duration-300">
                                    <Twitter size={20} />
                                </a>
                                {/* <a href="https://www.facebook.com/" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-royal-blue transition-all duration-300">
                                    <Facebook size={20} />
                                </a> */}
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-black/60 via-royal-blue/20 to-black/60 backdrop-blur-md border border-white/5 p-6 md:p-10 rounded-3xl">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" aria-live="polite" aria-label="Contact form">
                            {/* Status Messages */}
                            {status.message && (
                                <div
                                    className={`p-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                                        status.type === 'success'
                                            ? 'bg-green-900/20 border border-green-500/30 text-green-300'
                                            : 'bg-red-900/20 border border-red-500/30 text-red-300'
                                    }`}
                                    role="alert"
                                >
                                    {status.message}
                                </div>
                            )}

                            {/* Full Name Field */}
                            <div>
                                <label htmlFor="from_name" className="block text-sm font-medium text-gray-400 mb-2">
                                    Full Name <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="from_name"
                                    name="from_name"
                                    value={formData.from_name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                    disabled={isSending}
                                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/50 text-white placeholder-gray-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    aria-required="true"
                                />
                            </div>

                            {/* Email Address Field */}
                            <div>
                                <label htmlFor="from_email" className="block text-sm font-medium text-gray-400 mb-2">
                                    Email Address <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="from_email"
                                    name="from_email"
                                    value={formData.from_email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                    disabled={isSending}
                                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/50 text-white placeholder-gray-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    aria-required="true"
                                />
                            </div>

                            {/* Subject Field */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Project inquiry, partnership, etc."
                                    disabled={isSending}
                                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/50 text-white placeholder-gray-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                    Message <span className="text-red-400">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="Tell us about your project..."
                                    disabled={isSending}
                                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/50 text-white placeholder-gray-600 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                                    aria-required="true"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSending}
                                className={`w-full py-4 bg-gradient-to-r from-royal-blue to-blue-600 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center group ${
                                    isSending
                                        ? 'opacity-70 cursor-wait'
                                        : 'hover:shadow-[0_0_20px_rgba(10,26,255,0.4)] hover:from-royal-blue hover:to-blue-700'
                                }`}
                                aria-disabled={isSending}
                            >
                                {isSending ? (
                                    <>
                                        <svg
                                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v8z"
                                            ></path>
                                        </svg>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
