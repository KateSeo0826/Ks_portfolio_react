import styled from 'styled-components';

export const ContactSection = styled.section`
    padding: 3rem 0;
    @media screen and (min-width: 768px){
        padding-top: 4rem;
        padding-bottom: 3rem;
    }
      @media screen and (max-width: 768px){
        padding-bottom: 6rem;
    }
`
export const ContactTitle = styled.h2`
    position: relative;
    font-size: var(--h2-font-size);
    margin: var(--mb-4) 0;
    text-align: center;
    color: var(--dark-color);
    &::after{
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
            top: 3rem;
        }
    }
    
`
export const ContactContainer = styled.div`
    justify-items: center;
    row-gap: 2rem;
    max-width: 1024px;
    display: grid;
    grid-template-columns: 100%;
    grid-column-gap: 2rem;
    width: calc(100% - 2rem);
    margin-left: var(--mb-2);
    margin-right: var(--mb-2);

     @media screen and (min-width: 768px){
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
    }
    @media screen and (min-width: 1024px){
        margin-left: auto;
        margin-right: auto;
    }
`
export const ContactSubtitleH3 = styled.h3`
    font-size: var(--normal-font-size);
    color: var(--first-color);
    @media screen and (min-width: 768px){
        justify-items: flex-start;
    }
`
export const ContactText = styled.span`
    display: inline-block;
    margin-bottom: var(--mb-2);
`
export const ContactInfo = styled.div`
    justify-self: space-evenly;
    margin-left: -180px;

   
`
export const FormBox = styled.form`

  @media screen and (min-width: 768px){
        width: 380px;
    }
`
export const ContactInputs = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;

`

export const FormLabel = styled.h3`
    font-size: var(--normal-font-size);
    color: var(--first-color);
`
export const FormInput = styled.input`
    width: 100%;
    padding: .8rem;
    outline: none;
    border: 1.5px solid var(--dark-color);
    font-size: var(--normal-font-size);
    margin-bottom: var(--mb-4);
    border-radius: .5rem;

`
export const FormButton = styled.button`
    display: block;
    background-color: var(--first-color);
    color: var(--white-color);
    padding: .75rem 2.5rem;
    margin-left: auto;
    border-radius: .5rem;
    border: none;
    outline: none;
    font-size: var(--normal-font-size);
    cursor: pointer;
`
export const TextArea = styled.textarea`
    width: 100%;
    padding: .8rem;
    outline: none;
    border: 1.5px solid var(--dark-color);
    font-size: var(--normal-font-size);
    margin-bottom: var(--mb-4);
    border-radius: .5rem;
    height: 60%;

`