"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import MobileCarousel from "./MobileCarousel";
import { div } from "motion/react-client";


interface Story {
    id: number;
    image: string;
    name: string;
    description: string;
    price: string;
    category: string;
}

const featuredItems: Story[] = [
    {
        id: 1,
        name: "Midnight Espresso",
        description: "A bold, dark roast with notes of cocoa and black cherry.",
        price: "$4.50",
        image: "https://res.cloudinary.com/dyijaykqi/image/upload/v1767299004/coffee-3759024_1280_x8x3s0.jpg",
        category: "Hot Coffee"
    },
    {
        id: 2,
        name: "Caramel Macchiato",
        description: "Creamy steamed milk with vanilla-flavored syrup and espresso.",
        price: "$5.25",
        image: "https://res.cloudinary.com/dyijaykqi/image/upload/v1767299315/coffee-1004252_1280_hb52ah.jpg",
        category: "Signature"
    },
    {
        id: 3,
        name: "Cold Brew Tonic",
        description: "Slow-steeped cold brew mixed with citrus and sparkling tonic.",
        price: "$6.00",
        image: "https://res.cloudinary.com/dyijaykqi/image/upload/v1767388420/gin-and-tonic-4478219_1280_o6k0f2.jpg",
        category: "Cold Brew"
    },
    {
        id: 4,
        name: "Cold Brew Tonic",
        description: "Slow-steeped cold brew mixed with citrus and sparkling tonic.",
        price: "$6.00",
        image: "https://res.cloudinary.com/dyijaykqi/image/upload/v1767388420/gin-and-tonic-4478219_1280_o6k0f2.jpg",
        category: "Cold Brew"
    },
    {
        id: 5,
        name: "Cold Brew Tonic",
        description: "Slow-steeped cold brew mixed with citrus and sparkling tonic.",
        price: "$6.00",
        image: "https://res.cloudinary.com/dyijaykqi/image/upload/v1767388420/gin-and-tonic-4478219_1280_o6k0f2.jpg",
        category: "Cold Brew"
    },
    {
        id: 6,
        name: "Cold Brew Tonic",
        description: "Slow-steeped cold brew mixed with citrus and sparkling tonic.",
        price: "$6.00",
        image: "https://res.cloudinary.com/dyijaykqi/image/upload/v1767388420/gin-and-tonic-4478219_1280_o6k0f2.jpg",
        category: "Cold Brew"
    },
    {
        id: 7,
        name: "Cold Brew Tonic",
        description: "Slow-steeped cold brew mixed with citrus and sparkling tonic.",
        price: "$6.00",
        image: "https://res.cloudinary.com/dyijaykqi/image/upload/v1767388420/gin-and-tonic-4478219_1280_o6k0f2.jpg",
        category: "Cold Brew"
    },


];

const StoryCard = ({ story }: { story: Story }) => {
    return (
        <motion.div
            className="relative w-72 h-96 shrink-0 rounded-lg overflow-hidden shadow-xl group"
            whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
        >
            <img
                src={story.image}
                alt={story.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 pointer-events-none"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                <h3 className=" tracking-wide">{story.description}</h3>
            </div>
        </motion.div>
    );
};

const FeaturedMenu = () => {
    const trackRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [dragConstraint, setDragConstraint] = useState(0);

    useEffect(() => {
        const calculateConstraints = () => {
            if (containerRef.current && trackRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const trackWidth = trackRef.current.scrollWidth;
                setDragConstraint(containerWidth - trackWidth);
            }
        };
        calculateConstraints();
        window.addEventListener("resize", calculateConstraints);

        return () => window.removeEventListener("resize", calculateConstraints);
    }, []);


    return (

        <div>
            <div className="hidden md:flex lg:flex  w-full py-12 md:py-20 flex-col items-center justify-center">
                <div className="  w-full max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className=" text-color font-medium tracking-widest uppercase mb-2">Our Specialties</h2>
                            <h3 className=" text-slate-700 text-4xl md:text-5xl font-bold">Top Rated</h3>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-gray-400 max-w-sm"
                        >
                            Handpicked favorites from our baristas, crafted with seasonal beans and unique flavor profiles.
                        </motion.p>
                    </div>

                    <motion.div
                        ref={containerRef}
                        className="overflow-hidden cursor-grab"
                        whileTap={{ cursor: "grabbing" }}
                    >
                        <motion.div
                            ref={trackRef}
                            className="flex space-x-6 pb-6 px-4"
                            drag="x"
                            dragConstraints={{
                                right: 0,
                                left: dragConstraint - 32,
                            }}
                            dragElastic={0.15}
                        >
                            {featuredItems.map((story) => (
                                <StoryCard key={story.id} story={story} />
                            ))}
                        </motion.div>
                    </motion.div>


                </div>
            </div>
            <div className=" flex md:hidden lg:hidden w-full py-12 md:py-20 flex-col items-center justify-center">
                <MobileCarousel />
            </div>


        </div>

    );
};

export default FeaturedMenu;