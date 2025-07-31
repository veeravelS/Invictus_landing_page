import Invictus_logo from "../assets/invictus_logo.svg";
import Youtube_logo from "../assets/Youtube_icon.svg";
import Instagram_logo from "../assets/Instagram_icon.svg";
import Twitter_logo from "../assets/Twitter_icon.svg";
import LinkedIn_logo from "../assets/LinkedIn_icon.svg";
import footer_bg from "../assets/footer_bg.png";

const Footer = () => {
  const socialLinks = [
    {
      image: Youtube_logo,
      label: "Youtube",
    },
    {
      image: Instagram_logo,
      label: "Instagram",
    },
    {
      image: Twitter_logo,
      label: "Twitter",
    },
    {
      image: LinkedIn_logo,
      label: "LinkedIn",
    },
  ];
  const quickLinks = [
    {
      label: "Blog",
      path: "#",
    },
    {
      label: "Business Trends",
      path: "#",
    },
    {
      label: "Instagram",
      path: "#",
    },
    {
      label: "Portfolio",
      path: "#",
    },
    {
      label: "Career",
      path: "#",
    },
  ];

  const company = [
    {
      label: "About Us",
      path: "#",
    },
    {
      label: "Disclaimer",
      path: "#",
    },
    {
      label: "Privacy policy",
      path: "#",
    },
    {
      label: "Terms & conditions",
      path: "#",
    },
  ];
  return (
    <div className="w-full py-20 flex justify-end items-center bg-center" style={{ backgroundImage: `url(${footer_bg})` }}>
  <div className="w-full md:w-[80%] flex flex-col md:flex-row justify-center items-center lg:items-start">
    <div className="w-full md:w-[33%] px-4 mb-8 md:mb-0 flex flex-col items-center md:items-start">
      <img src={Invictus_logo} alt="" className="w-[120px]" />
      <p className="text-sm w-full md:w-[80%] my-5 text-center md:text-left">
        Invictus Pvt. Ltd. HoneyKomb by Bhive, 2nd Main Road HSR Sector 3
        Chennai - 123321
      </p>
      <div className="flex justify-center md:justify-start items-center gap-3">
        {socialLinks.map((item, index) => (
          <img key={index} src={item.image} alt="" className="w-7 h-7 cursor-pointer" />
        ))}
      </div>
    </div>
    <div className="w-full md:w-[33%] px-4 mb-8 md:mb-0">
      <h2 className="text-gray-500 font-semibold text-md text-center md:text-left">Quick links</h2>
      <ul className="mt-5 flex flex-col items-center md:items-start">
        {quickLinks.map((item, index) => (
          <li key={index} className="text-sm my-2 cursor-pointer">{item.label}</li>
        ))}
      </ul>
    </div>
    <div className="w-full md:w-[33%] px-4">
      <h2 className="text-gray-500 font-semibold text-md text-center md:text-left">Company</h2>
      <ul className="mt-5 flex flex-col items-center md:items-start">
        {company.map((item, index) => (
          <li key={index} className="my-2 text-sm cursor-pointer">{item.label}</li>
        ))}
      </ul>
    </div>
  </div>
</div>
  );
};

export default Footer;
