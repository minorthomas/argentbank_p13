import { Footer } from "./Footer";
import { Header } from "./Header";

import './layout.scss';

export function Layout({ children }) {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
}