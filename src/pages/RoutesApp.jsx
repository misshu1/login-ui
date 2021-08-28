import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES, SpinnerApp } from 'components/common';
import { Home } from './Home';

const Login = lazy(() => import('./Login'));

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

            <Route path={ROUTES.root} element={<Home />} />
        </Routes>
    );
};
