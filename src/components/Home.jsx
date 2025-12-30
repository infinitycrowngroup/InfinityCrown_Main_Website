import React, { useEffect } from 'react';
import Hero from './Hero';
import WhyChooseUs from './WhyChooseUs';
import Divisions from './Divisions';
import Testimonials from './Testimonials';
import Contact from './Contact';
import WhoWeAre from './WhoWeAre';
import Projects from './Projects';

const Home = () => {
    useEffect(() => {
        document.title = "Home | Infinity Crown";
    }, []);

    return (
        <>
            <Hero />
            <WhoWeAre />
            <Divisions preview={true} />
            <Projects />
            <WhyChooseUs />
            <Testimonials preview={true} />
            <Contact />
        </>
    );
};

export default Home;
