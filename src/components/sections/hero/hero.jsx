"use client";

import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="bg-[#101014] text-white w-full">
            <div className="mx-auto max-w-[1200px] pb-10 pt-30 md:pt-10 px-5">
                <div className="xl:flex xl:flex-row xl:gap-20  items-center justify-between ">
                    <div className="relative w-full xl:flex-1 h-[500px] xl:h-auto rounded-xl overflow-hidden p-5 xl:p-0">
                        <div className="absolute inset-0 xl:hidden">
                            <motion.div
                                className="h-full w-full"
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <Image
                                    src="/assets/hero/hero.jpg"
                                    alt="Background for text"
                                    fill
                                    priority
                                    className="object-cover object-center"
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-black/40" />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end xl:justify-start">
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                            >
                                <Badge className="mb-2 px-2 py-2 rounded-xl">
                                    <span className="flex h-3 w-3 items-center justify-center rounded-full bg-gray-400 mr-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                                    </span>
                                    Available to work
                                </Badge>
                            </motion.div>

                            <motion.h1
                                className="mb-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                            >
                                Your trusted partner for quality home
                                improvement
                            </motion.h1>

                            <motion.p
                                className="mb-4"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                            >
                                LifetimeArt delivers expert home improvements,
                                creating beautiful and functional spaces with
                                quality craftsmanship.
                            </motion.p>

                            <motion.button
                                className="inline-flex items-center rounded-full bg-gray-200/10 px-3 py-2 text-md font-medium text-white hover:bg-gray-600 transition-all duration-300 w-fit"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.7 }}
                                whileHover={{ y: -2, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>Work with us</span>
                                <span className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                                    <ArrowUpRight className="h-4 w-4" />
                                </span>
                            </motion.button>
                        </div>
                    </div>

                    <motion.div
                        className="hidden xl:block relative w-full flex-1 aspect-[652/835] overflow-hidden rounded-xl"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Image
                            src="/assets/hero/hero.jpg"
                            alt="Hero image"
                            fill
                            priority
                            className="object-cover object-center"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
