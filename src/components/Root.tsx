import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import Footer from '@/components/Footer';

export default function Root() {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
}