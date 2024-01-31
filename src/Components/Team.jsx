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
    <div name="Team" className="items-center justify-center bg-black h-[800px] duration-500 ">
        <div className='pt-36'>
        <h1 className=" font-display text-zinc-300 text-center  text-4xl font-extrabold leading-none tracking-tight md:text-5xl  lg:text-8xl lg:mb-36">
       Team
      </h1>
      </div>
      <div className='flex items-center justify-center  gap-8'>
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
            // style={{ backgroundImage: `url(${SpaceCity})` }}
          >
            <h1 className="text-2xl font-bold/">Shantanu</h1>
            <p>Live on top of the world</p>
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            // style={{ backgroundImage: `url(${SpaceCity1})` }}
          >
            <h1 className="text-2xl font-bold/">Shantanu</h1>
            <p>----</p>
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
            // style={{ backgroundImage: `url(${SpaceCity})` }}
          >
            <h1 className="text-2xl font-bold/">Shantanu</h1>
            <p>Live on top of the world</p>
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            // style={{ backgroundImage: `url(${SpaceCity1})` }}
          >
            <h1 className="text-2xl font-bold/">Suhas</h1>
            <p>-----</p>
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
            // style={{ backgroundImage: `url(${SpaceCity})` }}
          >
            <h1 className="text-2xl font-bold/">Shantanu</h1>
            <p>Live on top of the world</p>
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            // style={{ backgroundImage: `url(${SpaceCity1})` }}
          >
            <h1 className="text-2xl font-bold/">Shriya</h1>
            <p>-----</p>
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
            // style={{ backgroundImage: `url(${SpaceCity})` }}
          >
            <h1 className="text-2xl font-bold/">Shantanu</h1>
            <p>Live on top of the world</p>
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            // style={{ backgroundImage: `url(${SpaceCity1})` }}
          >
            <h1 className="text-2xl font-bold/">Yuvraj</h1>
            <p>----</p>
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  
  )
}

export default Team