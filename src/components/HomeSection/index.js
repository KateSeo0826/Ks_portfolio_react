import React from 'react'
import { SectionHome, HomeContainer, HomeTitleH1, HomeTitleSpan, ArrowDown, HomeScroll, HomeIcon } from './HomeElements';
import { FaArrowDown } from 'react-icons/fa';
// import img from '../../images/kate2.png';
const HomeSection = () => {
    return (
        <SectionHome id='home' >
            <HomeContainer>
                <HomeTitleH1>Dr</HomeTitleH1>
                <HomeTitleSpan>EAM.</HomeTitleSpan>
                <HomeScroll>
                    <ArrowDown to='about' >Scroll Down</ArrowDown>
                </HomeScroll>
                <HomeIcon>
                    < FaArrowDown />
                </HomeIcon>
                {/* <ImageSection src={img} /> */}
            </HomeContainer >
        </SectionHome>
    )
}

export default HomeSection