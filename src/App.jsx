import React from 'react';
import { GlobalStyle } from 'components';
import { AuthProvider } from 'hooks';
import { RoutesApp } from 'pages';
import './fontawesome';

export function App() {
    return (
        <AuthProvider>
            <GlobalStyle />
            <RoutesApp />
        </AuthProvider>
    );
}
