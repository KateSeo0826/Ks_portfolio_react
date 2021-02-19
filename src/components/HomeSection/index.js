import React from 'react'
//import Video from '../../videos/video.mp4';
import { FaArrowDown } from 'react-icons/fa';
import { SectionHome, HomeContainer, HomeTitleH1, HomeTitleSpan, ArrowDown, HomeScroll, HomeIcon, ImageSection } from './HomeElements';
import img from '../../images/kate2.png';
const HomeSection = () => {

    return (
        <SectionHome id='home' >
            <HomeContainer>
                <HomeTitleH1>De</HomeTitleH1>
                <HomeTitleSpan>REM.</HomeTitleSpan>
                <HomeScroll>
                    <ArrowDown to='about' >  Scroll Down  </ArrowDown>
                </HomeScroll>
                <HomeIcon>
                    < FaArrowDown />
                </HomeIcon>
                <ImageSection src={img} />
            </HomeContainer >
        </SectionHome>
    )


}

export default HomeSection;