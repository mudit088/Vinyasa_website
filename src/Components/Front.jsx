import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

const Front = () => {
  const [Nav, setNav] = useState(false);
  const links = [
    { id: 1, link: 'About' },
    { id: 2, link: 'Timeline' },
    // { id: 3, link: 'Vinyasa Global' },
    { id: 3, link: 'Team' },
    // { id: 4, link: 'Community' },
  ];

  return (
    <div className="">
      <video autoPlay loop muted className="w-full h-screen object-cover duration-300">
        <source src="/starsvid.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 w-full h-screen flex flex-col  items-center text-white ">
        <div className='flex float-left justify-start pr-96 '>
        <img src="/LOGO_Vinyasa.png" alt="Logo" className="h-32  absolute md:relative" />

        <ul className="hidden md:flex pl-64  items-center">
          {links.map(({ id, link }) => (
            <li key={id} className="px-8 cursor-pointer capitalize text-2xl text-white hover:scale-105 duration-200">
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        </div>

        <div onClick={() => setNav(!Nav)} className="cursor-pointer  ml-56 m-4 mt-10 z-10 text-gray-500 md:hidden">
          {Nav ? <FaTimes size={50} /> : <FaBars size={50} />}
        </div>

        {Nav && (
          <ul className="flex flex-col duration-300 justify-center  items-center scroll-m-0 top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link }) => (
              <li key={id} className="px-4 cursor-pointer duration-500 capitalize py-6 text-2xl">
                <Link onClick={() => setNav(!Nav)} to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="flex justify-center items-center font-semibold font-serif text-white m-10 md:m-0 pt-16 md:pt-36 md:text-3xl duration-500">
          <TypeAnimation
            sequence={[
              'Embark on a journey of creative exploration.',
              3000,
              'Dive into the realm of imaginative expression.',
              3000,
              'Delve into the limitless realms of creativity.',
              3000,
            ]}
            wrapper="span"
            speed={150}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
            duration={500}
          />
        </div>

        <div className="sm:flex sm:justify-center hidden items-center md:mt-20 md:animate-[wiggle_1s_ease-in-out_infinite]">
          <button className="text-black p-3 pr-8 pl-8 md:p-6 md:pr-20 md:pl-20 text-2xl md:text-3xl font-bold rounded-xl cursor-default hover:scale-110 duration-300 bg-white m-8 mt-12">
            Start your Journey
          </button>
        </div>

        <div className="flex justify-center items-center md:animate-bounce duration-500 mt-0 md:mt-20">
          <Link to="About" smooth duration={500}>
            <img src="/down-arrow.png" alt="" className="h-28 hover:scale-110 duration-300 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Front;
