"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselDots,
} from "@/components/ui/carousel";
import Autoscroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";

const images = [
    "/assets/aboutus/1.jpg",
    "/assets/aboutus/2.jpg",
    "/assets/aboutus/3.jpg",
    "/assets/aboutus/4.png",
    "/assets/aboutus/5.png",
];

const duplicateImages = [...images, ...images];

const status = [
    {
        number: "8",
        title: "Years Experience",
        description: "Improving homes with expert craftsmanship for years",
    },
    {
        number: "8",
        title: "Projects completed",
        description:
            "Over 250 successful projects delivered with quality and care",
    },
    {
        number: "30",
        title: "Skilled Tradespeople",
        description: "Our team of 30 experts ensures top-quality results",
    },
    {
        number: "100%",
        title: "Client Satisfaction",
        description:
            "All of our clients are satisfied with our work and service",
    },
];

export default function AboutUs() {
    return (
        <section id="about-us" className="w-full">
            <div className="px-5 md:px-0">
                <div className="mx-auto max-w-[1200px] px-5">
                    <div className="mb-10 flex flex-col md:flex-row justify-between gap-5 md:gap-10">
                        <motion.div
                            className="flex-1"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Badge>About Us</Badge>

                            <h2>Home</h2>
                            <h2>Improvement</h2>
                            <h2>Specialist</h2>
                        </motion.div>
                        <motion.div
                            className="flex-1"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: 0.2,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <p className="text-lg">
                                Welcome to LifetimeArt , your trusted home
                                improvement experts, dedicated to transforming
                                homes with precision and care. With years of
                                experience in building kitchens, bathrooms,
                                garages, and more, we take pride in delivering
                                top-quality craftsmanship and a seamless
                                customer experience. Our mission is to bring
                                your vision to life while ensuring clear
                                communication and expert guidance at every step.
                                Let&apos;s create a home you&apos;ll love!
                            </p>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    className="my-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <Carousel
                        className="hidden md:block"
                        plugins={[
                            Autoscroll({
                                speed: 2,
                                startDelay: 500,
                                direction: "forward",
                                playOnInit: true,
                            }),
                        ]}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                    >
                        <CarouselContent>
                            {duplicateImages.map((src, index) => (
                                <CarouselItem
                                    key={index}
                                    className="md:basis-1/3 lg:basis-1/4"
                                >
                                    <motion.div
                                        className="relative w-full aspect-[400/500] rounded-xl"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: (index % 5) * 0.1,
                                            ease: "easeOut",
                                        }}
                                        viewport={{ once: true, amount: 0.2 }}
                                    >
                                        <Image
                                            src={src}
                                            alt={`carousel image ${index + 1}`}
                                            fill
                                            priority
                                            className="object-cover"
                                        />
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    <Carousel
                        className="block md:hidden"
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                    >
                        <CarouselContent>
                            {images.slice(0, 5).map((src, index) => (
                                <CarouselItem key={index}>
                                    <motion.div
                                        className="relative w-full aspect-[400/500] rounded-xl"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                            ease: "easeOut",
                                        }}
                                        viewport={{ once: true, amount: 0.2 }}
                                    >
                                        <Image
                                            src={src}
                                            alt={`carousel image ${index + 1}`}
                                            fill
                                            priority
                                            className="object-cover"
                                        />
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselDots count={5} />
                    </Carousel>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mx-auto max-w-[1200px] px-5 place-items-center lg:place-items-start">
                    {status.map((status, index) => (
                        <motion.div
                            key={index}
                            className="w-full"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.1,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h3 className="mb-2">{status.number}</h3>
                            <h4 className="mb-2">{status.title}</h4>
                            <p>{status.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
