import { GoogleLogin } from "@react-oauth/google";
import ImplicitFlow from "./ImplicitFlow";
import AuthorizationCodeFlow from "./AuthorizationCode";

export default function SignInGoogleButton() {

    const onSuccess = (credentialResponse) => {
        console.log(credentialResponse);
    }

    const onError = (err) => {
        console.error(err);
    }
    return (
        <>
            <GoogleLogin
                onSuccess={onSuccess}
                onError={onError}
            />
            <ImplicitFlow />
            <AuthorizationCodeFlow />

        </>
    );
}