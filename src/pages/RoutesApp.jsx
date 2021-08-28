import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES, SpinnerApp } from 'components/common';
import { Home } from './Home';

const Login = lazy(() => import('./Login'));
const Register = lazy(() => import('./Register'));
const ResetPassword = lazy(() => import('./ResetPassword'));
const Terms = lazy(() => import('./Terms'));
const VerifyEmail = lazy(() => import('./VerifyEmail'));
const ResetPasswordSuccess = lazy(() => import('./ResetPasswordSuccess'));
const BasicInformation = lazy(() => import('./BasicInformation'));

export const RoutesApp = () => {
    return (
        <Routes>
            <Route
                path={ROUTES.login}
                element={
                    <Suspense fallback={<SpinnerApp delay={200} global />}>
                        <Login />
                    </Suspense>
                }
            />

            <Route
                path={ROUTES.register}
                element={
                    <Suspense fallback={<SpinnerApp delay={200} global />}>
                        <Register />
                    </Suspense>
                }
            />

            <Route
                path={ROUTES.updateUser}
                element={
                    <Suspense fallback={<SpinnerApp delay={200} global />}>
                        <BasicInformation />
                    </Suspense>
                }
            />

            <Route
                path={ROUTES.resetPassword}
                element={
                    <Suspense fallback={<SpinnerApp delay={200} global />}>
                        <ResetPassword />
                    </Suspense>
                }
            />

            <Route
                path={ROUTES.resetSuccess}
                element={
                    <Suspense fallback={<SpinnerApp delay={200} global />}>
                        <ResetPasswordSuccess />
                    </Suspense>
                }
            />

            <Route
                path={ROUTES.terms}
                element={
                    <Suspense fallback={<SpinnerApp delay={200} global />}>
                        <Terms />
                    </Suspense>
                }
            />

            <Route
                path={ROUTES.verifyEmail}
                element={
                    <Suspense fallback={<SpinnerApp delay={200} global />}>
                        <VerifyEmail />
                    </Suspense>
                }
            />

            <Route path={ROUTES.root} element={<Home />} />
        </Routes>
    );
};
