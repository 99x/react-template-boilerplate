import React from 'react';

import AuthenticationButton from '../authentication-button/authentication-button';
import AuthenticationMicrosoftButton from '../authentication-microsoft-button/authentication-microsoft-button';

const AuthNav = () => {
    return (
        <>
            <div>
                <AuthenticationButton />
                <AuthenticationMicrosoftButton/>
            </div>
            
        </>
    );
};

export default AuthNav;