import space from "../Assets/Rectangle 1182.png";

function What() {
    return (
        <div className="w-[100vw]  mt-32 h-[450px] items-center max-sm:flex-col flex  max-sm:justify-center px-7 justify-between">
        <div className="max-w-[900px] h-full p-3 flex flex-col justify-between">
            <div><h1 className="text-[#FF8A00] text-[50px] max-sm:text-[30px] font-semibold">What We Do...</h1></div>
            <div className="text-[22px]  p-2 max-sm:text-[14px] mb-4 font-medium">The belief that the movements and relative positions of celestial bodies have an influence on the lives of people on Earth. It is based on the idea that the position of the stars and planets at the time of a person's birth can reveal information about their personality and destiny.Astrology followers believe that the alignment of the planets influences the energy of individuals, and that this energy is what shapes their lives. They believe that it is possible to gain insight into a person's behavior and future through the study of their astrological sign.</div>
        </div>
        <div className="max-w-[630px] mt-4 max-sm:mt-2 p-5 flex justify-center items-center h-full">
            <img src={space}></img>
        </div>

    </div>
   )
}

export default What;