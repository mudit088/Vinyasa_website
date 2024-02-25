import {React,  useState } from 'react'

import { motion } from "framer-motion";

const Team = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
  
    function handleFlip() {
      if (!isAnimating) {
        setIsFlipped(!isFlipped);
        setIsAnimating(true);
      }
    }
  return (
    <div name="Team" className="items-center justify-center bg-black  duration-500 h-full w-full ">
        <div className='p-10 sm:pt-36'>
        <h1 className=" font-display text-zinc-300 text-center  text-4xl font-extrabold leading-none  tracking-tight md:text-5xl  lg:text-8xl lg:mb-36">
       Team
      </h1>
      <p className='text-white text-3xl pl-20 pt-10 sm:pl-36 font-semibold'>
      Coordinators
      </p>
      </div>
      <div className='flex flex-col sm:flex-row items-center justify-center  gap-12'>
      <div
        className="flip-card w-[270px] h-[350px] rounded-md cursor-pointer"
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4 "
            style={{ backgroundImage: `url(/shan.jpg)` }}
          >
            <h1 className="text-2xl font-bold text-white">Shantanu</h1>
            <p >Blockchain</p>
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] border-[1px] text-white rounded-lg p-4 bg-gradient-to-r from-purple-500 to-black"
            // style={{ backgroundImage: `url(/shan.jpg)` }}
          >
            <h1 className="text-2xl font-bold text-white flex items-center justify-center pt-5">Blockchain</h1>
            <p className='flex items-center justify-center pt-14 text-xl text-white font-semibold'>Unleashing trust through decentralized transparency.</p>
          </div>
        </motion.div>
      </div>


      <div
        className="flip-card w-[270px] h-[350px] rounded-md cursor-pointer"
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url(/karma.jpg)` }}
          >
            <h1 className="text-2xl font-bold text-black">Karmanya</h1>
            <p className='text-black font-semibold'>Game Development</p>
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg bg-gradient-to-r from-purple-500 to-black p-4"
            // style={{ backgroundImage: `url(/karma.jpg)` }}
          >
            <h1 className="text-2xl font-bold text-white flex items-center justify-center pt-5">Game Development</h1>
            <p className='flex items-center justify-center pt-12 text-xl text-white font-semibold'>Game development: Where imagination meets interactive artistry, crafting worlds that captivate and challenge players.</p>
          </div>
        </motion.div>
      </div>



      <div
        className="flip-card w-[270px] h-[350px] rounded-md cursor-pointer"
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url(/suhas.jpg)` }}
          >
            <h1 className="text-2xl font-bold text-yellow-400 ">Suhas</h1>
            <p className='font-bold text-yellow-400 '>Design and Animation</p>
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg bg-gradient-to-r from-purple-500 to-black p-4"
            // style={{ backgroundImage: `url(/suhas.jpg)` }}
          >
            <h1 className="text-2xl font-bold text-white flex items-center justify-center pt-5">Design and Animation</h1>
          <p className='flex items-center justify-center pt-12 text-xl text-white font-semibold'>  Breathing life into creativity, where every frame tells a story and every pixel sparks imagination.</p>
          </div>
        </motion.div>
      </div>
      
      

      <div
        className="flip-card w-[270px] h-[350px] rounded-md cursor-pointer"
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url(/yuvi.jpg)` }}
          >
            <h1 className="text-2xl font-bold text-white">Yuvraj</h1>
            <p className='font-semibold '>Developer Relations</p>
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg bg-gradient-to-r from-purple-500 to-black p-4"
            // style={{ backgroundImage: `url(/yuvi.jpg)` }}
          >
            <h1 className="text-2xl font-bold text-white flex items-center justify-center pt-5">Developer Relations</h1>
          <p className='flex items-center justify-center pt-12 text-xl text-white font-semibold'>  Bridging the code with community, fostering collaboration that transforms challenges into shared successes.</p>
          </div>
        </motion.div>
      </div>
      </div>
     
         
      
      <p className='text-white text-3xl pl-36 font-semibold p-8 pt-32 '>
       Leads
      </p>

      <div className='mt-8 flex flex-col sm:flex-row items-center justify-center pb-20 gap-12'>

      <div
        className="flip-card w-[270px] h-[350px] rounded-md cursor-pointer"
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url(/praveen.jpg)` }}
          >
            <h1 className="text-2xl font-bold">G Praveen</h1>
            <p className='font-semibold'>AIML</p>
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg  bg-gradient-to-r from-yellow-500 to-black p-4"
            // style={{ backgroundImage: `url(/praveen.jpg)` }}
          >
           <h1 className="text-2xl font-bold text-white flex items-center justify-center pt-5">AIML</h1>
          <p className='flex items-center justify-center pt-12 text-xl text-white font-semibold'>  Where algorithms meet intuition, creating intelligent systems that learn, adapt, and redefine the future.</p>
          </div>
        </motion.div>
      </div>

      <div
        className="flip-card w-[270px] h-[350px] rounded-md cursor-pointer"
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url(/Mudit-img-removebg-preview.png)` }}
          >
            <h1 className="text-2xl font-bold text-black">Mudit</h1>
            <p className='font-semibold text-black'>Web Development</p>
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg bg-gradient-to-r from-purple-500 to-black p-4"
            // style={{ backgroundImage: `url(/Mudit-img-removebg-preview.png)` }}
          >
             <h1 className="text-2xl font-bold text-white flex items-center justify-center pt-5">Web Development</h1>
          <p className='flex items-center justify-center pt-12 text-xl text-white font-semibold'> Crafting digital experiences that seamlessly connect, innovate, and empower the online world.</p>
          </div>
        </motion.div>
      </div>


      <div
        className="flip-card w-[270px] h-[350px] rounded-md cursor-pointer"
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url(/ankit.jpg)` }}
          >
            <h1 className="text-2xl font-bold">Ankit</h1>
            <p>IOT</p>
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg bg-gradient-to-r from-yellow-500 to-black p-4"
            // style={{ backgroundImage: `url(/ankit.jpg)` }}
          >
             <h1 className="text-2xl font-bold text-white flex items-center justify-center pt-5">IOT</h1>
          <p className='flex items-center justify-center pt-12 text-xl text-white font-semibold'>  Connecting the physical world to the digital realm, weaving a tapestry of smart innovation for a more interconnected future.</p>
          </div>
        </motion.div>
      </div>
      </div>

      
      <div>
      <p className='text-white text-3xl pl-36 font-semibold p-8 pt-32 '>
       Co-Leads
      </p>
      </div>
      <div className='flex flex-col sm:flex-row items-center justify-center pb:10  gap-12'>
       
      <div
        className="flip-card w-[270px] h-[350px] rounded-md cursor-pointer"
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url(/vallabh.jpg)` }}
          >
            <h1 className="text-2xl font-bold text-black">Vallabh</h1>
            <p className='font-semibold'>Design and Animation</p>
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white bg-gradient-to-r from-yellow-500 to-black rounded-lg p-4"
            // style={{ backgroundImage: `url(/vallabh.jpg)` }}
          >
            <h1 className="text-2xl font-bold text-white flex items-center justify-center pt-5">Design and Animation</h1>
          <p className='flex items-center justify-center pt-10 text-xl text-white font-semibold'> Crafting visual symphonies that resonate emotion, where creativity dances with technology to bring imagination to life.</p>
          </div>
        </motion.div>
      </div>
      
     

     
      <div
        className="flip-card w-[270px] h-[350px] rounded-md cursor-pointer"
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url(/Kushal.jpg)` }}
          >
            <h1 className="text-2xl text-black font-bold">Kushal</h1>
            <p className='font-semibold text-black'>Blockchain</p>
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white bg-gradient-to-r from-yellow-500 to-black rounded-lg p-4"
            // style={{ backgroundImage: `url(/Kushal.jpg)` }}
          >
            <h1 className="text-2xl font-bold text-white flex items-center justify-center pt-5">Blockchain</h1>
            <p className='flex items-center justify-center pt-14 text-xl text-white font-semibold'>Unleashing trust through decentralized transparency.</p>
          </div>
        </motion.div>
      </div>
      </div>
      
    
    </div>
  
  )
}

export default Team