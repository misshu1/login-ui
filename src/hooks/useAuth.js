import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    confirmPasswordReset,
    updateProfile
} from 'firebase/auth';

import { ROUTES } from 'components/common';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const AuthContext = createContext();
export function AuthProvider({ children }) {
    const auth = useProvideAuth();

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useProvideAuth() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const isUserLoggedIn = () => {
        return !!user;
    };

    const login = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password)
            .then((response) => {
                setUser(response.user);
                return response.user;
            })
            .catch((err) => console.log('Error', err.message));
    };

    const register = async (email, password) => {
        const newUser = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        ).catch((err) => console.log('Error', err.message));

        setUser(newUser.user);
        return newUser.user;
    };

    const updateUser = async (firstName, lastName, company, companyRole) => {
        await updateProfile(auth.currentUser, {
            displayName: `${firstName} | ${lastName} | ${company} | ${companyRole}`
        }).catch((err) => console.log('Error', err.message));

        return true;
    };

    const logout = async () => {
        setUser(null);

        return await signOut(auth)
            .then(() => {
                if (location.pathname !== ROUTES.root) {
                    navigate(ROUTES.root);
                }
            })
            .catch((err) => console.log('Error', err.message));
    };

    const sendPasswordReset = async (email) => {
        let success = false;
        await sendPasswordResetEmail(auth, email)
            .then(() => {
                success = true;
            })
            .catch((err) => {
                success = false;
                console.log('Error', err.message);
            });

        return success;
    };

    const confirmResetPassword = async (code, password) => {
        await confirmPasswordReset(auth, code, password).catch((err) =>
            console.log('Error', err.message)
        );
        return true;
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return {
        user,
        login,
        register,
        logout,
        sendPasswordReset,
        confirmResetPassword,
        isUserLoggedIn,
        updateUser
    };
}

export const useAuth = () => {
    return useContext(AuthContext);
};
