import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import Footer from '@/components/Footer';
import CookieConsent from "./CookieConsent";

export default function Root() {
    return (
        <>
            <Nav />
            <Outlet />
            <CookieConsent />
            <Footer />
        </>
    );
}