import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { ROUTES } from 'components/common';
import { useAuth } from 'hooks';
import { Container, SubTitle, Title } from 'components/auth/style';
import { Logo } from 'assets/images/Logo';
import { PrimaryBtn } from 'components/auth/Buttons';

export function Home() {
    const { isUserLoggedIn, user, logout } = useAuth();
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        company: '',
        companyRole: ''
    });

    useEffect(() => {
        if (isUserLoggedIn()) {
            const info = String(user?.displayName).split('|');
            setUserInfo({
                firstName: info[0],
                lastName: info[1],
                company: info[2],
                companyRole: info[3]
            });
        }
    }, [isUserLoggedIn, user]);

    if (!isUserLoggedIn()) {
        return <Navigate to={ROUTES.login} />;
    }

    return (
        <Container>
            <Logo />
            <Title>Home</Title>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Company</th>
                        <th>Company Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{userInfo.firstName}</td>
                        <td>{userInfo.lastName}</td>
                        <td>{userInfo.company}</td>
                        <td>{userInfo.companyRole}</td>
                    </tr>
                </tbody>
            </table>
            <PrimaryBtn margin={{ top: 48 }} onClick={logout}>
                Logout
            </PrimaryBtn>
        </Container>
    );
}
