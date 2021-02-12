import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';


export const FooterSection = styled.section`
  padding: 0rem 0;
  @media screen and (min-width: 768px){
        padding-top: 4rem;
    }

`
export const FooterContainer = styled.div`
    justify-items: center;
    row-gap: 2rem;
    background-color: var(--dark-color);
    display: grid;
    grid-template-columns: 100%;
    grid-column-gap: 2rem;

     @media screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
    }

    @media screen and (min-width: 1024px){
        margin-left: auto;
        margin-right: auto;
    }
`
export const FooterWrap = styled.div`
    row-gap: 2rem;
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
       @media screen and (min-width: 768px) {
        
    }
`
export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    justify-content: center;
    }

`
export const FooterDataWrap = styled.div`
`
export const FooterTitle = styled.h2`
    margin: 0;
    font-size: var(--h2-font-size);
    color: var(--white-color);
    margin-bottom: var(--mb-1);
    margin-left: -182px;
`
export const FooterText = styled.p`
  margin: 0;
`

export const FooterLinkItems = styled.ul`
    list-style: none;
`
export const FooterLinkTitle = styled.h2`
    font-size: var(--normal-font-size);
    color: var(--first-color);
    margin-left: -182px;
`
export const SocialTitle = styled.h2`
    font-size: var(--normal-font-size);
    color: var(--first-color);
    margin-left: -75px; 
`
export const FooterLink = styled(LinkS)`
    display: flex;
    text-decoration: none;
    margin-bottom: 0.2rem;
    margin-left: -145px;
    font-size: 14px;
    padding: .25rem 0;
    text-decoration: none;
    color: var(--text-color);
    &:hover {
        color: var(--first-color);
    }

`

export const WebsiteRights = styled.small`
    margin-bottom: 0px;
      margin-left: -155px;
`


export const SocialIcons = styled.div`
    font-size: 1.4rem;
    margin: 0 var(--mb-1);
    text-align: center;
    &::hover {
        color: var(--first-color);
    }
`


export const SocialIconLink = styled.a`
    width: 40px;
    height: 40px; 
    border: 2px solid var(--first-color);
    border-radius: 50px;
    display: inline-block;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    font-size: 25px;
    transition: all 0.5s linear;
    color: var(--text-color);
    cursor: pointer;
         &:hover{
        background: var(--first-color);
        border: 2px solid transparent;
    }
`