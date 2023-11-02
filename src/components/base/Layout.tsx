import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type LayoutChildren = {
    children: ReactNode;
}

const Layout = ({ children }: LayoutChildren) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;