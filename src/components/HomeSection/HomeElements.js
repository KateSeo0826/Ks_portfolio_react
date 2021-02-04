import styled from 'styled-components';
import { Link } from 'react-scroll';



export const SectionHome = styled.section`
    padding: 3rem 0;
    position: relative;
    background-color: var(--first-color);
    overflow: hidden;
    @media screen and (max-width: 768px) {
        padding-top: 4rem;
    }
`
export const HomeContainer = styled.div`
    height: calc(100vh - var(--header-height));
    row-gap: 5rem;
    max-width: 1024px;
    display: grid;
    grid-template-columns: 100%;
    grid-column-gap: 2rem;
    width: calc(100% - 2rem);
    margin-left: var(--mb-2);
    margin-right: var(--mb-2);

      @media screen and (max-width: 768px) {
        height: 70vh;
        grid-template-rows: 1.7fr 1fr;
        row-gap: 0;
    }
    @media screen and (min-width: 1024px){
        margin-left: auto;
        margin-right: auto;
    }
`

export const HomeRow = styled.div`
    display: grid;
    align-items: center;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: 'col1 col2';
    @media screen and (max-width: 768px) {
        grid-template-areas: 'col2 col2';
    }
`
export const ImageSection = styled.img`
    position: absolute;
    right: 100px;
    bottom: 0;
    width: 666px;
    max-width: 100%;
    height: auto;
    display: block;

      @media screen and (max-width: 768px) {
        width: 524px;
        left: 15%;
    }
`


export const HomeTitleH1 = styled.h1`
    margin-bottom: -50px;
    margin-left: var(--mb-3);
    align-self: flex-end;
    font-size: var(--big-font-size);
    color: var(--white-color);
    line-height: .2;
        @media screen and (max-width: 768px) {
            margin-bottom: 0px;
    }
`
export const HomeTitleSpan = styled.span`
    margin-left: var(--mb-3);
    text-shadow: 0 20px 25px rgba(0,0,0,.5);  
    align-self: flex-end;
    font-size: var(--big-font-size);
    color: var(--white-color);
`

export const HomeScroll = styled.div`
    margin-left: var(--mb-3);
    align-self: flex-end;
        margin-bottom: -70px; 
     @media screen and (max-width: 768px) {
        margin-bottom: var(--mb-3); 
        margin-top: 0px;
    }
`

export const HomeIcon = styled.div`
    margin-left: var(--mb-3);
    writing-mode: vertical-lr;
    color: var(--white-color);
`

export const ArrowDown = styled(Link)`
    transform: rotate(-180deg);
    writing-mode: vertical-lr;
    color: var(--white-color);
`
