import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



import { ToastContainer } from "react-toastify";
import ContextApi from "../context/ContextApi";
import { Footer } from "../Components/footer/Footer";
import Navbar from "../Components/shared/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keen-Keeper",
  description: "Keen-keeper | Meet your soul",
    icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={` h-full `}  suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ContextApi>
        <Navbar/>
        {children}
         <Footer/>
 <ToastContainer
  position="top-center"
  autoClose={2500}


  draggable
  theme="light"
  toastStyle={{
    borderRadius: "12px",
    fontSize: "14px",
    padding: "12px",
  }}
/>
        </ContextApi>
        </body>
    </html>
  );
}
