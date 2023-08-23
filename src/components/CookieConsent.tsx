import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { Link } from "react-router-dom";

const GA_MEASUREMENT_ID = "G-ZJHNRRQ0SX";

// the 1 is for future updates, so we can increment and now when we have old consent
const COOKIE_CONSENT_LOCALSTORAGE_KEY = "yt-react-db_cookie_consent_1";
const I_CONSENT_TO_COOKIES = "y";
const I_DO_NOT_CONSENT_TO_COOKIES = "n";


export default function CookieConsent() {
    const [isOpened, setIsOpened] = useState(false);
    // 1. check if already gave permission
    // 2. if already then do the thing
    // 3. if not then do the other thing


    useEffect(() => {

        const storedCookieConsent = localStorage.getItem(COOKIE_CONSENT_LOCALSTORAGE_KEY);
        if (storedCookieConsent === null) {
            setIsOpened(true);
        } else if (storedCookieConsent === I_CONSENT_TO_COOKIES) {
            ReactGA.initialize(GA_MEASUREMENT_ID);
        }

    }, []);


    const onAccept = () => {
        // is that enough? (we'll see when it's online)
        ReactGA.initialize(GA_MEASUREMENT_ID);
        localStorage.setItem(COOKIE_CONSENT_LOCALSTORAGE_KEY, I_CONSENT_TO_COOKIES);
        setIsOpened(false);
    };

    const onDecline = () => {
        localStorage.setItem(COOKIE_CONSENT_LOCALSTORAGE_KEY, I_DO_NOT_CONSENT_TO_COOKIES);
        setIsOpened(false);
    };


    const cookieConsent = (

        <div className="fixed bottom-0 right-0 m-5 w-full max-w-2xl max-h-full">

            <div className="relative text-white-800 rounded-md shadow border bg-gray-800">

                <div className="flex items-start justify-between p-4 border-b rounded-t border-gray-600">
                    <h3 className="text-xl font-semibold text-white">
                        Cookies 🍪
                    </h3>
                </div>

                <div className="p-6 space-y-3">
                    <p className="text-base leading-relaxed text-gray-400">
                        yt-react-db uses cookies and other tracking technologies (google analytics) to analyze traffic and to understand where our visitors are coming from.
                    </p>
                    <p className="text-base leading-relaxed text-gray-400">
                        Check the <Link to="/privacy-policy" className="underline">privacy policy</Link> to know more.
                    </p>
                </div>

                <div className="flex items-center p-6 space-x-2 border-t rounded-b border-gray-600">
                    <button onClick={onAccept} data-modal-hide="staticModal" type="button" className="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">I accept</button>
                    <button onClick={onDecline} data-modal-hide="staticModal" type="button" className="focus:ring-4 focus:outline-none  rounded-lg border  text-sm font-medium px-5 py-2.5  focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600">Decline</button>
                </div>
            </div>
        </div>
    );

    if (isOpened) {
        return cookieConsent;
    } else {
        return null;
    }

}