"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./sidebar";

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const navLinks = [
        { href: "#about-us", label: "About" },
        { href: "#services", label: "Services" },
        { href: "#our-work", label: "Our Work" },
        { href: "#faq", label: "FAQ" },
        { href: "#footer", label: "Contact" },
    ];

    return (
        <div>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/70 via-black/50 to-transparent p-5">
                <div className="max-w-[1300px] mx-auto px-10 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/Logo.png"
                                alt="LifetimeArt Logo"
                                width={40}
                                height={40}
                                className="w-10 h-10"
                            />
                            <span className="text-xl font-bold text-white">
                                LifetimeArt
                            </span>
                        </div>
                        <ul className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="relative text-white transition-colors duration-300 group"
                                    >
                                        {link.label}
                                        <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={toggleSidebar}
                            className="md:hidden text-white transition-colors duration-300"
                            aria-label="Toggle menu"
                        >
                            {isSidebarOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={closeSidebar}
                navLinks={navLinks}
            />
        </div>
    );
}
