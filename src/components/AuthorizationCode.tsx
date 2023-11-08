import { useGoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useState } from 'react';
import { Youtube, Check, AlertTriangle, XCircle } from "lucide-react";
import { ReloadIcon } from "@radix-ui/react-icons"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import FAQ from './faq';
import PermissionsForm from './PermissionsForm';

type ChannelInfoType = null | {
    token: string,
    id: string,
    title: string,
    customUrl: string,
};

type TokenType = {
    channel_id: string,
    channel_title: string,
    custom_url: string,
}

/*
0. user arrives on page
1. user clicked the button
2. sign in succeed (on error back to 0), we fetch yt data
3. yt data fetched, now waiting for user to enter information
4. user validate
5. data saved
 */
export default function AuthorizationCodeFlow() {

    const [channelInfo, setChannelInfo] = useState<ChannelInfoType>(null);
    const [step, setStep] = useState(0);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {

            setStep(2);
            console.log(codeResponse)

            const data = { code: codeResponse.code };

            const scopes = codeResponse.scope;
            // check if users gave consent
            if (!scopes.includes("youtube.readonly")) {
                console.error('Scope "youtube.readonly" is missing"');
                setStep(-2);
                return;
            }

            fetch(import.meta.env.VITE_BACKEND_URL + "/get_the_juice", {
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

                    setStep(3);
                    const token: TokenType = jwt_decode(data.message);
                    setChannelInfo({
                        token: data.message,
                        id: token.channel_id,
                        title: token.channel_title,
                        customUrl: token.custom_url,
                    });

                })
                .catch(error => console.error(error));
        },
        onError: (err) => {
            console.error(err);
            setStep(0);
        },
        flow: "auth-code",
        scope: "https://www.googleapis.com/auth/youtube.readonly",
    });

    const onClick = () => {
        setStep(1);
        login();
    }

    return (
        <>
            <h1 className="text-3xl lg:text-4xl font-extrabold  my-10 text-center">Tell the world if they can react to your videos</h1>
            <FAQ />
            <ol className="relative text-gray-900 dark:text-gray-200 border-l border-gray-200 dark:border-gray-700 mt-10" >
                <li className="mb-10 ml-6">
                    <span className={
                        (step >= 2 ? "bg-green-200 dark:bg-green-900 " : (step < 0) ? "bg-red-100 dark:bg-red-600" : "bg-gray-100 dark:bg-gray-700") + " absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900"
                    }>
                        {step >= 2 && <Check />}
                        {step == 0 && (1)}
                        {step < 2 && step > 0 && <ReloadIcon className="animate-spin" />}
                        {step < 0 && <XCircle />}
                    </span>
                    <h3 className="text-left font-medium text-lg mb-5">Sign in with Google and consent to share your Channel Name, Channel ID, and Custom URL</h3>
                    <Alert className='border-red-600 dark:border-yellow-400'>
                        <AlertTriangle fill={"yellow"} color="black" />
                        <AlertTitle className="text-red-600 text-lg dark:text-yellow-300 font-bold underline underline-offset-4">Warning!</AlertTitle>
                        <AlertDescription>
                            If you are streaming right now, don't show your screen for this step.<br />
                            Clicking the button will open a pop-up, potentially showing your email address(es).
                        </AlertDescription>
                    </Alert>
                    <div className="flex items-center p-5">
                        <button onClick={onClick} disabled={step != 0} className={step >= 2 ? "gsi-material-button bg-green-500 " : "gsi-material-button"}>
                            <div className="gsi-material-button-state"></div>
                            <div className="gsi-material-button-content-wrapper">
                                <div className="gsi-material-button-icon">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ display: "block" }}>
                                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                        <path fill="none" d="M0 0h48v48H0z"></path>
                                    </svg>
                                </div>
                                <span className="gsi-material-button-contents">Sign in with Google</span>
                            </div>
                        </button>
                    </div>
                    {step === -2 && (

                        <div className="text-red-600 text-lg">
                            <XCircle />
                            You need to give your consent to access to your youtube read-only information.
                            <br />
                            Please try again by reloading the page!
                        </div>
                    )}

                </li >

                <li className="mb-10 ml-6">
                    <span className={(step >= 3 ? "bg-green-200 dark:bg-green-900 " : "bg-gray-100 dark:bg-gray-700") + " absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900"}>
                        {step >= 3 ? <Check /> : (step < 2 ? (2) : <ReloadIcon className="animate-spin" />)}
                    </span>
                    <h3 className="text-left font-medium text-lg">Fetching Channel Information</h3>
                    <div className="flex items-center p-5">
                        Requesting YouTube for your channel name, ID and custom URL (public information). <br />
                        You have nothing to do, just wait a bit, it should be quick.
                    </div>
                    {channelInfo && (
                        <div className="p-5">
                            <p className="font-bold underline">Channel's name:</p><p>{channelInfo.title}</p><br />
                            <p className="font-bold underline">Channel's ID:</p><p>{channelInfo.id}</p><br />
                            <p className="font-bold underline">Custom URL:</p><p>{channelInfo.customUrl}</p>
                        </div>)
                    }
                </li>

                <li className="mb-10 ml-6">
                    <span className={(step > 4 ? "bg-green-200 dark:bg-green-900 " : "bg-gray-100 dark:bg-gray-700") + " absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900"}>
                        {step > 4 ? <Check /> : (step < 4 ? (3) : <ReloadIcon className="animate-spin" />)}
                    </span>
                    <h3 className="text-left font-medium text-lg">Give (or not) your permissions</h3>
                    <div className="flex items-center p-5">
                        {channelInfo && <PermissionsForm channelInfo={channelInfo} setStep={setStep} />}
                    </div>

                </li>

                <li className="mb-10 ml-6">
                    <span className={(step >= 5 ? "bg-green-200 dark:bg-green-900 " : "bg-gray-100 dark:bg-gray-700") + " absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900"}>
                        {step >= 5 ? <Check /> : (4)}
                    </span>
                    <h3 className="text-left font-medium text-lg">Confirmation</h3>
                    <div className="flex items-center p-5">
                        {step === 5 ? "Thank you for sharing your permissions with us :)" : ""}
                    </div>

                </li>

            </ol >
        </>
    )
}