import { useGoogleLogin } from '@react-oauth/google';

export default function ImplicitFlow() {

    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
        scope: "https://www.googleapis.com/auth/youtube.readonly"
    });

    return (
        <button onClick={login}>
            (implicit) Sign in with Google 🚀{' '}
        </button>
    )
}