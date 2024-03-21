import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import img1 from "../Assets/Ellipse 41.png";
import img2 from "../Assets/Ellipse 42.png";
import img3 from "../Assets/Ellipse 45.png";


function Astrologers()
{
    const settings = {
    accessibility: true,
    arrows: false,
    dots:false,
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

    
    return (
        <div className="flex flex-col h-[700px] mt-32 w-[100vw] items-center gap-16">
            <div className="w-full text-center font-semibold text-[#FF8A00] text-[50px]">Astrologers</div>
            <div className="max-w-[1000px] max-sm:p-3 font-medium text-[20px] text-center">
Astrologers are individuals who study celestial bodies, movements and positions, such as planets and stars, and interpret their significance on human affairs. They often use birth charts and horoscopes to provide insights into personality traits, relationships, and life events.</div>
            <div className="w-[80%] h-[300px] max-sm:h-[240px] mx-auto max-sm:w-full">
                 <Slider {...settings}>
          <div className="max-w-[360px] max-sm:h-[250px] h-[400px] max-[400px]:h-[180px] bg-[#FF8A00] text-white rounded-xl flex flex-col justify-center items-center">

                <div className="flex flex-col items-center justify-center gap-6 max-sm:gap-1 max-sm:p-0 p-4">
                      <p className="text-center w-full p-2 h-28 max-[400px]:h-20 text-[14px] max-[400px]:p-1 max-sm:text-[9px] max-[300px]:text-[6px]">After Astrolex reading, I now look up at the night sky and see a whole new wondrous Universe reflecting back at me. </p>                  
                     <div className="h-28 w-28 p-1 justify-self-center mx-auto aspect-square flex justify-center items-center rounded-full max-md:h-[50px] max-md:w-[50px] max-[400px]:h-[40px] max-[400px]:w-[40px]">
            <img src={img1}></img>
                    </div>
                            <p className="text-[20px] font-medium max-sm:text-[11px] text-center  max-[300px]:text-[9px] w-24 h-12 md:w-44">Theresa Webb
                             <p className="text-[15px] font-normal max-sm:text-[8px]">Vedic Astrologer</p></p>

            </div>
            </div>


<div className="max-w-[360px] max-sm:h-[250px] h-[400px] bg-[#FF8A00] max-[400px]:h-[180px] text-white rounded-xl flex flex-col justify-center items-center">

                <div className="flex flex-col items-center justify-center gap-6 max-sm:gap-1 max-sm:p-0 p-4">
                      <p className="text-center w-full p-2 h-28 max-[400px]:h-20 text-[14px] max-[400px]:p-1 max-[300px]:text-[6px] max-sm:text-[9px]">After Astrolex reading, I now look up at the night sky and see a whole new wondrous Universe reflecting back at me. </p>                  
                     <div className="h-28 w-28 p-1 justify-self-center mx-auto aspect-square flex justify-center items-center rounded-full  max-md:h-[50px] max-md:w-[50px] max-[400px]:h-[40px] max-[400px]:w-[40px]">
            <img src={img2}></img>
                    </div>
                            <p className="text-[20px] font-medium max-sm:text-[11px] text-center  max-[300px]:text-[9px] w-24 h-12 md:w-44">Bessie Cooper
                             <p className="text-[15px] font-normal max-sm:text-[8px]">Vedic Astrologer</p></p>

            </div>
            </div>


           <div className="max-w-[360px] max-sm:h-[250px] max-[400px]:h-[180px] h-[400px] bg-[#FF8A00] text-white rounded-xl flex flex-col justify-center items-center">

                <div className="flex flex-col items-center justify-center gap-6 max-sm:gap-1 max-sm:p-0 p-4">
                      <p className="text-center p-2 w-full h-28 text-[14px] max-[400px]:h-20 max-[400px]:p-1 max-[300px]:text-[6px] max-sm:text-[9px]">After Astrolex reading, I now look up at the night sky and see a whole new wondrous Universe reflecting back at me. </p>                  
                     <div className="h-28 w-28 p-1 justify-self-center mx-auto aspect-square flex justify-center items-center rounded-full max-md:h-[50px] max-md:w-[50px] max-[400px]:h-[40px] max-[400px]:w-[40px]">
            <img src={img3}></img>
                    </div>
                            <p className="text-[20px] font-medium max-sm:text-[11px] text-center max-[300px]:text-[9px] w-24 h-12 md:w-44">Courtney Henry
                            <p className="text-[15px] font-normal max-sm:text-[8px]">Vedic Astrologer</p></p>
                        

            </div>
            </div>
              
            </Slider>
            </div>
        </div>
    )
}

export default Astrologers;