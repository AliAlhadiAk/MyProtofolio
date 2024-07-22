import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
    const container = (delay) =>({
        hidden: {x:-100, opacity:0},
        visible:{
            x:0,
        opacity:1,
    transition:{duration:0.5,delay:delay}        
}

    })
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
       <div className='w-full lg:w-1/2'>
         <div className='flex flex-col mx-5 items-center lg:items-start'>
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className='pb-16 text-6xl  font-thin tracking-tight lg:mt-16
            lg:text-8xl'>AliAboKhalil</motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
            bg-clip-text text-4xl text-transparent'>Full Stack Developer</motion.span>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className='my-2  text-xl max-w-xl  py-6 font-light tracking-tighter'>I am a passionate 15years old full stack developer with a knack for crafting robust and 
                scalable web applications.  
                I have honed my skills in front-end technologies like Reactjs, ReactNative,TypeScript, Redux and TaiwlindCss, as well as back-end technologies like Redis, Asp.Net, PostgreSQL, Xunit for testing,Mocking frameworks like Moq and NoSql Db like Firebase. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.</motion.p>
         </div>
       </div>
       <div className='w-full lg:w-1/2 lg:p-8'>
        <div className='flex justify-center'>
            <motion.img 
            initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.2}}
            className='h-[40vh] rounded' src='https://avatars.githubusercontent.com/u/166250920?v=4'/>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Hero
