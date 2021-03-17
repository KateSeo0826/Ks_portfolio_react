import React, { useState, useEffect } from 'react'
import { ContactSection, ContactTitle, ContactContainer, ContactInfo, ContactSubtitleH3, ContactText, FormBox, ContactInputs, FormLabel, FormInput, FormButton, TextArea }
    from './ContactElements'
function Contact() {

    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (window.location.search.includes('success=true')) {
            setSuccess(true);
        }
    }, []);
    return (

        <>
            <ContactSection id='contact'>
                <ContactTitle>Contact</ContactTitle>
                {success && (
                    <p style={{ color: 'yellowgreen' }} >Thanks for your message!</p>
                )}
                <ContactContainer>
                    <ContactInfo>
                        <ContactSubtitleH3>Email</ContactSubtitleH3>
                        <ContactText>dev.kateseo@gmail.com</ContactText>
                    </ContactInfo>
                    <FormBox>
                        <form
                            name='contact'
                            method='post'
                            action='/contact/?success=true'
                            data-netlify='true'
                            onSubmit='submit'>
                            <ContactInputs type='hidden' name='form-name' value='contact'>
                                <input type='hidden' name='form-name' value='contact' />
                                <FormInput
                                    type='text'
                                    name='name'
                                    require placeholder='Name' />
                                <FormInput
                                    id='email'
                                    name='email'
                                    type='email'
                                    require placeholder='Email' />
                            </ContactInputs>
                            <FormLabel htmlFor='for'>Text</FormLabel>
                            <TextArea type='text' name='message' />
                            <FormButton type='submit'>Submit</FormButton>
                        </form>
                    </FormBox>
                </ContactContainer>
            </ContactSection>
        </ >

    )
}

export default Contact;
