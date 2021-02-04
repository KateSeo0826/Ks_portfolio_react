import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import SkillSection from '../components/SkillSection'
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MyWorks from '../components/MyWorks/MyWorks';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HomeSection />
            <AboutSection />
            <SkillSection />
            <MyWorks />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;
