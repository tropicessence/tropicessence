import { Inter, IBM_Plex_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "animate.css";
import Head from "next/head";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Tropicessence",
  keywords: ["Tropicessence", "coconut oil", "coconut products", "coconut oil products", "Tropic essence"],
  description: "Tropicessence coconut oil products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={inter.className} style={{ backgroundColor: "#F3EEE1" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
