import Logo from '/White.png'
import Image1 from '/Slider 1.jpg'
import Image2 from '/Slider 2.png'
import Image3 from '/Slider 3.png'
import React, { useState, useEffect } from 'react';

function Test(){
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

  <div className="flex justify-start ">
    <div className="h-[450px] w-[650px] pt-0 -my-[11px] mx-6">
        <div style={{ backgroundImage: `url(${images[currentIndex]})`}} className="shadow hover:shadow-md hover:scale-105 transition-transform duration-300, w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
        </div>
  
      <div className=" h-[300px] w-[500px] pt-0 -my-[10px]">
      <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500 bg-black">
        <h1 className='items-center justify-center text-center text-white'>Insert Announcements here</h1>
      </div>
      </div>

      <div className=" h-[200px] w-[500px] pt-1 self-end -my-[70px] -mx-[500px]">
      <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500 bg-black">
        <h1 className='items-center justify-center text-center text-white'>Insert Notifications here</h1>
      </div>
    </div>

  </div>

  
 
 </div>

    );
}

export default Test;