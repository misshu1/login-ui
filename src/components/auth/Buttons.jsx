import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from './style';

export function PrimaryBtn({ background, margin, children, ...props }) {
    return (
        <Button background={background} margin={margin} {...props}>
            {children}
        </Button>
    );
}

export function LinkedinBtn() {
    return (
        <Button background='#0073B1'>
            <FontAwesomeIcon
                icon={['fab', 'linkedin']}
                size='2x'
                style={{ marginRight: '8px' }}
            />
            login with Linkedin
        </Button>
    );
}
