
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from './components/Nav'
import "./globals.css";
 
const inter = Inter({ subsets: ["latin"] });
 
export const metadata: Metadata = {
    title: "Buyer Frontend",
    description: "Generated by create next app",
};
 
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html data-theme="winter" lang="en">
            <body className={`${inter.className} `}>
                <Header  />
                <div className=" flex-row bg-green-100 text-fuchsia-950 min-h-screen">
                {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}