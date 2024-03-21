import Hamburger from 'hamburger-react';

import { useState } from "react";
function Navbar() {
     const [isOpen, setOpen] = useState(false)
    return (
    
               <div className="flex fixed bg-white z-[1000] flex-row justify-between w-[100vw] h-[80px] shadow-md">
            <div className="p-2 ml-5 text-[30px] max-lg:text-[20px] max-lg:ml-4 flex justify-center items-center">AstroSeek</div>
            <div className="flex text-[20px] max-lg:text-[13px] gap-4 max-lg:gap-2 mr-10 max-md:hidden">
                <div className="p-4 flex justify-center items-center cursor-pointer hover:scale-110 transition-all">Talk to Astrologer</div>
                <div className="p-4 flex justify-center items-center cursor-pointer hover:scale-110 transition-all">Kundli</div>
                <div className="p-4 flex justify-center items-center  cursor-pointer hover:scale-110 transition-all">Horoscope</div>
                <div className="p-4 flex justify-center items-center cursor-pointer hover:scale-110 transition-all">Chat with Astrologer</div>
                 <div className=" p-4 relative flex justify-center items-center">
                    <button className="w-[100px] h-[50px] max-lg:w-[80px] max-lg:h-[40px] top-0 bg-[#FF8A00]">Signup</button>
                </div>
            </div>
           

            
            


 <div id="box" className={`top-0 pt-5 z-[150] flex flex-col md:hidden ${isOpen ? 'bg-[#FF8A00] h-[100vh] max-[300px]:w-[80%] w-[70%] ' : 'w-0  h-screen' } items-end gap-10 text-white`}>
   <Hamburger toggled={isOpen} toggle={setOpen} color="orange"/>
    {
        isOpen ? (
            <>
                <a href="#" className="place-self-center">Talk to Astrologer</a>
                <a href="#" className="place-self-center">Kundli</a>
                <a href="#" className="place-self-center">Horoscope</a>
                <a href="#" className="place-self-center">Chat With Astrologer</a>
    
                <div className='place-self-center'> <button className="w-[100px] h-[50px] text-[#FF8A00] bg-white">Signup</button></div>
                
            </>
        ) : null
    }
</div> 
             
            
 

        </div>

        

            
    );
      
}

export default Navbar;











