import React, { useState } from 'react';
import image from'./Project-dishes.png';
import image2 from './Books-project.jpeg';
import image3 from './Authentication-project.jpeg'
import eccom from './Eccomerce.jpg'
import app from './WhatsApp Image 2024-07-11 at 14.46.10_02aa515a.jpg'
import ai from './Ai Voice Asistant.jpg'


const Project = () => {
  const [projects, setProjects] = useState([
    {
      title: "Food-DeliveryApp",
      description: "A fully functional animated Food Delivery website  ",
      technologies: ["Redux", "React", "TailwindCss",],
      image:image
    },
    {
      title: "BookStore App",
      description: "An application for buying and renting books, with features such as AdminPanel, user profile,favoriteProdcuts,User OrderHistory, user authentication,Caching,ApiKeys ...",
      technologies: ["HTML", "CSS", "React", "Asp.Net","SqlServer","Redux"],
      image:image2
    },
    {
      title: "Authentication System",
      description: "An Authentication System that has alot of features such as user authentication,forgot and reset password,RefreshTokens,ApiKeys,Role-based Authoriztion,HashedPasswords",
      technologies: ["Asp.Net","SqlServer"],
      image:image3
    
    },
    {
      title: "Eccomerce Platform",
      description: "An animated eccomerce platform for buying prodcuts, with features like buying AddTocart,Caching,product details and alot more .",
      technologies: ["HTML", "Tailwnd css", "React", "Asp.net", "Postgresql"],
      image:eccom
      
    },
    {
      title: "Diliveroo App",
      description: "",
      technologies: ["React Native", "TypeScript"],
      image:app
      
    },
    {
      title: "Ai Voice Assistant",
      description: "A powerful voice assistant with abilities of ChatGPT and Dall-E, poviding you the best of both worlds",
      technologies: ["React Native", "Javascript","ChatGPT OpenAI","Dall-E"],
      image:ai
      
    },
  ]);

  return (
    <div className='border-b  border-neutral-900 pb-4 lg:mb-35'>
      <h1 className='my-20 text-center text-4xl'>Projects</h1>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center lg:flex">
            <div className='w-full lg:w-1/4'>
              {/* Assuming project.img is the URL of the image */}
              <img 
                width={150}
                height={150} 
                className='mb-6 rounded image-animate'
                src={project.image}
              />
            </div>
            <div className='w-full max-w-xl lg:w-3/4 div-animate'>
                <h6 className='mb-2 font-semibold'>{project.title}</h6>
                <p className=',b-4 text-neutral-400'>{project.description}</p>
                {project.technologies.map((tech,index)=>(
                    <span key={index}
                    className='mr-2 rounded bg-neutral-900
                    py-1 px-2 text-small

                    font-medium
                    text-purple-900'>
                        {tech}
                    </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
