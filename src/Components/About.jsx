import React from 'react'

const About = () => {
  return (
    <div name='About' className="w-full h-screen  bg-black text-white">
    <div className='md:max-w-screen-lg p-4 mx-auto flex flex-col justify-center '>
    <div className='pt-10'>
    <h1 className=" font-display text-zinc-300 text-center  text-3xl font-extrabold leading-none tracking-tight md:text-5xl  lg:text-8xl lg:mb-36">
       About
      </h1>
    </div>
    <div className=' md:m-0 flex justify-center items-center'>
    <section className='  rounded-2xl shadow-xl shadow-white '>
    <p className='text-sm md:text-2xl p-8'>Unlocking creativity and fostering connections lie at the heart of the Techno-Cultural Club at DSATM's Computer Science & Design Department. Our club serves as a vibrant hub where innovation meets expression, creating a unique space for students to explore the intersection of technology and culture. 
    <p className='pt-6'>
    The Techno-Cultural Club is dedicated to cultivating a dynamic environment that sparks creativity, promotes collaboration, and celebrates the fusion of technology and culture. Through a diverse range of activities and events, we aim to inspire our members to think beyond boundaries, embrace diversity, and contribute meaningfully to the world.
    </p>
    
    
    </p>
    </section>
    </div>
    <br />
</div>
</div>
  )
}

export default About