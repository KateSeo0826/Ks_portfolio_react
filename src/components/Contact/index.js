import React from 'react'
import { ContactSection, ContactTitle, ContactContainer, ContactInfo, ContactSubtitleH3, ContactText, Form, ContactInputs, FormLabel, FormInput, FormButton, TextArea }
    from './ContactElements'
const Contact = () => {
    return (
        <>
            <ContactSection id='contact'>
                <ContactTitle>Contact</ContactTitle>
                <ContactContainer>
                    <ContactInfo>
                        <ContactSubtitleH3>Email</ContactSubtitleH3>
                        <ContactText>dev.kateseo@gmail.com</ContactText>
                    </ContactInfo>

                    <form action='#'
                        name='contact'
                        method='post'
                        data-netlify='ture'
                        onSubmit='submit'>
                        <ContactInputs>
                            <FormInput
                                type='text'
                                name='form-name'
                                value='contact'
                                require placeholder='Name'
                                onSubmit='submit' />
                            <FormInput
                                id='email'
                                name='email'
                                type='email'
                                require placeholder='Email' />
                        </ContactInputs>
                        <FormLabel htmlFor='for'>Text</FormLabel>
                        <TextArea type='text' />
                        <FormButton type='submit'>Submit</FormButton>
                    </form>
                </ContactContainer>
            </ContactSection>
        </>
    )
}

export default Contact;
