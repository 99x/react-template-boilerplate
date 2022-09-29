

import LoginButton from '../login/login-button';
import LogoutButton from '../logout/logout-button';

const AuthenticationMicrosoftButton = (props : any) => {
  return (
    <>
      {props.isAuthenticated ? <LogoutButton /> : <LoginButton isMicrosoft={true} name={'Login With Microsoft'} />}
    </>
  );
};

export default AuthenticationMicrosoftButton;