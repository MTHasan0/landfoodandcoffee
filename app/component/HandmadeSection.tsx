"use client";
import { motion } from "framer-motion";

export const HandmadeSection = () => {
    return (
        <section className="py-28 bg-[#0d0d0d] text-white">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Everything Made From Scratch
                    </h2>

                    <p className="text-gray-400 leading-relaxed mb-6">
                        We bake our bread daily.
                        We craft our own chocolate.
                        We churn our homemade ice cream.
                        And we roast every bean ourselves.
                    </p>

                    <p className="text-gray-500">
                        Because true quality can’t be outsourced.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="border border-amber-500/20 p-12 text-center"
                >
                    <h3 className="text-3xl font-bold text-amber-400 mb-4">
                        100% In-House Craft
                    </h3>
                    <p className="text-gray-400 text-sm">
                        From bean to bread.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};