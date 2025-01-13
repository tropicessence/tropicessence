import { Inter, IBM_Plex_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "animate.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Tropicessence",
  description: "Tropicessence coconut oil products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: "#F3EEE1" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
