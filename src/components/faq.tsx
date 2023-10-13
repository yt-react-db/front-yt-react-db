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
                <AccordionTrigger>Do you collect sensitive personal data?</AccordionTrigger>
                <AccordionContent>
                    No.<br /><br />
                    We only collect your YouTube channel's name, ID and custom URL, which are public information anyone can find. <br />
                    Our server never sees your email address or any other personal information.<br /><br />
                    Don't believe it? <a className="underline hover:text-gray-500" href="https://github.com/orgs/yt-react-db/repositories">Check the source code on GitHub</a>
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