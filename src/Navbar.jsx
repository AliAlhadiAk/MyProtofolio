import React from 'react'
import './index.css'
import 'tailwindcss/tailwind.css';
import { FaGitAlt, FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
     <div className='flex flex-shrink-0 items-center'> 
      <h1 className='font-bold text-5xl'>AK</h1>
     </div>
     <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
      <a href='https://www.instagram.com/ali_abokhalil123/' target='/blank'><FaInstagram/></a>
      <a href='https://github.com/AliAlhadiAk' target='/blank'><FaGithub/></a>
      
     </div>
    </nav>
  )
}

export default Navbar
