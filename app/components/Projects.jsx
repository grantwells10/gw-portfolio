import { assets, workData } from '@/assets/assets'
import { motion } from "motion/react"
import React, { useState } from 'react'
import Image from 'next/image'

const Projects = ({isDarkMode}) => {
  const [showTooltip, setShowTooltip] = useState({});

  const toggleTooltip = (title) => {
    setShowTooltip(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id='projects' 
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.9, duration: 0.6}}
        className='flex flex-col gap-8 my-10'
      >
        {workData.map(({title, description, bgImage, url, tech}, idx) => (
          <motion.div 
            key={idx}
            whileHover={{scale: 1.02}}
            transition={{duration: 0.7}}
            className='relative bg-white rounded-lg shadow-lg dark:bg-gray-800 border-[1px] border-black dark:border-white'
          >
            {/* Removed overflow-hidden from the card container */}
            <div className='flex flex-col md:flex-row'>
              <div 
                className='w-full md:w-2/5 h-64 bg-no-repeat bg-cover bg-center overflow-hidden'
                style={{backgroundImage: `url(${bgImage})`}}
              />
              <div className='w-full md:w-3/5 p-6'>
                <div className="flex justify-between items-start w-full">
                  <div>
                    <h3 className='text-xl font-semibold mb-2'>{title}</h3>
                    <p className='text-gray-600 dark:text-gray-300'>{description}</p>
                  </div>
                  <div className="relative">
                    <div className={`border rounded-full border-black w-9 h-9 
                      flex items-center justify-center shadow-[2px_2px_0_#000]
                      hover:bg-lightHover dark:border-white dark:hover:bg-darkHover 
                      transition cursor-pointer ${title === "ILMUNC App" ? "cursor-help" : ""}`}
                    >
                      {title === "ILMUNC App" ? (
                        <div 
                          className="relative"
                          onClick={() => toggleTooltip(title)}
                          onTouchStart={() => toggleTooltip(title)}
                          onMouseEnter={() => setShowTooltip(prev => ({...prev, [title]: true}))}
                          onMouseLeave={() => setShowTooltip(prev => ({...prev, [title]: false}))}
                        >
                          <Image 
                            src={isDarkMode ? assets.github_dark : assets.github_light} 
                            alt="GitHub"
                            width={20} 
                            height={20}
                          />
                          <div className={`${showTooltip[title] ? 'opacity-100 visible' : 'opacity-0 invisible'} 
                            fixed sm:absolute transform -translate-x-1/2 left-1/2
                            bg-black dark:bg-white 
                            text-white dark:text-black text-sm rounded-md py-1 px-2 w-48
                            transition-opacity duration-200
                            pointer-events-none
                            -top-12 z-50`}
                          >
                            Private repo - Contact me to view
                          </div>
                        </div>
                      ) : (
                        <a 
                          href={url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Image 
                            src={isDarkMode ? assets.github_dark : assets.github_light} 
                            alt="GitHub"
                            width={20} 
                            height={20}
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className='mt-4 space-y-2'>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Technologies used:
                    <span className='ml-2 text-gray-700 dark:text-gray-300'>
                      {tech}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Projects