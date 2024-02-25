import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-900 p-5'>
        <div className='flex flex-col sm:flex-row justify-between items-center gap-10'>
            <div className=''>
                <img src="/LOGO_Vinyasa.png" alt="" className='h-24 sm:ml-36' />
            </div>
            <div className='flex gap-8 sm:mr-36'> 
            <ul>
                <li>
                    <button className=''>
                    
                    <a href="https://www.instagram.com/vinyasacsd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <img src="/instagram.png" alt="" className='h-8' />
                    </a>
                    </button>
                </li>
                </ul>

                {/* <ul>
                <li>
                    <button className=''>
                    
                    <a href="">
                    <img src="/linkedin.png" alt="" className='h-8' />
                    </a>
                    </button>
                </li>
                </ul> */}

               {/* <ul>
                <li>
                    <button className=''>
                    
                    <a href="https://github.com/mudit088/Vinyasa_website.git">
                    <img src="/github (1).png" alt="" className='h-8' />
                    </a>
                    </button>
                </li>
                </ul> */}

               {/* <ul>
                <li>
                    <button className=''>
                    
                    <a href="https://www.instagram.com/vinyasacsd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <img src="/discord.png" alt="" className='h-8' />
                    </a>
                    </button>
                </li>
                </ul> */}

                {/* <ul>
                <li>
                    <button className=''>
                    
                    <a href="https://www.instagram.com/vinyasacsd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <img src="/school.png" alt="" className='h-8' />
                    </a>
                    </button>
                </li>
                </ul> */}

            </div>
        </div>
        <div className='flex items-center justify-end mr-10'>
            {/* <p className='text-white'>All rights reserved</p> */}
            <p className='text-white pr-96 mr-20'>Made with Love By Vinyasa 2024</p>
            <p className='text-white'>Phone : 8239267827 <br /> 1DT21CG049@dsatm.edu.in</p>
        </div>
      
    </div>
  )
}

export default Footer
