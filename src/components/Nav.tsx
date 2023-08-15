import { ModeToggle } from "./mode-toggle";
import { NavLink } from "react-router-dom";

export default function Nav() {

    return (<nav className="flex flex-row items-center">
        <div className="flex-auto hover:underline">
            <NavLink to="/">
                Table
            </NavLink>
        </div>
        <div className="flex-auto hover:underline">
            <NavLink to="/#extension">
                Extension
            </NavLink>
        </div>
        <div className="flex-auto hover:underline">
            <NavLink to="/set_permissions_flow">
                Youtuber?
            </NavLink>
        </div>
        <div className="flex-auto hover:underline">
            <NavLink to="/about">
                About
            </NavLink>
        </div>
        <div className="flex-auto hover:underline">
            <NavLink to="https://ko-fi.com/computerbread">
                Support project
            </NavLink>
        </div>
        <div className="flex-end justify-end">
            <div className="flex-end">
                <ModeToggle />
            </div>
        </div>
    </nav>);

}