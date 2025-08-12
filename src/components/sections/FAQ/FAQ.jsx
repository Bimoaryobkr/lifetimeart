"use client";

import { ArrowUpRight } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionTrigger,
    AccordionItem,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import questions from "@/utils/questionData";
import { motion } from "framer-motion";

export default function FAQ() {
    return (
        <section id="faq" className="w-full">
            <div className="mx-auto max-w-[1440px] px-10 py-10">
                <div className="flex flex-col xl:flex-row gap-10">
                    <div className="flex-1 w-full">
                        <motion.div
                            className="flex flex-col items-center xl:items-start gap-5"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Badge>FAQ</Badge>
                            <h2>Answering Your Question</h2>
                            <p>
                                Got more questions? Send us your enquiry below
                            </p>
                            <button className="inline-flex items-center rounded-full bg-gray-200 px-6 py-3 text-lg font-medium text-black hover:bg-gray-300 transition">
                                <span>Get in touch</span>
                                <span className="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                                    <ArrowUpRight className="h-5 w-5" />
                                </span>
                            </button>
                        </motion.div>
                    </div>
                    <div className="flex-2 w-full">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            defaultValue="item-1"
                        >
                            {questions.map(({ id, question, answer }) => (
                                <AccordionItem
                                    key={id}
                                    value={id}
                                    className="border-none rounded-md px-4 bg-secondary mb-2"
                                >
                                    <AccordionTrigger>
                                        <h4>{question}</h4>
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
                                            {answer}
                                        </motion.p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}
