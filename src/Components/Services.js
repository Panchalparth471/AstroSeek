import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import sun from "../Assets/SVGRepo_iconCarrier.png";
import zod from "../Assets/zodiac (1) 1.png";
import comp from "../Assets/children-solid 1.png";
function Services() {
  
  const settings = {
    accessibility: true,
    arrows: false,
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed:2000,
    slidesToScroll: 1,
     className: 'slides',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
  }

  
    return(
      <div className="w-3/4 m-auto max-sm:w-[90%]">
        <div className=" mt-32 max-sm:mt-2 flex flex-col ">
          <h1 className="text-center font-semibold mb-32 text-5xl text-[#FF8A00] max-sm:mb-20 max-sm:text-[30px]">Astrology Services</h1>
          <Slider {...settings}>
          <div className="bg-white h-[350px] text-black rounded-xl flex flex-col justify-center items-center">
            <div className="h-28 w-28 p-1 justify-self-center mx-auto aspect-square bg-[#FF8A00] flex justify-center items-center rounded-full max-sm:h-20 max-sm:w-20 max-[300px]:w-[60px] max-[300px]:h-[60px]">
            <img src={sun}></img>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl text-[#FF8A00] font-semibold max-sm:text-sm text-center w-24 h-12 md:w-44">Today's Horoscope</p>
              <p className="text-center h-32 text-[20px] max-sm:text-[12px] max-[300px]:text-[9px]">Unlock your destiny with our Free  daily horoscopes.</p>

            </div>
            </div>


 <div className="bg-white h-[350px] text-black rounded-xl flex flex-col justify-center items-center">
            <div className="h-28 w-28 p-1 justify-self-center mx-auto aspect-square bg-[#FF8A00] flex justify-center items-center max-[300px]:w-[60px] max-[300px]:h-[60px] rounded-full  max-sm:h-20 max-sm:w-20">
              <img src={zod}></img>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl text-[#FF8A00] font-semibold text-center w-24 h-12 md:w-44 max-sm:text-sm">Free Kundli</p>
              <p className="text-center h-32  text-[20px] max-sm:text-[12px] max-[300px]:text-[9px]">Discover the secrets of your destiny with our complimentary Kundli analysis .</p>

            </div>
            </div>


              <div className="bg-white h-[350px] text-black rounded-xl flex flex-col justify-center items-center">
            <div className="h-28 w-28 p-1 justify-self-center mx-auto aspect-square bg-[#FF8A00] flex justify-center items-center max-[300px]:w-[60px] max-[300px]:h-[60px] rounded-full  max-sm:h-20 max-sm:w-20">
              <img src={comp}></img>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl text-[#FF8A00] w-24 h-12 max-sm:text-sm text-center font-semibold md:w-44">Compatibility</p>
              <p className="text-center h-32  text-[20px] max-sm:text-[12px] max-[300px]:text-[9px]">Explore your cosmic connection with our free compatibility check.</p>

            </div>
            </div>

              
            </Slider>

        </div>
        
   </div>
    );
}

export default Services;