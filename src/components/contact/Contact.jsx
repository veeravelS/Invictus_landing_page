import contact_image1 from "../../assets/contact_image1.png";
import  whatapp_icon from "../../assets/whatsapp.svg"
import  email_icon from "../../assets/email.svg"
import ContactCard from "./ContactCard";
import contact_overlay from "../../assets/contact_overlay_bg.png"

const Contact = () => {
  return (
    <div className="w-full md:w-[75%] lg:w-[60%] my-[90px] relative mx-auto h-full flex flex-col justify-start items-start gap-3">
        <img src={contact_overlay} alt="" className="absolute -bottom-[300px] w-[70%] -left-[260px]" />
      <div className="w-full flex justify-center items-center md:justify-start md:items-start">
          <img
            src={contact_image1}
            alt=""
            className="bg-contain w-[130px] h-auto"
          />
        <div className="w-[50%] mt-10 flex flex-col gap-3">
            <div className="w-[90%] flex gap-3 flex-col">
          <h2 className="font-bold text-3xl">
            Have more questions? Let’s talk
          </h2>
          <p className="text-md text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque diam felis,{" "}
          </p>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            {/* Primary Button */}
            <button className="px-6 py-4 flex items-center justify-center gap-2 font-medium text-white bg-[#0C7D55] rounded-xl hover:bg-[#0A6B48] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0C7D55] focus:ring-opacity-50">
              <img src={whatapp_icon} alt="" className="w-6 h-6" />Let's chat
            </button>

            {/* Secondary Button */}
            <button className="px-6 py-4 font-medium flex items-center justify-center gap-2 text-black border border-[#6675C2] rounded-xl hover:bg-[#6675C210] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#6675C2] focus:ring-opacity-50">
              <img src={email_icon} alt="" className="w-6 h-6" />Write to us
            </button>
            <p className="text-sm text-gray-500 text-center">We are available on all days</p>
          </div>
        </div>
      </div>
        <ContactCard />
    </div>
  );
};

export default Contact;
