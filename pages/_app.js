import "../styles/globals.css";
import Head from "next/head";
import { Fragment } from "react";
import { Container } from "../src/components/Container";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Odibee+Sans&family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-gray-200 min-h-screen flex flex-col">
        <div className="bg-white flex justify-center w-full fixed top-0 left-0 w-full shadow-md z-20">
          <Container className="h-16 flex items-center">
            <Link href="/">
              <a className="odibee text-xl">DDR3 Store</a>
            </Link>
          </Container>
        </div>
        <Component {...pageProps} />
      </div>
    </Fragment>
  );
}

export default MyApp;
