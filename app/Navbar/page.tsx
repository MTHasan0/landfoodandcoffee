'use client';
import Link from 'next/link';
import '../globals.css'
import Image from 'next/image';
import { motion } from 'framer-motion';
import logo from './land-logo.png'


const page = () => {
    const navItemsLeft = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Menu', link: '/menu' }
    ]
    const navItemsRight = [

        { name: 'Beans', link: '/beans' },
        { name: 'Contact', link: '/contact' }

    ]
    const navItems = [...navItemsLeft, ...navItemsRight]
    return (

        <div className="navbar flex lg:px-20 uppercase text-md font-medium fixed top-0 z-50 text-slate-700 backdrop-blur-md ">

            <div className="navbar-start">
                <motion.section
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className=''>
                    <Link href='/' className=''>
                        {/* <img src={logo.src} className=' w-32' alt="Logo" /> */}
                        <Image
                            src={logo}
                            alt="Logo"
                            className=' w-40 py-2'
                        />
                    </Link>
                </motion.section>
            </div>

            <div className=' navbar-center md:hidden lg:hidden'>

            </div>
            <div className="navbar-end">
                <div className="dropdown md:hidden lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content right-0 rounded-box mt-3 w-32 p-2 text-center bg-black/60 text-white">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}

                            className='flex flex-col '>

                            {
                                navItems.map((item, id) => {
                                    return (
                                        <Link key={id} href={item.link} className='py-2 px-5  '>{item.name}</Link>
                                    )
                                })
                            }
                        </motion.div>
                    </ul>
                </div>
                <div className=' hidden md:flex lg:flex'>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className=' flex gap-10'>

                        {
                            navItems.map((item, id) => {
                                return (
                                    <Link key={id} href={item.link} className='py-2 hover:text-[#a76d26] hover:border-b transition-all duration-500 '>{item.name}</Link>
                                )
                            })
                        }
                    </motion.div>
                </div>

            </div>

        </div>

    )


};

export default page;