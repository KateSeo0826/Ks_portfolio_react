import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { animateScroll as scroll } from 'react-scroll';
import { NavbarContainer, NavLogo, Nav, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';
const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>Kate Seo</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='home'
                                    smooth={true}
                                    duration={500}
                                    spy={true} exact='true'
                                    offset={-80}
                                    activeClass='active'
                                >Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='about'
                                    smooth={true}
                                    duration={500}
                                    spy={true} exact='true'
                                    offset={-80}
                                    activeClass='active'
                                >About</NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='skills'
                                    smooth={true}
                                    duration={500}
                                    spy={true} exact='true'
                                    offset={-80}
                                    activeClass='active'
                                >Skills</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='portfolio'
                                    smooth={true}
                                    duration={500}
                                    spy={true} exact='true'
                                    offset={-80}
                                    activeClass='active'
                                >Portfolio</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='contact'
                                    smooth={true}
                                    duration={500}
                                    spy={true} exact='true'
                                    offset={-80}
                                    activeClass='active'
                                >Contact</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
