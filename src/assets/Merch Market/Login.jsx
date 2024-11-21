import Background from '/Background.png';
import Logo from '/Logo.png'

function Login(){
    return( 
      <div className='flex justify-center items-center bg-cover h-screen' style={{backgroundImage: `url(${Background})`}}>
       <div className=" flex justify-center items-center bg-gradient-to-r from-white to-[#CECBCB] rounded-[110px] border-[3px] border-solid border-black w-[890px] h-[580px] flex-col">       
       <img className="w-[230px] h-[230px]" src={Logo} draggable='false'></img>

        <input type="text" required className=" outline-none	 rounded-lg border-black border-solid border-[2px] w-[40%] h-[60px] py-2 px-4 placeholder-gray-500 mt-[20px] mb-[20px]"  placeholder="Email" />
       
        <input type="password" required className=" outline-none	 rounded-lg border-black border-solid border-[2px] w-[40%] h-[60px] py-2 px-4 placeholder-gray-500" placeholder="Password" />
       
       <button type="submit" draggable='false' className=" hover:bg-[#000000] -mt-[-30px] mb-[110px] text-white font-semibold border-black border-solid border-[2px] h-[50px] w-[35%] bg-gradient-to-r from-[#003194] to-[#122A42] rounded-lg btn">Login</button>

       <h1 className="text-center text-black -mt-[90px]">
          Don't have an account?  
       <a href="/Login" className="text-blue-500 underline ml-1 hover:text-[#122A42]">Sign up</a>
       </h1>
      
      </div>
    </div>
    );
}

export default Login;