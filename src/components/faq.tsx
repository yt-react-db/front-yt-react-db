import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Link } from "react-router-dom";

export default function FAQ() {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>Why do I need to sign in with Google?</AccordionTrigger>
                <AccordionContent>
                    To accurately and uniquely identify your youtube channel, we need to access your YouTube channel's name, ID and custom URL.
                    Doing so using Google Sign In allows us to collect accurate information, and prevents bad actors from impersonating you. <br />
                    <br />
                    yt-react-db’s use of information received from Google APIs will adhere to <a className="underline hover:text-gray-500" href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>, including the Limited Use requirements.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Do you collect sensitive personal data?</AccordionTrigger>
                <AccordionContent>
                    No.<br /><br />
                    We only collect your YouTube channel's name, ID and <a className="underline hover:text-gray-500" href="https://support.google.com/youtube/answer/2657968">custom URL</a>, which are public information anyone can find on YouTube.<br />
                    Our server never sees your email address or any other personal information.<br /><br />
                    Don't believe it? <a className="underline hover:text-gray-500" href="https://github.com/orgs/yt-react-db/repositories">Check the source code on GitHub</a><br />
                    <br />
                    Check the <Link to="/privacy-policy" className="underline">privacy policy</Link> to know more.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>How to modify my permissions?</AccordionTrigger>
                <AccordionContent>
                    If you already gave us your permissions, you can go through the same process below to modify them.
                    Note that we keep an history of your previous permissions, so you can't falsely accuse someone to not respect your choices.
                    Note that it can take up to 24 hours for extension users to see the changes!
                </AccordionContent>
            </AccordionItem>
        </Accordion>

    );
}