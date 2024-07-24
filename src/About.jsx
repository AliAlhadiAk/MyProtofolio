import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1  className='my-20 text-center text-4xl'>
            About <span className='text-neutral-500'>Me</span>
        </h1>
        <div className='flex flex-wrap justify-center'>
            <div className=' w-full lg:w-1/2'>
              <motion.div 
              whileInView={{opacity:1 , x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:0.5}}
              className='flex justify-center items-center lg:justify-start'>
                <p className='my-2 max-w-xl py-6 '>I am a dedicated and 
                    versatile full stack developer with a passion for creating efficient and user-friendly web applications.  I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.  I have worked with a variety of technologies, including React, Reduxjs, Asp.net, MsSql, PostgreSQL, and Firebase. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects., and
                     contributing to open-source projects.</p>
              </motion.div>
            </div>
        </div>
      
    </div>
  )
}

export default About
