import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>Why do I need to sign in with Google?</AccordionTrigger>
                <AccordionContent>
                    In order to access your YouTube channel's name & ID, we need to verify your identity.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Do you collect personal data?</AccordionTrigger>
                <AccordionContent>
                    No.<br /><br />
                    We only collect your YouTube channel's name & ID, which are public information anyone can find. <br />
                    Our server never sees your email address or any other personal information.<br /><br />
                    Don't believe it? <a className="underline hover:text-gray-500" href="https://github.com/orgs/yt-react-db/repositories">Check the source code on GitHub</a>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

    );
}