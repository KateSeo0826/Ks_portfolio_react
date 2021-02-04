import React from 'react'
import { FiHash } from "react-icons/fi";
import { SectionSkills, SectionTitle, SectionContainer, SectionSubtitle, SectionIconsWrap, Icons } from './SkillsElements'
import Slide from 'react-reveal/Slide';
const SkillSection = () => {
    return (
        <>
            <Slide right>
                <SectionSkills id='skills'>
                    <SectionTitle>Skills</SectionTitle>
                    <SectionContainer>
                        <SectionSubtitle>Development</SectionSubtitle>
                        <SectionIconsWrap>
                            <Icons ><FiHash />Html&Css </Icons>
                            <Icons ><FiHash />Sass</Icons>
                            <Icons ><FiHash />JavaScript</Icons>
                            <Icons ><FiHash />React/Redux</Icons>
                            <Icons ><FiHash />Bootstrap</Icons>
                        </SectionIconsWrap>
                        <SectionIconsWrap>
                            <Icons ><FiHash />Node.js</Icons>
                            <Icons ><FiHash />MongoDB</Icons>
                            <Icons ><FiHash />MySQL</Icons>
                            <Icons ><FiHash />Github</Icons>
                        </SectionIconsWrap>
                    </SectionContainer>
                </SectionSkills>
            </Slide>
        </>
    )
}

export default SkillSection;
