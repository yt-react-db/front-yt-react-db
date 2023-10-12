import { Link } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertTriangle } from "lucide-react";

export default function ExtensionInfo() {

    return (
        <>

            <h1 className="text-3xl lg:text-4xl font-extrabold  my-10 text-center">Web Browser Extension</h1>
            <Alert className='border-red-600 dark:border-yellow-400'>
                <AlertTriangle fill={"yellow"} color="black" />
                <AlertTitle className="text-red-600 text-lg dark:text-yellow-300 font-bold underline underline-offset-4">Warning! Work In Progress</AlertTitle>
                <AlertDescription>
                    The extension is in early alpha and may just <a className="underline hover:no-underline" href="https://github.com/yt-react-db/issue-tracker/issues/21">not work at all</a>!
                    It was only tested on Brave and Firefox!
                </AlertDescription>
            </Alert>
            <br />
            <p>Are you a live streamer? YouTuber? Editors? who reacts to YouTube videos?</p>
            <p>Install the web browser extension to be able to tell if you can react to a video whenever you are browsing videos on YouTube.</p>
            <br />
            <p>Available right now on:</p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li><Link className="underline hover:no-underline" to="https://chrome.google.com/webstore/detail/yt-react-db/cbdghbddaeanhpeodhbbelalccdhlcem">Chrome Web Store</Link></li>
                <li><Link className="underline hover:no-underline" to="https://addons.mozilla.org/en-US/firefox/addon/yt-react-db/">FireFox</Link></li>
            </ul>
        </>
    );
}