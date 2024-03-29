import "../styles/globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header></Header>
    <Component {...pageProps} />
    <Footer></Footer>
    </>
  );
}

export default MyApp;
