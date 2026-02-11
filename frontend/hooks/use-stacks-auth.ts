import { useEffect, useState } from 'react';
import { userSession, authenticate, getUserData } from '@/lib/stacks';
import { UserData } from '@stacks/connect';

export function useStacksAuth() {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        if (userSession.isUserSignedIn()) {
            setUserData(userSession.loadUserData());
            setIsSignedIn(true);
        } else if (userSession.isSignInPending()) {
            userSession.handlePendingSignIn().then((userData) => {
                setUserData(userData);
                setIsSignedIn(true);
            });
        }
    }, []);

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
