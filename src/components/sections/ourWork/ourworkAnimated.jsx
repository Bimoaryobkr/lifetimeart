"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import workSamples from "@/utils/worksampleData";

export default function WorkListAnimated() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    return (
        <div
            ref={containerRef}
            className="relative h-[300vh]"
            style={{ perspective: "1000px" }}
        >
            <div className="sticky top-20 w-full max-w-[1440px] mx-auto">
                {workSamples.map((work, index) => {
                    const totalCards = workSamples.length;
                    const cardStart = index / totalCards;
                    const cardAppear = cardStart + 0.1;

                    const opacity = useTransform(
                        scrollYProgress,
                        [cardStart, cardAppear],
                        [0, 1]
                    );
                    const y = useTransform(
                        scrollYProgress,
                        [cardStart, cardAppear],
                        [100, 0]
                    );
                    const scale = useTransform(
                        scrollYProgress,
                        [cardStart, cardAppear],
                        [0.9, 1]
                    );

                    return (
                        <motion.div
                            key={index}
                            className="absolute inset-0 w-full"
                            style={{ opacity, y, scale, zIndex: index + 1 }}
                        >
                            <Card
                                className={`mb-6 ${
                                    index % 2 === 0
                                        ? "bg-slate-100"
                                        : "bg-[#101014] text-white"
                                }`}
                            >
                                <CardContent className="flex flex-col md:flex-row items-center gap-20 p-6">
                                    <div className="flex-1 relative aspect-[648/500]">
                                        <Image
                                            src={work.image}
                                            alt={work.title}
                                            fill
                                            priority
                                            className="w-full md:w-1/3 object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="mb-2">{work.title}</h3>
                                        <p className="mb-4">
                                            {work.description}
                                        </p>
                                        <div className="flex gap-2 mb-4">
                                            <Badge>{work.room}</Badge>
                                            <Badge>{work.time}</Badge>
                                        </div>
                                        <blockquote className="italic text-gray-500 text-base mb-4">
                                            "{work.quote}"
                                        </blockquote>
                                        <div className="flex items-center">
                                            <Image
                                                src={work.avatar}
                                                alt={work.name}
                                                className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-3"
                                                width={40}
                                                height={40}
                                            />
                                            <div>
                                                <p className="font-semibold text-sm md:text-base">
                                                    {work.name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
