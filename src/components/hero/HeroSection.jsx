import herosection_image1 from "../../assets/herosection_image1.png";
import herobg_image from "../../assets/herobg_image.png";
import herosection_image2 from "../../assets/herosection_image2.png";
import hero_logoimage from "../../assets/hero_logoimage.png";
import herosection_image3 from "../../assets/herosection_image3.png";
import herosection_image4 from "../../assets/herosection_image4.png";
import herosection_image5 from "../../assets/herosection_image5.png";
import herosection_image6 from "../../assets/herosection_image6.png";
import herosection_leftarrow from "../../assets/herosection_leftarrow.png";
import star_bg from "../../assets/star_bg.svg";
import HeroSectionCards from "./HeroSectionCards";

const HeroSection = () => {
  return (
    <div className="w-full mt-[30px] flex flex-col items-center justify-center">
      <div
        className={`w-full md:w-[90%] lg:w-full min-h-[400px] h-auto relative flex justify-between items-start`}
      >
        <div className="absolute top-0 left-0 right-0 h-[200px] flex  justify-center">
          <img
            src={hero_logoimage}
            alt="Background"
            className="w-full object-contain"
          />
        </div>
        <div
          className="absolute w-full left-10 top-20 inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${herobg_image})` }}
        ></div>
        <div className="mt-20 md:mt-10">
          <img
            src={herosection_image1}
            className="h-[200px] md:h-[265px]"
            alt=""
          />
        </div>
        <div className="w-full relative flex-1 h-full pt-[300px] md:pt-[200px]">
          {/* Background with overlay */}

          <div className="relative z-10 grid grid-cols-2 grid-rows-[auto,auto] h-full container mx-auto gap-2 justify-end items-center">
            {/* First column */}
            <div className="flex relative col-span-2 md:col-span-1 justify-end items-end ">
              <img
                src={herosection_image2}
                className="w-auto absolute h-[100px] bottom-0 mr-0 object-contain"
                alt="Affordability"
              />
              <p className="text-lg font-medium mt-auto">
                Struggling to afford
              </p>
            </div>

            {/* Second column */}
            <div className="flex relative col-span-2 md:col-span-1 justify-start mt-7">
              <div className="">
                <img
                  src={herosection_image5}
                  className="h-[100px] absolute top-14 -left-2 lg:left-[43%] md:top-5 object-contain"
                  alt="Quality"
                />
                <img
                  src={herosection_image6}
                  className="w-[150px] h-[100px] top-16 left-12 absolute lg:left-[55%] md:top-7 object-contain"
                  alt="Quality"
                />
              </div>
              <p className="text-4xl w-full md:w-[90%] font-bold text-right">
                Top-quality designs regularly
              </p>
              <img
                className="absolute top-1 left-[255px] w-4 h-4 bg-contain"
                src={star_bg}
                alt=""
              />
            </div>

            {/* Bottom spanning column */}
            <div className="col-span-2 relative flex items-center justify-center mt-20 md:mt-10">
              {/* Add your content here */}
              <img
                className="absolute -left-[80px] bottom-[50px] md:-top-14 md:left-[50px] lg:left-[270px] bg-contain"
                src={herosection_image4}
                alt=""
              />
              <div className="bg-black ml-[10%] text-white items-center md:pl-5  justify-center whitespace-nowrap rounded-full p-3 flex gap-3 h-[50px] md:h-[60px] w-[200px] md:w-[230px]">
                <p className="w-full text-xs md:text-sm">How it works?</p>
                <button className="bg-[#FFC32C]  text-black text-[10px] p-3 md:p-0 flex items-center gap-1 justify-center w-full rounded-full h-8 md:h-10">
                  Book a demo{" "}
                  <img src={herosection_leftarrow} alt="" className="mt-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[20%] mt-20">
          <img
            src={herosection_image3}
            className="md:h-[180px] lg:h-[250px] bg-contain"
            alt=""
          />
        </div>
      </div>
      <HeroSectionCards />
    </div>
  );
};

export default HeroSection;
