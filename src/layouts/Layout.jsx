import { Footer } from "./Footer";
import { Header } from "./Header";

import './layout.scss';

function Layout({ children }) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
}

export default Layout