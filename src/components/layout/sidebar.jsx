"use client";

import Link from "next/link";

export default function Sidebar({ isOpen, onClose, navLinks }) {
    return (
        <div
            className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
                isOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            }`}
        >
            <div
                className={`absolute inset-0 bg-black/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="h-full">
                    <nav className="flex flex-col h-full justify-center">
                        <ul className="pl-18 space-y-7">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        onClick={onClose}
                                        className="block text-white text-2xl font-medium hover:text-gray-300 transition-colors duration-300 py-4"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
