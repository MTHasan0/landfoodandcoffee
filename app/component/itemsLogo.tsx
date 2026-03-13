
'use client';
import { BiSolidCake, BiSolidCoffee } from 'react-icons/bi';
import { CiCoffeeCup } from 'react-icons/ci';
import { MdFastfood } from 'react-icons/md';
import { motion } from 'framer-motion';
import '../../app/globals.css'
const itemsLogo = () => {
    const icons = [
        <BiSolidCoffee />,
        <CiCoffeeCup />,
        <BiSolidCake />,
        <MdFastfood />
    ]
    return (
        <div>
            <div

                className=' bg-gray-50   flex items-center justify-center w-full gap-10 py-5 text-4xl '>
                {

                    icons.map((Icon, index) =>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 1 }}
                            className=' text-amber-800 text-4xl  '
                        >
                            {Icon}

                        </motion.div>)
                }





            </div>
        </div>
    );
};

export default itemsLogo;