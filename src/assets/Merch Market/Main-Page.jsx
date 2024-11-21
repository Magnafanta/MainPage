import Logo from '/White.png'
import Image1 from '/Slider 1.jpg'
import Image2 from '/Slider 2.png'
import Image3 from '/Slider 3.png'
import React, { useState, useEffect } from 'react';
function Slide() {

  const images = [Image1, Image2, Image3];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);


    return(
      <div className="bg-gradient-to-b from-[#122A42] to-[#1B408C] h-screen">
      <header className="bg-[#122A42]  bg-transparent">
        <nav className="flex justify-evenly items-center px-[85px] py-1 max-w-screen-xl mx-auto">

          <div className='ml-[-60px]'>
            <button type="button">
              <img className="w-[105px] h-[105px] shadow hover:shadow-md hover:scale-105 transition-transform duration-300" 
                src={Logo}
                draggable="false"
                alt="Home"
               />
             </button>
          </div>
    
          <ul className="hidden md:flex items-center gap-[35px] text-white text-[17px]">
            <li>
              <button className="hover:text-[#FFD700] transition-colors duration-300 font-semibold">
                Categories
              </button>
            </li>
            <li>
              <button className="hover:text-[#FFD700] transition-colors duration-300 font-semibold">
                What's New
              </button>
            </li>
            <li>
              <button className="hover:text-[#FFD700] transition-colors duration-300 font-semibold">
                Favorites
              </button>
            </li>
            <li className="relative">
            <input
              type="text"
              className=" text-black outline-none border-black border-solid border-[2px] rounded-2xl w-[350px] h-[38px] text-[17px] placeholder:text-[13px] px-3 pb-1 text-left"
              placeholder="Search Product"/>
            </li>
            <li>
              <button className="hover:text-[#FFD700] transition-colors duration-300 font-semibold">
                Cart
              </button>
            </li>
            <li>
              <button className="hover:text-[#FFD700] transition-colors duration-300 font-semibold">
                Notifications
              </button>
            </li>
          </ul>
    
        </nav>
      </header>
    
      <div className="flex justify-start">
      <div className="relative h-[460px] w-[590px] pt-1 -my-[12px] mx-4">
      <div style={{ backgroundImage: `url(${images[currentIndex]})`}} className="shadow hover:shadow-md hover:scale-105 transition-transform duration-300, w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
      </div>

    <div className="relative h-[260px] w-[590px] pt-1 -my-[11px]">
    <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500 bg-white">
      <h1 className='items-center justify-center text-center'>Insert Announcements here</h1>
    </div>
    </div>

 <div className="h-[195px] w-[590px] self-end -my-[14px] -mx-[590px]">
    <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500 bg-white">
      <h1 className='items-center justify-center text-center'>Insert Notifications here</h1>
    </div>
  </div>

 </div>

 </div>
    );
}

export default Slide