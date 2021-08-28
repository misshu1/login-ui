import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Container, Title, LinkCTA } from './style';
import { Logo } from 'assets/images/Logo';
import { PrimaryBtn } from './Buttons';
import { ROUTES } from 'components/common';

export function PasswordResetSuccessApp() {
    const { state } = useLocation();
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate(ROUTES.login);
    };

    return (
        <Container>
            <Logo />
            <Title margin={{ bottom: 8 }}>Password sent</Title>

            <p
                style={{
                    fontSize: '14px',
                    lineHeight: '19px',
                    textAlign: 'center'
                }}
            >
                An email has been sent to{' '}
                <span style={{ fontWeight: '900' }}>{state?.email}</span>. If
                this email adress is registered to Meteowrite.io, you’ll recieve
                instructions on how to set a new password.
            </p>
            <PrimaryBtn margin={{ top: 32, bottom: 32 }} onClick={goToLogin}>
                Enter new password
            </PrimaryBtn>
            <p>
                <LinkCTA to={ROUTES.resetPassword}>
                    Didn’t get an email?
                </LinkCTA>
            </p>
        </Container>
    );
}
