import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from '../login/login-button';
import LogoutButton from '../logout/logout-button';

const AuthenticationButton = () => {
    const { isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? <LogoutButton /> : <LoginButton isMicrosoft={false} name={'Login With Auth0'} />}
    </>
  );
};

export default AuthenticationButton;