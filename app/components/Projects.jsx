import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
            My work
        </h4>
        <h2 className='text-center text-5xl font-Ovo'>
            Highlighted programming projects
        </h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I have worked on several programming including full-stack iOS delevopment,
            machine learning, and more.
        </p>

        <div className='grid grid-cols-auto my-10 gap-5'>
            {workData.map(({title, description, bgImage}, idx) => (
                <div key={idx} 
                className='aspect-square bg-no-repeat bg-cov bg-center rounded-lg
                relative cursor-pointer group'
                style={{backgroundImage: `url(${bgImage})`}}>
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5
                    left-1/2 -translate-x-1/2 py-3 px-5 flex items-center 
                    justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold'>{title}</h2>
                            <p className='text-sm text-gray-700'>{description}</p>
                        </div>
                        <div className='border rounded-full border-black w-9
                        aspect-square flex items-center justify-center shadow-[2px_2px_0_#000]
                        group-hover:bg-lightHover transition'>
                            <Image src={assets.send_icon} alt='' className='w-5'/>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <a href='' className='w-max flex items-center justify-center gap-2 text-gray-700
        border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20
        hover:bg-lightHover duration-500'>
            Show more <Image src={assets.right_arrow_bold} alt='->' className='w-4'/>
        </a>
    </div>
  )
}

export default Projects