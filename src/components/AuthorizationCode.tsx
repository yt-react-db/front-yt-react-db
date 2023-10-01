import { useGoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Youtube, Check, AlertTriangle, XCircle } from "lucide-react";
import { ReloadIcon } from "@radix-ui/react-icons"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import FAQ from './faq';
import PermissionsForm from './PermissionsForm';

type ChannelInfoType = null | {
    token: string,
    id: string,
    title: string,
};

type TokenType = {
    channel_id: string,
    channel_title: string,
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

    let buttonContent;
    if (step === 0) {
        buttonContent = (<><Youtube className="mr-4" />Sign In with Google</>);
    } else if (step === 1) {
        buttonContent = (<><ReloadIcon className="mr-4 animate-spin" /> Signing in</>);
    } else {
        buttonContent = (<><Check className="mr-4" /> Signed in</>)
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
                    <h3 className="text-left font-medium text-lg mb-5">Sign in with Google and consent to show your Channel Name & ID</h3>
                    <Alert className='border-red-600 dark:border-yellow-400'>
                        <AlertTriangle fill={"yellow"} color="black" />
                        <AlertTitle className="text-red-600 text-lg dark:text-yellow-300 font-bold underline underline-offset-4">Warning!</AlertTitle>
                        <AlertDescription>
                            If you are streaming right now, don't show your screen for this step.<br />
                            Clicking the button will open a pop-up, potentially showing your email address(es).
                        </AlertDescription>
                    </Alert>
                    <div className="flex items-center p-5">

                        <Button onClick={onClick} disabled={step != 0} className={step >= 2 ? "bg-green-500 " : ""}>
                            {buttonContent}
                        </Button>
                    </div>
                    {step === -2 && (

                        <div className="text-red-600 text-lg">
                            <XCircle />
                            You need to give your consent to access to your youtube read-only information.
                            <br />
                            Please try again by reloading the page!
                        </div>
                    )}

                </li>

                <li className="mb-10 ml-6">
                    <span className={(step >= 3 ? "bg-green-200 dark:bg-green-900 " : "bg-gray-100 dark:bg-gray-700") + " absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900"}>
                        {step >= 3 ? <Check /> : (step < 2 ? (2) : <ReloadIcon className="animate-spin" />)}
                    </span>
                    <h3 className="text-left font-medium text-lg">Fetching Channel Information</h3>
                    <div className="flex items-center p-5">
                        Requesting YouTube for your channel name and ID (public information). <br />
                        You have nothing to do, just wait a bit, it should be quick.
                    </div>
                    {channelInfo && (
                        <div className="p-5">
                            <p className="font-bold underline">Channel's name:</p><p>{channelInfo.title}</p><br />
                            <p className="font-bold underline">Channel's ID:</p><p>{channelInfo.id}</p>
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