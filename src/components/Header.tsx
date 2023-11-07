import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="flex flex-col justify-content items-center mt-10">
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">Youtube React Database</span></h1>
                <p className="text-lg font-normal text-gray-900 lg:text-l dark:text-gray-400 text-center">
                    A public database to know if we can react to YouTubers' videos live and/or upload our reactions on YouTube.
                </p>
                <p>
                    <span className="font-bold">Are you a <Link to="/set-permissions-flow" className="text-red-500 hover:underline">Youtuber?</Link></span> <Link className="hover:underline italic" to="/set-permissions-flow">Tell us if we can react to your content</Link>
                </p>
            </div>
        </header >
    );
}