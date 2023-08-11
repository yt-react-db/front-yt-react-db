import { useGoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useState } from 'react';

export default function AuthorizationCodeFlow() {

    const [channelInfo, setChannelInfo] = useState(null);
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {

            console.log(codeResponse)

            const data = { code: codeResponse.code };

            const scopes = codeResponse.scope;
            // check if users gave consent
            if (!scopes.includes("youtube.readonly")) {
                console.error('Scope "youtube.readonly" is missing"');
                return;
            }

            fetch("http://localhost:8080/get_the_juice", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            })
                .then(async response => {
                    const data = await response.json();
                    if (!response.ok) {
                        return Promise.reject(data);
                    }

                    const token = jwt_decode(data.message);
                    setChannelInfo({
                        token: data.message,
                        id: token.channel_id,
                        title: token.channel_title,
                    });

                })
                .catch(error => console.error(error));
        },
        flow: "auth-code",
        scope: "https://www.googleapis.com/auth/youtube.readonly",
    });

    let step2 = (<div>{channelInfo?.title} - {channelInfo?.id}<br /> {channelInfo?.token}</div>)

    return (
        <>
            <button onClick={login}>Sign In with Google (auth code)</button>
            {channelInfo && step2}
        </>
    )
}