import Vector from "../Assets/Vector.png"

function Main()
{
    return (
        <div className="flex w-[100vw] mt-28 flex-col max-md:items-center">
            <div className="flex w-full max-md:flex-col max-md:items-center ">
                <div className="flex flex-col p-10 mt-5 gap-10 ml-[3rem] max-md:p-0 max-md:gap-5 max-md:ml-0">
                      <h1 className="text-[50px] flex justify-center font-semibold max-md:p-4 max-w-[40rem] max-md:w-full text-[#FF8A00] max-md:text-[30px]">Your Path Is illuminated By Road-Map Of Stars.....</h1>
                     <div className="flex max-md:justify-center font-medium text-[20px] max-w-[50rem] max-md:max-w-full max-md:p-4 max-md:text-[15px]">He Stars In The Night Sky Act As A Celestial GPS, Providing Navigational Guidance For Sailors And Travelers. The Stars Are Arranged In Patterns And Constellations That Can Be Used To Identify Location, Direction, And Time.He Stars In The Night Sky Act As A Celestial GPS, Providing Navigational Guidance For Sailors And Travelers.</div>

                </div>
                <div className="mt-[2%] flex justify-center items-center ml-20 max-w-[27rem] max-md:mr-0 max-h-[27rem] max-md:ml-0 aspect-square  "><img id="wheel" className="max-w-full p-2 aspect-square max-h-full" src={Vector}></img></div>
                
            </div>
            <div className=" flex max-md:ml-0 cursor-pointer max-md:mt-20 max-w-[25rem] ml-20 max-md:justify-center max-md:items-center"><button className=" rounded-md w-[360px] h-[69px] max-sm:w-[200px] max-sm:h-[60px] bg-[#FF8A00] text-white font-semibold">Book an Appointment</button></div>
      </div>
  );
}


export default Main;