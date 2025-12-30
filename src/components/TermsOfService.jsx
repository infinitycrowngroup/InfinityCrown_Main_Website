import React, { useEffect } from 'react';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-12 min-h-screen relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-deep-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                        Terms of Service
                    </h1>

                    <div className="space-y-8 text-gray-300 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                                <span className="w-1.5 h-6 bg-gold mr-3 rounded-full"></span>
                                Agreement to Terms
                            </h2>
                            <p>
                                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Infinity Crown
                                ("we," "us" or "our"), concerning your access to and use of the Infinity Crown website as well as any other media form, media channel,
                                mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-3">Intellectual Property Rights</h2>
                            <p>
                                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs,
                                audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein
                                (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-3">User Representations</h2>
                            <p className="mb-2">By using the Site, you represent and warrant that:</p>
                            <ul className="list-disc pl-5 space-y-2 marker:text-royal-blue">
                                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                                <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                                <li>You are not a minor in the jurisdiction in which you reside.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-3">Limitation of Liability</h2>
                            <p>
                                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential,
                                exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Site,
                                even if we have been advised of the possibility of such damages.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-3">Contact Us</h2>
                            <p>
                                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                            </p>
                            <p className="mt-2 text-royal-blue hover:text-white transition-colors cursor-pointer">
                                legal@infinitycrown.com
                            </p>
                        </section>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
                        Last Updated: December 17, 2025
                    </div>
                </div>
            </div>

            {/* Abstract Background Shapes for depth */}
            <div className="absolute top-40 right-20 w-72 h-72 bg-royal-blue/5 rounded-full blur-[90px] -z-10"></div>
            <div className="absolute bottom-40 left-10 w-60 h-60 bg-gold/5 rounded-full blur-[80px] -z-10"></div>
        </div>
    );
};

export default TermsOfService;
