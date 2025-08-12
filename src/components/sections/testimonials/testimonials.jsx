"use client";

import { Badge } from "@/components/ui/badge";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselDots,
} from "@/components/ui/carousel";
import ReviewCarousel from "./reviewcarousel";
import testimonials from "@/utils/testimonialData";
import Autoscroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";

export default function Testimonials() {
    return (
        <section className="w-full md:mt-[600px]">
            <div className="px-5 md:px-0">
                <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Badge>Testimonials</Badge>
                    <h2>Hear from our clients</h2>
                    <p>
                        Hear from our happy clients about their experience
                        working with Refit and the quality of our craftsmanship
                    </p>
                </motion.div>
                <div className="flex flex-col gap-4 my-20">
                    <motion.div
                        className="hidden md:block"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <Carousel
                            plugins={[
                                Autoscroll({
                                    speed: 0.8,
                                    startDelay: 1000,
                                    direction: "backward",
                                    playOnInit: true,
                                    stopOnInteraction: false,
                                    stopOnMouseEnter: false,
                                    stopOnFocusIn: false,
                                    stopOnLastSnap: false,
                                    restartDelay: 1000,
                                }),
                            ]}
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                        >
                            <CarouselContent>
                                {testimonials.map((testimonial, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="basis-1/2 sm:basis-1/3 xxl:basis-1/4 xxxl:basis-1/5"
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, x: 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: index * 0.1,
                                                ease: "easeOut",
                                            }}
                                            viewport={{
                                                once: true,
                                                amount: 0.2,
                                            }}
                                        >
                                            <ReviewCarousel
                                                testimonial={testimonial}
                                            />
                                        </motion.div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </motion.div>
                    <motion.div
                        className="hidden md:block"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.4,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <Carousel
                            plugins={[
                                Autoscroll({
                                    speed: 0.8,
                                    startDelay: 1500,
                                    direction: "forward",
                                    playOnInit: true,
                                    stopOnInteraction: false,
                                    stopOnMouseEnter: false,
                                    stopOnFocusIn: false,
                                    stopOnLastSnap: false,
                                    restartDelay: 1000,
                                }),
                            ]}
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                        >
                            <CarouselContent>
                                {testimonials.map((testimonial, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="basis-1/2 sm:basis-1/3 xxl:basis-1/4 xxxl:basis-1/5"
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: index * 0.1,
                                                ease: "easeOut",
                                            }}
                                            viewport={{
                                                once: true,
                                                amount: 0.2,
                                            }}
                                        >
                                            <ReviewCarousel
                                                testimonial={testimonial}
                                            />
                                        </motion.div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </motion.div>
                    <motion.div
                        className="block md:hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full"
                        >
                            <CarouselContent>
                                {testimonials
                                    .slice(0, 3)
                                    .map((testimonial, index) => (
                                        <CarouselItem
                                            key={index}
                                            className="basis-1/1"
                                        >
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.95,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                    delay: index * 0.1,
                                                    ease: "easeOut",
                                                }}
                                                viewport={{
                                                    once: true,
                                                    amount: 0.2,
                                                }}
                                            >
                                                <ReviewCarousel
                                                    testimonial={testimonial}
                                                />
                                            </motion.div>
                                        </CarouselItem>
                                    ))}
                            </CarouselContent>
                            <CarouselDots count={3} />
                        </Carousel>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
