import React from 'react';

import { Container, Title, LinkCTA } from './style';
import { Logo } from 'assets/images/Logo';
import { ROUTES } from 'components/common';

export function TermsApp() {
    return (
        <Container>
            <Logo />
            <Title>Terms and Conitions</Title>

            <p>
                Nothing here
                <LinkCTA to={ROUTES.register}> Go Back</LinkCTA>
            </p>
        </Container>
    );
}
