import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    weight: "500",
    subsets: ["latin"],
    variable: "--font-inter",
});

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "HelpSquad",
    description: "HelpSquad agent schedule",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
