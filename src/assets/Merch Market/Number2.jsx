import Logo from '/White.png'
import { useState  } from 'react';
function Main(){
  //Array For Images
  const images = [
    {
      url: 'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp',
    },
    {
      url: 'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
    },
    {
      url: 'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',        
    },
    {
       url: 'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp',        
    },
  ];
  //Array For Images

    return( 
  <div className='bg-gradient-to-b from-[#122A42] to-[#1B408C] h-screen'>
  <header className='bg-[#122A42] bg-transparent'>
    <nav className='flex justify-evenly items-center w-[89%] mx-auto pr-5 relative'>
      <div className='mr-auto'> 
        <button type="button">
          <img className='shadow hover:shadow-md hover:scale-105 transition-transform duration-300 w-[110px] h-[110px]' 
            src={Logo} 
            draggable='false' 
            alt='Home'
          />
        </button>
      </div>

      <ul className='flex items-center gap-[30px] text-[19px] mr-[80px]'>
        <li>
          <button className="hover:text-[#FFD700] transition-colors duration-300 font-semibold drop-shadow-lg text-white">
            Categories
          </button>
        </li>
        <li>
          <button className="hover:text-[#FFD700] font-semibold drop-shadow-lg text-white">What's New</button>
        </li>
        <li>
          <button className="hover:text-[#FFD700] font-semibold drop-shadow-lg text-white">Favorites</button>
        </li>
        <li>
          <div className="flex items-center">
            <input
              type="text"
              className="outline-none border-black border-solid border-[2px] rounded-2xl w-[300px] h-[38px] text-[17px] placeholder:text-[13px] px-3 pb-1 text-left"
              placeholder="Search Product"/>
          </div>
        </li>
        <li>
          <button className="hover:text-[#FFD700] font-semibold drop-shadow-lg text-white btn glass">Cart</button>
        </li>
        <li>
          <button className="hover:text-[#FFD700] font-semibold drop-shadow-lg text-white btn glass">Notifications</button>
        </li>
      </ul>
    </nav>
  </header>

   {/* Slider Component*/}
  <div className='relative h-[470px] w-[700px] py-3 px-2 -my-[13px] mx-5' >
     <div style={{backgroundImage: `url(${images[0].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>

     </div>
  </div>
   {/* Slider Component*/}


</div>
    );
}

export default Main;