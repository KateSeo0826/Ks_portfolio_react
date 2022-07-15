import React from 'react';
import { AboutTitleH2, SectionAbout, AboutContainer, ResumeWrap, Button, AboutWrapper, TextWrapper, Subtitle, AboutText, Heading, ImgWrap, Img, SocialIcons, SocialIconLink } from './AboutElements';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import Slide from 'react-reveal/Slide';
import Typical from 'react-typical';
import resume from '../../docs/Resume_DongSeon(Kate) Seo.pdf';
const AboutSection = () => {

    const [state] = React.useState({
        id: 'about',
        title: 'About',
        topLine: 'I am Kate Seo',
        //headline: 'Web Developer',
        description: 'I am a widely skilled and creative web developer. I am particularly passionate about web development and technology. I have a growth mindset and love to learn. I persistently put in the time and effort to improve myself. I want to become the best developer I can be.',
        img: require('../../images/kate2.png').default,
        text: ['Hi!', "It's me Kate.", 'I am '],
        typical: [
            ' Web developer. 🖥',
            4000,
            ' Mobile Developer. ',
            4000,
        ],
    })
    return (
        <>
            <Slide left>
                <SectionAbout id={state.id}>
                    <AboutTitleH2>{state.title}</AboutTitleH2>
                    <AboutContainer >
                        <ImgWrap>
                            <Img src={state.img} />
                        </ImgWrap>
                        <AboutWrapper>
                            <TextWrapper>
                                <Subtitle> {state.text[0]} {' '} {state.text[1]} </Subtitle>
                                <Heading > {state.text[2]} {' '}
                                    <Typical
                                        steps={state.typical}
                                        loop={Infinity}
                                    />
                                </Heading>
                                <AboutText>{state.description}</AboutText>
                            </TextWrapper>
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
                        </AboutWrapper>
                        {/* <BtnWrap >
                            <Button to='portfolio'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                            >My Portfolio</Button>
                        </BtnWrap> */}
                        <ResumeWrap href={resume} target="_blank" rel="noopener noreferrer" >
                            <Button>Download CV</Button>
                        </ResumeWrap>
                    </AboutContainer>
                </SectionAbout >
            </Slide>
        </>
    )
}

export default AboutSection;