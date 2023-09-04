import { Separator } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="my-4">
            <Separator />
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://yt-react-db.com/" className="hover:underline">yt-react-db</a>. Not affiliated with YouTube.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link to="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
                    </li>
                    <li>
                        <Link to="/privacy_policy" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="/terms_and_conditions" className="mr-4 hover:underline md:mr-6">Terms & Conditions</Link>
                    </li>
                    <li>
                        <Link to="/about#contact" className="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}