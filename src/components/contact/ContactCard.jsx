import quote_icon from "../../assets/quote_icon.png";
import starfill_icon from "../../assets/starfill_icon.png";
import star_icon from "../../assets/star_icon.png";
import profile_icon from "../../assets/profile_icon.svg";
import contact_image2 from "../../assets/contact_image2.png"

const ContactCard = () => {
  return (
    <div className="relative flex flex-col justify-center items-center md:flex-row gap-1 mt-[400px] md:mt-10 h-[400px]">
        <div className="absolute right-[60px] -top-[385px]  md:-top-[218px]">
            <img src={contact_image2} alt="" className="w-[130px]  bg-contain " />
        </div>
      <div className="flex flex-col h-full w-[80%] mb-5 md:mb-0 md:w-[430px] bg-black text-white rounded-xl p-14">
        <img src={quote_icon} alt="" className="w-12 h-8 bg-contain" />
        <div className="mt-10">
          <p className="text-gray-300 text-lg leading-none w-full">
            “The amount of work we have is daunting. It’s nice to know that you
            are there ​to support us and you can take on the heavy lifting.”
          </p>
          <div className="flex gap-1 mt-4">
            {/* Display 4 filled stars */}
            {[...Array(4)].map((_, i) => (
              <img
                key={`filled-${i}`}
                src={starfill_icon}
                alt="Filled star"
                className="w-3 h-3 object-contain"
              />
            ))}

            {/* Display 1 empty star */}
            <img
              src={star_icon}
              alt="Empty star"
              className="w-3 h-3 object-contain"
            />
          </div>
        </div>
        <div className="flex items-center gap-1 mt-6">
          <img src={profile_icon} alt="" className="w-7 h-7" />
          <div>
            <p className="text-xs">- Jency Anthony,</p>
            <p className="text-gray-400 text-[10px]">Pethowz</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center gap-4">
        <div className="flex flex-col  bg-black w-[80%]  text-white rounded-xl p-8 pb-12">
          <div className="">
            <p className="text-gray-300 leading-none text-sm w-full">
              “The amount of work we have is daunting. It’s nice to know that
              you are there ​to support us and you can take on the heavy
              lifting.”
            </p>
            <div className="flex gap-1 mt-4">
              {/* Display 4 filled stars */}
              {[...Array(4)].map((_, i) => (
                <img
                  key={`filled-${i}`}
                  src={starfill_icon}
                  alt="Filled star"
                  className="w-3 h-3 object-contain"
                />
              ))}

              {/* Display 1 empty star */}
              <img
                src={star_icon}
                alt="Empty star"
                className="w-3 h-3 object-contain"
              />
            </div>
          </div>
          <div className="flex items-center gap-1 mt-3">
            <img src={profile_icon} alt="" className="w-7 h-7" />
            <div>
              <p className="text-xs">- Jency Anthony,</p>
              <p className="text-gray-400 text-[10px]">Pethowz</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-black w-[80%] text-white rounded-xl p-8 pb-12">
          <div className="">
            <p className="text-gray-300 leading-none text-sm w-full">
              “The amount of work we have is daunting. It’s nice to know that
              you are there ​to support us and you can take on the heavy
              lifting.”
            </p>
            <div className="flex gap-1 mt-4">
              {/* Display 4 filled stars */}
              {[...Array(4)].map((_, i) => (
                <img
                  key={`filled-${i}`}
                  src={starfill_icon}
                  alt="Filled star"
                  className="w-3 h-3 object-contain"
                />
              ))}

              {/* Display 1 empty star */}
              <img
                src={star_icon}
                alt="Empty star"
                className="w-3 h-3 object-contain"
              />
            </div>
          </div>
          <div className="flex items-center gap-1 mt-3">
            <img src={profile_icon} alt="" className="w-7 h-7" />
            <div>
              <p className="text-xs">- Jency Anthony,</p>
              <p className="text-gray-400 text-[10px]">Pethowz</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
