import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { STACKS_TESTNET } from '@stacks/network';

const appConfig = new AppConfig(['store_write', 'publish_data']);
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

export const network = STACKS_TESTNET; // Default to testnet for dev
