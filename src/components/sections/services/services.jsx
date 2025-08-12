"use client";

import {
    Accordion,
    AccordionContent,
    AccordionTrigger,
    AccordionItem,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import services from "@/utils/servicesData";

export default function Services() {
    const [activeValue, setActiveValue] = useState("item-1");

    const activeService =
        services.find((service) => service.id === activeValue) || services[0];

    return (
        <section id="services" className="w-full bg-[#FAFAFA] py-20">
            <div className="mx-auto max-w-[1200px] px-5">
                <motion.div
                    className="flex flex-col items-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Badge>Services</Badge>
                    <h2>What we do</h2>
                    <p>
                        Find out which one of our services fit the needs of your
                        projects
                    </p>
                </motion.div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-20 min-h-[70vh]">
                    <motion.div
                        className="flex-1 w-full relative aspect-[600/685]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={activeService.images}
                                    alt={activeService.title}
                                    fill
                                    priority
                                    className="w-full h-auto rounded-lg object-cover"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                    <div className="flex-1 w-full">
                        <Accordion
                            className="w-full"
                            type="single"
                            collapsible
                            defaultValue="item-1"
                            value={activeValue}
                            onValueChange={(value) =>
                                setActiveValue(value || "item-1")
                            }
                        >
                            {services.map((service) => (
                                <div key={service.id}>
                                    <AccordionItem value={service.id}>
                                        <AccordionTrigger className="hover:text-gray-600 transition-colors duration-200">
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    src={service.icon}
                                                    alt={`${service.title} icon`}
                                                    width={24}
                                                    height={24}
                                                    className="w-6 h-6"
                                                />
                                                <h5>{service.title}</h5>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <motion.p
                                                initial={{ opacity: 0, x: 15 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    duration: 0.3,
                                                    delay: 0.1,
                                                    ease: "easeOut",
                                                }}
                                            >
                                                {service.description}
                                            </motion.p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </div>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}
