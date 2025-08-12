import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-manrope",
});

export const metadata = {
    title: "LifetimeArt",
    description: "Transform your home with LifetimeArt's renovation services.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${manrope.variable} ${manrope.className}`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
