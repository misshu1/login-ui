import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container, Title, SubTitle, LinkCTA } from './style';
import { Logo } from 'assets/images/Logo';
import { PrimaryBtn, LinkedinBtn } from './Buttons';
import { TextInput } from './TextInput';

export function LoginApp() {
    return (
        <Container>
            <Logo />
            <Title>Login</Title>
            <LinkedinBtn />
            <SubTitle>or</SubTitle>
            <TextInput
                type='email'
                label='Email'
                placeholder='john.doe@gmail.com'
                width='100%'
                margin={{ top: 16, bottom: 16 }}
            />
            <TextInput
                type='password'
                label='password'
                placeholder='Enter Password'
                width='100%'
                margin={{ top: 16, bottom: 16 }}
            />
            <p>
                Remember me
                <LinkCTA> Forgot password?</LinkCTA>
            </p>
            <PrimaryBtn margin={{ top: 22, bottom: 32 }}>Login</PrimaryBtn>
            <p>
                New to meteowrite?
                <LinkCTA> Register</LinkCTA>
            </p>
        </Container>
    );
}
