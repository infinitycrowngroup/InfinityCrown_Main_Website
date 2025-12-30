import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-12 min-h-screen relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-deep-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                        Privacy Policy
                    </h1>

                    <div className="space-y-8 text-gray-300 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                                <span className="w-1.5 h-6 bg-gold mr-3 rounded-full"></span>
                                Introduction
                            </h2>
                            <p>
                                At Infinity Crown ("we", "our", or "us"), we are committed to protecting your privacy and personal information.
                                This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website
                                and use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-3">Information We Collect</h2>
                            <p className="mb-2">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                            <ul className="list-disc pl-5 space-y-2 marker:text-royal-blue">
                                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
                                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-3">Use of Your Information</h2>
                            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-2 marker:text-royal-blue">
                                <li>Create and manage your account.</li>
                                <li>Email you regarding your account or order.</li>
                                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                                <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
                                <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-3">Security of Your Information</h2>
                            <p>
                                We use administrative, technical, and physical security measures to help protect your personal information.
                                While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts,
                                no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-3">Contact Us</h2>
                            <p>
                                If you have questions or comments about this Privacy Policy, please contact us at:
                            </p>
                            <p className="mt-2 text-royal-blue hover:text-white transition-colors cursor-pointer">
                                privacy@infinitycrown.com
                            </p>
                        </section>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
                        Last Updated: December 17, 2025
                    </div>
                </div>
            </div>

            {/* Abstract Background Shapes for depth */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-royal-blue/10 rounded-full blur-[80px] -z-10"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-gold/5 rounded-full blur-[100px] -z-10"></div>
        </div>
    );
};

export default PrivacyPolicy;
