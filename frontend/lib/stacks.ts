/**
 * Stacks authentication and session management.
 * @module lib/stacks
 */
import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { STACKS_TESTNET, STACKS_MAINNET } from '@stacks/network';

/** Application configuration for Stacks authentication */
const appConfig = new AppConfig(['store_write', 'publish_data']);

/** Persistent user session for Stacks */
export const userSession = new UserSession({ appConfig });

/**
 * Initiates the Stacks authentication process using @stacks/connect.
 * Redirects user to the home page upon successful authentication.
 */
export function authenticate() {
    showConnect({
        appDetails: {
            name: 'StackKnowledge',
            icon: window.location.origin + '/logo.png',
        },
        redirectTo: '/',
        onFinish: () => {
            window.location.reload();
        },
        userSession,
    });
}

/**
 * Retrieves the current user's data if they are signed in.
 * 
 * @returns {UserData | null} The user's metadata or null if not authenticated.
 */
export function getUserData() {
    if (userSession.isUserSignedIn()) {
        return userSession.loadUserData();
    }
    return null;
}

/**
 * Determines if the current environment is Mainnet.
 * Based on the NEXT_PUBLIC_NETWORK environment variable.
 */
const isMainnet = process.env.NEXT_PUBLIC_NETWORK === 'mainnet';

/**
 * The Stacks network instance to use for contract calls and transactions.
 * Switches between MAINNET and TESTNET based on environment configuration.
 */
export const network = isMainnet ? STACKS_MAINNET : STACKS_TESTNET;
