import React from 'react';
import {
    FooterSection,
    FooterContainer, FooterWrap, FooterLinkItems, FooterLinkTitle,
    FooterLink, WebsiteRights, SocialTitle, SocialIcons, SocialIconLink, FooterDataWrap, FooterTitle,
} from './FooterElements.js';
import { animateScroll as scroll } from 'react-scroll';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <FooterSection >
                <FooterContainer>
                    <FooterWrap>
                        <FooterDataWrap>
                            <FooterTitle to='/' onClick={toggleHome} >Kate Seo</FooterTitle>
                        </FooterDataWrap>
                        <FooterDataWrap>
                            <FooterLinkTitle> EXPLORE</FooterLinkTitle>
                            <FooterLinkItems>
                                <FooterLink to='home'>Home</FooterLink>
                                <FooterLink to='about'>About</FooterLink>
                                <FooterLink to='skills'>Skills</FooterLink>
                                <FooterLink to='portfolio'>Portfolio</FooterLink>
                                <FooterLink to='contact'>Contact</FooterLink>
                            </FooterLinkItems>
                        </FooterDataWrap>
                        <FooterDataWrap>
                            <SocialTitle>FOLLOW</SocialTitle>
                            <SocialIcons>
                                <SocialIconLink href='https://github.com/KateSeo0826' target='_blank' aria-label='Facebook'>
                                    <FaGithub />
                                </SocialIconLink>
                                <SocialIconLink href='https://www.instagram.com/violetds3' target='_blank' aria-label='Instagram'>
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href='http://www.linkedin.com/in/devkateseo' target='_blank' aria-label='Linkedin'>
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </FooterDataWrap>
                        <WebsiteRights>Kate @ {new Date().getFullYear()} All right reserved.</WebsiteRights>
                    </FooterWrap>
                </FooterContainer >
            </FooterSection>
        </>
    )
}

export default Footer
