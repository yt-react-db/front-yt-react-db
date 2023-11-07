import { Github, Twitter, Youtube } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function About() {
    return (
        <div>

            <div id="about" className="my-8">
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">About</h2>
            </div>
            <p>
                <Link className="hover:underline" to="https://github.com/orgs/yt-react-db/repositories">Open Source Project</Link>. Not affiliated with YouTube.<br /><br />
                React content on YouTube is controversial. It sparks arguments
                and debates between original content creators and reactors.
                Each reaction is distinct.
                The most transformative ones, such as documentaries and in-depth
                analyses, are considered to fall under fair use. On the other
                hand, reactions that are less transformative, like commentaries
                and simpler reactions, are subject to scrutiny regarding
                whether they qualify as fair use or not.<br />

                When the question can be asked, whether or not a reaction is
                transformative enough, it is better to ask for consent.<br />

                <span className="font-bold underline">yt-react-db</span> aims to
                collect the permissions from youtubers to let reactors know if
                they can watch their videos live and upload their reaction on youtube.<br />
                <br />
                <span className="font-bold underline">yt-react-db</span> also wants
                to provide tools (like an extension) to help reactors & editors
                know if they can react and upload their reactions.<br />
                <br />
                A potential future goal of <span className="font-bold underline">yt-react-db</span> could
                be to collect data and produce statistical analyses to demonstrate
                the impact of react content on original content.<br />
                The lack of such data, can make it difficult to decide if react
                has a positive (discoverability? algorithm boost? free exposure? ...)
                or negative impact (cannibalism? monetization? ...).

            </p>
            <div id="explained" className="my-8">
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">yt-react-db explained to a 5-year-old</h2>
            </div>
            <p>
                Imagine the following situation:<br />
                <br />
                Jimmy makes videos on YouTube.<br />
                Felix is a live streamer on Twitch.<br />
                Felix wants to watch Jimmy’s videos live on Twitch.<br />
                But before watching Jimmy’s videos, Felix asks Jimmy if he (Felix) can watch his (Jimmy) videos.<br />
                Jimmy answers: Yes, no problem, go ahead!<br />
                <br />
                Now, Olivia, Ruby, Emily, Jessica, Peter, Steven, Bob, Kate, Jean-Paul, Marty, Michael and more are live streamers or YouTubers, they want to watch Jimmy’s videos. So each of them send an email to Jimmy.<br />
                Jimmy sees that he has 20349391314 new emails.<br />
                Instead of answering them all, he decides to go to <a className="underline" href="https://yt-react-db.com">https://yt-react-db.com</a>.<br />
                He clicks on “Youtuber” in the navigation bar which leads him to <NavLink className="underline" to="/set-permissions-flow">https://yt-react-db.com/set-permissions-flow</NavLink><br />
                He clicks on the "Sign in with Google" button, select his YouTube Channel, consent to let yt-react-db access his YouTube Channel's name, ID and custom URL and give his permissions.
                <br />
                <br />
                Why does Jimmy need to sign in? To make sure he doesn’t make mistake when giving his information and to avoid any bad actor from pretending being him (Jimmy).
                <br />
                <br />
                Now, Olivia, Ruby, Emily, Jessica, Peter, Steven, Bob, Kate, Jean-Paul, Marty, Michael and more can go to <NavLink className="underline" to="/">yt-react-db.com</NavLink> and see if they can react to Jimmy's videos!
            </p>
            <div id="contact" className="my-8">
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Contact</h2>
                This project is developed and maintained by <Link className="underline hover:text-blue-500" to="https://twitter.com/ComputerBread">@ComputerBread</Link>.<br />
                Please use <Link className="underline hover:text-blue-500" to="https://twitter.com/ComputerBread">twitter</Link> to contact me.
                Do not use <Link to="https://twitter.com/yt_react_db" className="line-through">@yt_react_db</Link> (I am too lazy to manage several twitter accounts).<br />
                <br />
                You can also find me on:
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li className="flex items-center"><Twitter /><p>X (Twitter) as <Link className="underline hover:text-blue-500" to="https://twitter.com/ComputerBread">@ComputerBread</Link> (preferred)</p></li>
                    <li className="flex items-center"><Youtube /><p>Youtube as <Link className="underline hover:text-red-500" to="https://www.youtube.com/ComputerBread">@ComputerBread</Link> or <Link className="hover:text-red-500 underline" to="https://www.youtube.com/@computerbreadboard">@ComputerBreadBoard</Link></p></li>
                    <li className="flex items-center"><Github />Github&nbsp;<Link to="https://github.com/ComputerBread" className="underline hover:text-gray-500 underline-offset:2">@ComputerBread</Link></li>
                </ul>

            </div>
            <div id="discuss_participate" className="my-8">
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Discuss & Participate</h2>
                <p>
                    This project is open source.
                    For discussions, please use <Link className="underline hover:text-blue-500" to="https://twitter.com/ComputerBread">Twitter (X)</Link> or
                    &nbsp;<Link to="https://github.com/yt-react-db/issue-tracker/discussions" className="underline hover:text-gray-500">Github Discussions</Link>.<br />
                    Reddit & Discord will come next if needed (don't have time or attention to set and moderate them now!).
                </p>
                <p><Link to="https://github.com/yt-react-db/issue-tracker/issues" className="underline hover:text-gray-500">For anything else, please create a new issue!</Link></p>
            </div>

            <div id="discuss_participate" className="my-8">

                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Support the project</h2>
                <p>If you want to support the project, <Link to="https://ko-fi.com/computerbread" className="underline hover:text-pink-500">please consider making a donation</Link></p>
            </div>

            <p>

            </p>
            <div className="my-8">

                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Roadmap:</h2>
                <a className="hover:underline" href="https://github.com/orgs/yt-react-db/projects/1/views/2">Check roadmap on Github</a>

            </div >


        </div >
    )
}