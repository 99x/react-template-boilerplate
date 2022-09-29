import AuthenticationButton from '../authentication-button/authentication-button';
import AuthenticationMicrosoftButton from '../authentication-microsoft-button/authentication-microsoft-button';

const AuthNav = (props : any) => {
    return (
        <>
            <div>
                <AuthenticationButton />
                <AuthenticationMicrosoftButton isAuthenticated = {props.isAuthenticated}/>
            </div>
            
        </>
    );
};

export default AuthNav;