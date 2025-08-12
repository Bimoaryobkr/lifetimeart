"use client";

import { Badge } from "@/components/ui/badge";
import WorkListAnimated from "@/components/sections/ourWork/ourworkAnimated";
import WorkListCarousel from "@/components/sections/ourWork/ourworkCarousel";
import { motion } from "framer-motion";

export default function OurWork() {
    return (
        <section id="our-work" className="w-full">
            <div className="mx-auto max-w-[1200px] px-5">
                <motion.div
                    className="flex flex-col items-center mb-10 xl:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Badge>Our Work</Badge>
                    <h2>Get Inspired by our work</h2>
                    <p className="text-center max-w-2xl">
                        See how we&apos;ve transformed homes with our expert
                        craftsmanship and attention to detail.
                    </p>
                </motion.div>
                <div className="block md:hidden">
                    <WorkListCarousel />
                </div>
                <div className="hidden md:block">
                    <WorkListAnimated />
                </div>
            </div>
        </section>
    );
}
