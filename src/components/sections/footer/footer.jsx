"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { FiX } from "react-icons/fi";
import Image from "next/image";

const links = [
    { href: "#about-us", label: "About Us" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#our-work", label: "Our Work" },
    { href: "#faq", label: "FAQs" },
    { href: "#services", label: "Services" },
    { href: "#footer", label: "Contact" },
];

export default function Footer() {
    return (
        <section id="footer" className="w-full mt-30">
            <div className="mx-auto max-w-[1440px] px-5">
                <Card className="bg-[#101014] text-white p-10 md:p-20 ">
                    <div className="flex flex-col md:flex-row gap-5 md:gap-20">
                        <motion.div
                            className="flex-1"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className="flex flex-col gap-5">
                                <Badge>Contact</Badge>
                                <h2>Get in Touch</h2>
                                <p>
                                    For any inquiries or to explore your vision
                                    further, we invite you to contact our
                                    professional team using the details provided
                                    below.
                                </p>
                                <p>
                                    <span className="font-bold">Office</span>{" "}
                                    150 Old Park Ln, London W1K 1QZ
                                </p>
                                <p>
                                    <span className="font-bold">Email</span>{" "}
                                    hello@refit.com
                                </p>
                                <p>
                                    <span className="font-bold">Telephone</span>{" "}
                                    07716 534984
                                </p>
                            </div>
                            <Separator className="my-4 bg-gray-300" />
                            <div className="flex flex-col gap-4">
                                <h4>Follow Us</h4>
                                <div className="flex flex-row gap-4">
                                    <Link
                                        href="#"
                                        className="text-white hover:text-gray-300 transition-colors duration-200"
                                    >
                                        <FaInstagram className="h-5 w-5" />
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-white hover:text-gray-300 transition-colors duration-200"
                                    >
                                        <SiTiktok className="h-5 w-5" />
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-white hover:text-gray-300 transition-colors duration-200"
                                    >
                                        <FiX className="h-5 w-5" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="flex-1"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: 0.2,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Card>
                                <div className="p-4">
                                    <form className="space-y-4">
                                        <div>
                                            <Label
                                                htmlFor="name"
                                                className="text-sm font-medium mb-2"
                                            >
                                                Name
                                            </Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                placeholder="John Smith"
                                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <Label
                                                htmlFor="email"
                                                className="text-sm font-medium mb-2"
                                            >
                                                Email
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="johnsmith@gmail.com"
                                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <Label
                                                htmlFor="phone"
                                                className="text-sm font-medium mb-2"
                                            >
                                                Phone Number
                                            </Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                placeholder="44162819231"
                                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <Label
                                                htmlFor="message"
                                                className="text-sm font-medium mb-2"
                                            >
                                                Message
                                            </Label>
                                            <Textarea
                                                id="message"
                                                placeholder="Hello, I'd like to enquire about..."
                                                className="min-h-[100px]"
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            className="w-full bg-[#101014BF] text-white hover:bg-gray-800"
                                        >
                                            Send Message
                                        </Button>
                                    </form>
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </Card>
                <div className="bg-[#101014] text-white rounded-t-lg p-10 md:p-20 mt-3">
                    <div className="flex flex-col md:flex-row justify-between gap-20">
                        <div className="flex-1">
                            <Image
                                src="/Logo.png"
                                alt="LifetimeArt Logo"
                                width={40}
                                height={40}
                                className="w-10 h-10"
                            />
                            <h3>LifetimeArt</h3>
                        </div>
                        <div>
                            <h3 className="mb-10">Quick Links</h3>
                            <div className="flex flex-wrap">
                                {links.map(({ href, label }) => (
                                    <Link
                                        key={label}
                                        href={href}
                                        className="w-1/2 mb-3 text-gray-400"
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Separator className="my-4" />
                    <p>&copy; 2023 Lifetime Art. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
}
