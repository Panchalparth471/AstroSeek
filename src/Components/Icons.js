import message from "../Assets/message.png";
import call from "../Assets/phone-solid 1.png";
import horo from "../Assets/horoscope-pisces-svgrepo-com 1.png";
import pooja from "../Assets/pooja 1.png"

function Icons()
{
    return (
        <div className="w-[100vw] h-[260px] mt-36 ">
            <div className="flex justify-evenly items-center h-full w-[100vw]">

                <div className="flex flex-col items-center w-[200px] h-[200px] aspect-square max-md:w-[60px]">
                    <div className="rounded-full flex justify-center items-center bg-[#FF8A00]  h-[110px] w-[110px] max-md:w-12 max-md:h-12">
                        <img className="max-md:w-7 max-md:h-7" src={message}></img>
                    </div>
                    <div className="font-semibold flex justify-center mt-2 items-center max-w-[140px] ml-2 text-[24px] max-sm:text-[13px]">Chat with Astrologer</div>
                </div>
                 
             <div className="flex flex-col items-center w-[200px] h-[200px] aspect-square max-md:w-[60px]">
                    <div className="rounded-full flex justify-center items-center bg-[#FF8A00]  h-[110px] w-[110px] max-md:w-12 max-md:h-12">
                        <img className="max-md:w-7 max-md:h-7" src={call}></img>
                    </div>
                    <div className="font-semibold flex justify-center items-center mt-2 max-w-[140px] ml-4 text-[24px] max-sm:text-[13px]">Talk with Astrologer</div>
                </div>

                  <div className="flex flex-col items-center w-[200px] h-[200px] aspect-square max-md:w-[60px]">
                    <div className="rounded-full flex justify-center items-center bg-[#FF8A00] h-[110px] w-[110px] max-md:w-12 max-md:h-12">
                        <img className="max-md:w-7 max-md:h-7" src={horo}></img>
                    </div>
                    <div className="font-semibold flex justify-center mt-2 items-center max-w-[140px] text-[24px] max-sm:text-[13px]">Horoscope</div>
                </div>

               <div className="flex flex-col items-center w-[200px] h-[200px] aspect-square max-md:w-[60px]">
                    <div className="rounded-full flex justify-center items-center bg-[#FF8A00]  h-[110px] w-[110px] max-md:w-12 max-md:h-12">
                        <img className="max-md:w-7 max-md:h-7" src={pooja}></img>
                    </div>
                    <div className="flex justify-center ml-4 mt-2 items-center font-semibold max-w-[140px] text-[24px] max-sm:text-[13px]">Book Pooja</div>
                </div>
            </div>
        </div>
    );
}

export default Icons;