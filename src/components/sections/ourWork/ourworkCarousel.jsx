"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselDots,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import workSamples from "@/utils/worksampleData";

export default function WorkListCarousel() {
    return (
        <Carousel className="w-full mx-auto">
            <CarouselContent>
                {workSamples.map((work, index) => (
                    <CarouselItem key={index}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Card className="mb-6">
                                <CardContent className="flex flex-col md:flex-row gap-4 p-6">
                                    <div className="aspect-[4/3] relative w-full md:w-1/3">
                                        <Image
                                            src={work.image}
                                            alt={work.title}
                                            fill
                                            priority
                                            className="w-full md:w-1/3 object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold mb-2">
                                            {work.title}
                                        </h3>
                                        <p className="mb-4">
                                            {work.description}
                                        </p>
                                        <div className="flex gap-2 mb-4">
                                            <Badge variant="secondary">
                                                {work.room}
                                            </Badge>
                                            <Badge variant="outline">
                                                {work.time}
                                            </Badge>
                                        </div>
                                        <blockquote className="italic text-gray-500 mb-4">
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
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselDots count={workSamples.length} />
        </Carousel>
    );
}
