import { useEffect, useState } from 'react';
import { userSession, authenticate } from '@/lib/stacks';
import { UserData } from '@stacks/connect';

/**
 * Custom hook for Stacks wallet authentication.
 * Provides user data, authentication status, and auth actions.
 */
export function useStacksAuth() {
    const [userData, setUserData] = useState<UserData | null>(() =>
        userSession.isUserSignedIn() ? userSession.loadUserData() : null
    );
    const [isSignedIn, setIsSignedIn] = useState(() => userSession.isUserSignedIn());

    useEffect(() => {
        if (!isSignedIn && userSession.isSignInPending()) {
            userSession.handlePendingSignIn().then((data: UserData) => {
                setUserData(data);
                setIsSignedIn(true);
            });
        }
    }, [isSignedIn]);

    const signIn = () => {
        authenticate();
    };

    const signOut = () => {
        userSession.signUserOut('/');
        setUserData(null);
        setIsSignedIn(false);
    };

    return { userData, isSignedIn, signIn, signOut };
}
