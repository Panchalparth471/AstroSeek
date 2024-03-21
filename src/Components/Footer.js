import React from 'react';
import insta from "../Assets/insta.png";
import fb from "../Assets/fb.png";
import linkedin from "../Assets/linkedin.png";
import email from "../Assets/envelope-solid 1.png";
import call from "../Assets/phone-solid 1.png";

export default function Footer() {
    return (
        <div className='w-[100vw] mt-32 max-sm:mt-0 text-white bg-[#FF8A00] h-[340px] max-lg:h-[570px] px-8 max-lg:px-0 max-lg:justify-evenly flex justify-between items-center max-lg:flex-col'>
            <div className='flex max-w-[300px] flex-col gap-4 mb-8 justify-evenly items-center'>
                <div><h1 className='text-center text-[30px] max-lg:text-[22px]'>AstroSeek</h1></div>
                <div className='w-full font-medium max-lg:text-[15px] text-[20px]'>AstroSeek is the platform where you can change your lives forever.</div>
            </div>

            <div className='flex items-center w-[40%] max-sm:gap-10 max-md:justify-evenly justify-between max-md:w-[100vw]'>
             
                <div className='flex flex-col items-center'>
                 <div className='flex flex-col items-center w-full gap-4 font-medium text-[20px] max-lg:text-[15px]'><h1 className='w-full text-center flex flex-col items-center text-[30px] max-lg:text-[22px] max-[300px]:text-[18px] font-normal'>Coorporate Info <div className='bg-white rounded-lg w-10 h-1'></div></h1>
                    <div className='w-full flex justify-center cursor-pointer'><a className='w-full text-center'>Terms & Conditions</a></div>
                    <div className='w-full flex justify-center cursor-pointer'><a className='w-full text-center'>Privacy Policy</a></div>
                    <div className='w-full flex justify-center cursor-pointer'><a className='w-full text-center'>Disclaimer</a></div>
                        <div className='w-full flex justify-center cursor-pointer'><a className='w-full text-center'>About Us</a></div>
                </div>    
                </div>


                   <div className='flex flex-col items-center font-medium text-[20px] max-lg:text-[15px]'>
                    <div className='flex flex-col w-full gap-4 items-center'>
                        <h1 className='w-full text-[30px] font-normal text-center max-lg:text-[22px] flex flex-col max-[300px]:text-[18px] items-center'>Useful Links <div className='bg-white rounded-lg w-10 h-1'></div></h1>
                    <div className='w-full flex justify-center cursor-pointer'><a className='w-full text-center'>Kundli</a></div>
                    <div className='w-full flex justify-center cursor-pointer'><a className='w-full text-center'>Astrologers</a></div>
                    <div className='w-full flex justify-center cursor-pointer'><a className='w-full text-center'>Chat With Astrologers</a></div>
                    <div className='w-full flex justify-center cursor-pointer'><a className='w-full text-center'>Talk to Astrologer</a></div>
                </div>    
                </div>
            </div>

            <div className='flex flex-col max-w-[270px] gap-8 items-center'>
                <div className='w-full'><h1 className='text-[30px] text-center max-lg:text-[22px] font-normal max-[300px]:text-[18px] flex flex-col items-center'>Contact <div className='bg-white rounded-lg w-10 h-1'></div></h1></div>
                <div className='text-[20px] gap-4 flex flex-col items-center font-medium max-lg:text-[15px]'>
                    <div className='flex gap-4 w-full items-center'><img className='w-5 h-5' src={email}></img> Email: astroseek@help.co</div>
                    <div className='flex gap-4 w-full items-center'><img className='w-5 h-5' src={call}></img> Phone:+911234567890</div>
                    <div className='flex justify-evenly gap-6 ml-4 mt-2 items-center max-h-[50px]'>
                        <img className='max-sm:h-[30px] max-sm:w-[30px] cursor-pointer' src={insta}></img>
                        <img className='max-sm:h-[30px] max-sm:w-[30px] cursor-pointer' src={fb}></img>
                        <img className='max-sm:h-[30px] max-sm:w-[30px] cursor-pointer' src={linkedin}></img>
                    </div>
                </div>

            </div>
       </div>
   );
} 