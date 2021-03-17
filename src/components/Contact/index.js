import React from 'react'
import { ContactSection, ContactTitle, ContactContainer, ContactInfo, ContactSubtitleH3, ContactText, FormBox, ContactInputs, FormLabel, FormInput, FormButton, TextArea }
    from './ContactElements'
function Contact() {
    return (
        <>
            <ContactSection id='contact'>
                <ContactTitle>Contact</ContactTitle>
                <ContactContainer>
                    <ContactInfo>
                        <ContactSubtitleH3>Email</ContactSubtitleH3>
                        <ContactText>dev.kateseo@gmail.com</ContactText>
                    </ContactInfo>
                    <FormBox>
                        <form
                            name='contact'
                            method='post'
                            data-netlify='ture'
                            onSubmit='submit'>
                            <ContactInputs type='hidden' name='form-name' value='contact'>
                                <FormInput
                                    type='text'
                                    name='form-name'
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
                    </FormBox>
                </ContactContainer>
            </ContactSection>
        </>
    )
}

export default Contact;
