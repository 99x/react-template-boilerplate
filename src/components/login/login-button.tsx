import { useAuth0 } from "@auth0/auth0-react";
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../../auth/authconfig';

function handleLogin(instance: any, inProgress: any) {
    if (inProgress === "none") {
        instance.loginRedirect(loginRequest);
    }
}

const LoginButton = (props: any) => {
    const { loginWithRedirect } = useAuth0();
    const { instance, inProgress } = useMsal();

    return (
        <>
            <button onClick={() => props.isMicrosoft ? handleLogin(instance, inProgress) : loginWithRedirect()}>{props.name}</button>;
        </>
    );
};

export default LoginButton;