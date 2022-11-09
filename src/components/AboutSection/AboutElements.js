import styled from 'styled-components';

export const SectionAbout = styled.section`
 padding: 3rem 0;
@media screen and (min-width: 768px){
        padding-top: 4rem;
    }

`
export const AboutTitleH2 = styled.h2`
    position: relative;
    font-size: var(--h2-font-size);
    color: var(--dark-color);
    margin: var(--mb-4), 0;
    padding-top: var(--mb-2);
    text-align: center;
    
    &:after {
        position: absolute;
        content: "";
        width: 32px;
        height: .18rem;
        left: 0;
        right: 0;
        margin: auto;
        top: 3.8rem;
        background-color: var(--first-color);
    }
     @media screen and (min-width: 768px){
      margin-bottom: 3rem;
      &:after{
        width: 64px;
        top: 4rem;
      }
  }
`
export const AboutContainer = styled.div`
   justify-items: center;
   margin-top: 2rem;
   row-gap: 2rem;
   text-align: center;

   //bg-grid
    max-width: 1024px;
    display: grid;
    grid-template-columns: 100%;
    grid-column-gap: 2rem;
    width: calc(100% - 2rem);
    margin-left: var(--mb-2);
    margin-right: var(--mb-2);

    @media screen and (max-width: 768px) {
        margin-top: 2rem;
        align-items: center;
        text-align: initial;
    }

    @media screen and (min-width: 1024px){
        margin-left: auto;
        margin-right: auto;
    }
`

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 10px;

`
export const Heading = styled.h3`
    display: block;
    margin-bottom: var(--mb-4);
`

export const Subtitle = styled.h2`
   font-size: var(--h2-font-size);
   color: var(--first-color);
   margin-bottom: var(--mb-1);
`
export const AboutText = styled.p`
     margin-bottom: var(--mb-4);

      @media screen and (max-width: 768px) {
        font-size: var(--small-font-size); 
    }
   `

export const ImgWrap = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    width: 120px;
    height: 120px;
    background-color: var(--first-color);
    border-radius: 50%;
    overflow: hidden;
     @media screen and (max-width: 768px) {
        width: 200px;
        height: 200px;
    }
`
export const Img = styled.img`
    width: 100px;
    height: auto;
    display: block;
 @media screen and (max-width: 768px) {
    width: 165px;
    }
`

export const SocialIcons = styled.div`
    font-size: 1.4rem;
    margin: 0 var(--mb-1);
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
        background:  var(--first-color);
        border: 2px solid transparent;
    }
     @media screen and (max-width: 768px) {
        width: 30px;
        height: 30px; 
        display: inline-flex;
        font-size: 20px;
    }
`
export const ResumeWrap = styled.a`
    text-decoration: none;
    color: var(--text-color);
    font-size: var(--small-font-size);
`
export const Button = styled.button`
   border: 2px solid var(--first-color);
   font-size: var(--small-font-size);
   background:none;
   text-transform: uppercase;   
   padding: .75rem 1.3rem;
   min-width: 150px;
   transition: color .4s linear;
   position: relative;
   color: var(--text-color);
   border-radius: .5rem;
    &:hover{
        color:var(--first-color);
    }
    &::before{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #bdccff;
        z-index: -1;
        transition: transform 0.5s;
        transform-origin: 0 0;
        transition-timing-function: cubic-bezier(0.5,1.6,0.4,0.7);   
        transform:scaleX(0);
    }
    &:hover::before{
        transform:scaleX(1);  
    }

    @media screen and (max-width: 768px) {
    }
`