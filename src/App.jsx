import React from 'react';
import { GlobalStyle } from 'components';
import { AuthProvider } from 'hooks';

export function App() {
    return (
        <AuthProvider>
            <GlobalStyle />
            stuff
        </AuthProvider>
    );
}
