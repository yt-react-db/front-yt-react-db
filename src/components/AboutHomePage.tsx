import { NavLink } from "react-router-dom";

export default function AboutHomePage() {
    return (
        <div>

            <div id="about" className="my-8">
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">What is this? Why should I use it?</h2>
            </div>
            <p>
                <span className="font-bold">yt-react-db</span> is a public database aiming at collecting and sharing YouTuber's permissions concerning React content.
                <br />
                <br />
                If you are a <span className="font-bold">youtuber</span> making orignal content,
                giving (or not) your permissions will free you from answering emails and DM of reactors,
                and free you from chasing people reacting to your content without your consent.<br />
                Now everyone will be able to see if they can react or not to your content!<br />
                Of course there's no guarantee that people will respect your decision, but hopefully most will!<br />
                <br />
                We need to collect your channel’s name, ID and custom URL (also
                known as your YouTube Handle) that are used to uniquely identify
                your YouTube Channel. To do that and fight impersonators, we
                require you to sign in with your Google account that is linked
                to your YouTube Channel, so that only the owner/manager of the
                YouTube Channel can provide the permissions.<br />
                <br />

                If you are a <span className="font-bold">reactor/streamer/editor</span>,
                stop chasing people to know if you can react to their content,
                or if you can upload your reaction online.<br />
                Protect yourself from possible strikes or DMCA takedowns.<br />
                Take a look at the table above (or use the <NavLink to="/extension" className="underline">extension</NavLink>) to know if you can react to someone’s content!
                <br />
                <br />
                <br />
                To know more, check the <NavLink to="/about" className="underline">about section</NavLink>
            </p>
        </div >
    )
}