import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header></Header>
            <Component {...pageProps} />
            <Footer></Footer>
            <GoogleAnalytics gaId="G-BX2C9YEQWP" />
        </>
    );
}

export default MyApp;
