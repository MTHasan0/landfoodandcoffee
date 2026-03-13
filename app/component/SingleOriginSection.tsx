"use client";
import { motion } from "framer-motion";
import bean from '../../public/beanImg.png'
import { i, img } from "motion/react-client";
import Image from "next/image";

const origins = [
    {
        country: "Ethiopia",
        desc: "Light roast • Natural process • Floral & fruity",
        price: '14$',
        name: 'ODD Beans'

    },
    {
        country: "Kenya",
        desc: "Washed process • Bright acidity • Citrus notes",
        price: '14$',
        name: 'ODD Beans'

    },
    {
        country: "Indonesia",
        desc: "Bold body • Earthy tones • Deep chocolate finish",
        price: '14$',
        name: 'ODD Beans'

    },
    {
        country: "Guatemala",
        desc: "Balanced sweetness • Caramel & cocoa",
        price: '14$',
        name: 'ODD Beans'

    }
];

export const SingleOriginSection = () => {
    return (
        <section className="py-28  border-t border-white/5 ">
            <div className="max-w-7xl mx-auto px-6 ">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-color font-medium tracking-widest uppercase mb-2">Single Origin Beans</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-700">Roasted In-House</h3>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-gray-400 max-w-sm"
                    >
                        We source exceptional beans and roast them locally in small batches
                        to highlight their unique origin characteristics.
                    </motion.p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                    {origins.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="group relative  border border-white/5  overflow-hidden transition-colors hover:border-amber-500/30"
                        >
                            <div className="relative h-72 w-full overflow-hidden">
                                <Image
                                    src={bean}
                                    alt={item.country}
                                    fill
                                    className=" object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-amber-400 uppercase tracking-wider">
                                    {item.country}
                                </div>
                            </div>
                            <div className="p-8 bg-black">
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-2xl text-gray-700 font-bold group-hover:text-amber-500 transition-colors">
                                        {item.name}
                                    </h4>
                                    <span className="text-xl font-medium text-color">{item.price}</span>
                                </div>
                                <p className="text-gray-400 mb-6 line-clamp-2">
                                    {item.desc}
                                </p>


                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
};