import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { loginRequest } from "../../auth/authconfig";

import LoginButton from '../login/login-button';
import LogoutButton from '../logout/logout-button';

const AuthenticationMicrosoftButton = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      {isAuthenticated ? <LogoutButton /> : <LoginButton isMicrosoft={true} name={'Login With Microsoft'} />}
    </>
  );
};

export default AuthenticationMicrosoftButton;