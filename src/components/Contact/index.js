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

                    <Form action='#'>
                        <ContactInputs>
                            <FormInput type='name' require placeholder='Name' />
                            <FormInput type='email' require placeholder='Email' />
                        </ContactInputs>
                        <FormLabel htmlFor='for'>Text</FormLabel>
                        <TextArea type='text' />
                        <FormButton type='submit'>Submit</FormButton>
                    </Form>
                </ContactContainer>
            </ContactSection>
        </>
    )
}

export default Contact;
