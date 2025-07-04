import { assets, infoList, toolsData } from '@/assets/assets'
import { motion } from "motion/react"
import React from 'react'
import Image from 'next/image'

const About = ({isDarkMode}) => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='about' 
    className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo'>
            Introduction
        </motion.h4>
        <motion.h2 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center text-5xl font-Ovo'>
            About me
        </motion.h2>

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <motion.div 
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.6}}
            className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' className='w-full rounded-lg'/>
            </motion.div>
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}}
            className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo'>
                    I was born and raised in Princeton, NJ and now am a student at UPenn's Engineering School.
                    I am currently a Software Engineering intern at Capital One in McLean, VA, with interests in AI, 
                    backend development, and more!
                </p>
                <motion.ul 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.8, delay: 1}}
                className='grid grid-flow-row sm:grid-flow-col gap-6'>
                    {infoList.map(({icon, iconDark, title, description}, idx) => (
                        <motion.li
                        whileHover={{scale: 1.05}}
                        key={idx} 
                        className='border-[0.5px] border-gray-400
                        rounded-xl p-6 cursor-pointer hover:bg-lightHover
                        hover:-translate-y-1 duration-500 hover:shadow-black
                        dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                            <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                            <h3 className='my-4 font-semibold text-gray-700
                            dark:text-white'>{title}</h3>
                            <p className='text-gray-600 text-sm
                            dark:text-white/80'>{description}</p>
                        </motion.li>
                    ))}
                </motion.ul>
                <motion.h4 
                initial={{y:20, opacity: 0}}
                whileInView={{y:0, opacity: 1}}
                transition={{delay: 1.3, duration : 0.5}}
                className='my-6 text-gray-700 font-Ovo
                dark:text-white/80'>Tools I use</motion.h4>

                <motion.ul 
                 initial={{opacity: 0}}
                 whileInView={{opacity: 1}}
                 transition={{delay: 1.5, duration : 0.6}}
                className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool, idx) => (
                        <motion.li 
                        whileHover={{scale : 1.1}}
                        key={idx} 
                        className='flex items-center justify-center
                        w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg
                        cursor-pointer hover:-translate-y-1 duration-500'>
                            <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About
