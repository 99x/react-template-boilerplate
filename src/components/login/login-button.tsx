import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../../auth/authconfig';

function handleLogin(instance : any) {
    instance.loginRedirect(loginRequest).catch((e: any) => {
        console.error(e);
    });
}

const LoginButton = (props : any) => {
    const { loginWithRedirect } = useAuth0();
    const { instance } = useMsal();

    return (
        <>
            <button onClick={() => props.isMicrosoft ? handleLogin(instance) : loginWithRedirect()}>{props.name}</button>;
        </>
    );
};

export default LoginButton;