'use client';

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Link from 'next/link';


const slides = [
    {
        title: "Locally Roasted",
        highlight: "Specialty Coffee",
        desc: "Experience a modern coffee ritual powered by precision roasting and premium beans.",
        image: "/coffee1.png"
    },
    {
        title: "Future Roasting",
        highlight: "Perfect Aroma",
        desc: "Technology and tradition combined to create the most balanced cup.",
        image: "/coffee2.png"
    },
    {
        title: "Premium Beans",
        highlight: "Pure Experience",
        desc: "Sourced globally and roasted locally for exceptional quality.",
        image: "/coffee3.png"
    }
];

export default function Hero() {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((p) => (p + 1) % slides.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const slide = slides[index];

    return (

        <div className="relative w-full min-h-screen flex items-center bg-[#fafafa] overflow-hidden border">

            {/* futuristic aurora gradients */}

            <motion.div
                animate={{ x: [-200, 200, -200], y: [-50, 50, -50] }}
                transition={{ duration: 18, repeat: Infinity }}
                className="absolute -top-40 -left-40 w-150 h-175 bg-purple-200/40 blur-[160px] rounded-full"
            />

            <motion.div
                animate={{ x: [200, -200, 200], y: [50, -50, 50] }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute bottom-0 right-0 w-150 h-150 bg-cyan-200/40 blur-[160px] rounded-full"
            />

            {/* subtle futuristic grid */}

            {/* <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#00000022_1px,transparent_1px),linear-gradient(to_bottom,#00000022_1px,transparent_1px)] bg-[size:40px_40px]" /> */}

            {/* container */}

            <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center w-full">

                {/* TEXT */}

                <AnimatePresence mode="wait">

                    <motion.div
                        key={slide.title}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: .6 }}
                    >

                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">

                            {slide.title}
                            <br />

                            <span className="bg-linear-to-r from-amber-900 to-orange-400 text-transparent bg-clip-text">
                                {slide.highlight}
                            </span>

                        </h1>

                        <p className="mt-6 text-gray-600 max-w-xl">
                            {slide.desc}
                        </p>

                        <div className="mt-10 flex gap-4">

                            <Link
                                href="/menu"
                                className="px-7 py-4 rounded-xl bg-linear-to-r from-amber-900 to-orange-400 text-white shadow-lg hover:scale-[1.03] transition"
                            >
                                Explore Menu
                            </Link>

                            <Link
                                href="/contact"
                                className="px-7 py-4 border border-gray-300 rounded-xl backdrop-blur-md hover:border-gray-500 transition"
                            >
                                Visit Café
                            </Link>

                        </div>

                    </motion.div>

                </AnimatePresence>


                {/* IMAGE STAGE */}

                <div className="flex justify-center">

                    <AnimatePresence mode="wait">

                        <motion.div
                            key={slide.image}
                            initial={{ opacity: 0, scale: .9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: .9 }}
                            transition={{ duration: .8 }}
                            className="relative flex items-center justify-center"
                        >



                            <div className="absolute w-100 h-100 bg-linear-to-tr from-amber-200/60 to-orange-100/60 blur-[120px] rounded-full" />





                            <div className="relative backdrop-blur-xl rounded-3xl px-10 ">

                                <motion.div

                                >

                                    <img
                                        src={slide.image}
                                        alt="coffee"

                                        className=" "
                                    />

                                </motion.div>

                            </div>

                        </motion.div>

                    </AnimatePresence>

                </div>

            </div>

            {/* progress bar */}

            <motion.div
                key={index}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 10, ease: "linear" }}
                className="absolute bottom-0 left-0 h-0.75 bg-linear-to-r from-amber-400 to-orange-400"
            />

        </div >

    );
}


