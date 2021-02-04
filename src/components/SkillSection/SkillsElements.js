import styled from 'styled-components';

export const SectionSkills = styled.section`
  margin-top: var(--mb-3);
  padding-bottom: var(--mb-5);
  @media screen and (min-width: 768px){
    padding-top: 4rem;
  }
  `

export const SectionTitle = styled.h2`
    position: relative;
    font-size: var(--h2-font-size);
    color: var(--dark-color);
    margin: var(--mb-4), 0;
    padding-top: var(--mb-2);
    text-align: center;
    &::after {
        position: absolute;
        content: "";
        width: 32px;
        height: .18rem;
        left: 0;
        right: 0;
        margin: auto;
        top: 3rem;
        background-color: var(--first-color);
    }
    @media screen and (min-width: 768px){
      margin-bottom: 3rem;
      &::after{
        width: 64px;
        top: 4rem;
      }
  }
`

export const SectionContainer = styled.div`
    grid-template-columns: 100%;
    grid-column-gap: 2rem;
    width: calc(100% - 2rem);
    margin-left: var(--mb-4);
    margin-right: var(--mb-2);
    justify-items: center;
    row-gap: 2rem;
  @media screen and (min-width: 768px){
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  @media screen and (min-width: 1024px){
        margin-left: auto;
        margin-right: auto;
  }
`

export const SectionSubtitle = styled.h3`
color: var(--first-color);
    margin-top: var(--mb-3);
    margin-bottom: var(--mb-4);
    text-align: center;
`

export const SectionIconsWrap = styled.div`
    display: flex;
    justify-content: center;
    font-size: var(--small-font-size);
    margin-right: var(--mb-4);
    margin-bottom: var(--mb-3);
    padding: .25rem .5rem;
    border-radius: .25rem;
  &::hover{
    color: var(--white-color);
  }
`
export const Icons = styled.li`
     font-size: 1rem;
     list-style: none;
     float: left;
     margin: 5px 12px;
     box-shadow: 0 5px 5px rgba(0,0,0,0.1);
     border-radius: 10px;
     padding:0 15px;
     font-weight: 300;
     &:hover{
     transform: translateY(-3px);
     }
     @media screen and (max-width: 768px){
        font-size: .6rem;
     }
`
