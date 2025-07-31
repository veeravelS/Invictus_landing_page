import overview_icon from "../../assets/overview_icon.png";
import overlay_bg from "../../assets/overview_overlay_bg.png";
import path from "../../assets/Path.png";
import star_bg from "../../assets/star_bg.svg"

const Overview = () => {
  const OverviewContent = [
    {
      title: "Unlimited Design Requests & Revisions",
      content:
        "Enjoy the freedom of unlimited design requests and revisions. We handle them one by one, exactly as you need them!",
    },
    {
      title: "Seamless Design Management with KIMP360",
      content:
        "Manage all your brand and client design requests effortlessly in one place with KIMP360",
    },
    {
      title: "Lightning-Fast Turnarounds",
      content:
        "Experience rapid turnarounds get simple designs within 24 hours and more complex ones in just 2-4 days",
    },
    {
      title: "Collaborate Without Extra Fees",
      content:
        "Invite as many collaborators as you need to manage and create your design projects, all at no additional cost",
    },
    {
      title: "100% Design Ownership",
      content:
        "Own every design created during your subscription, complete with source files for your convenience",
    },
    {
      title: "Diverse Design Options",
      content:
        "Access over 100 categories of graphic and video designs with a single subscription",
    },
    {
      title: "Premium Stock Assets Included",
      content:
        "We source top-quality stock assets and incorporate them into your designs, so you don’t have to",
    },
    {
      title: "24/7 Customer Support",
      content:
        "Our support team is available around the clock via live chat, ready to assist you anytime you need",
    },
    {
      title: "Elite Design Talent",
      content:
        "Our team features top-tier graphic and motion graphics designers dedicated to bringing your vision to life",
    },
  ];

  return (
    <div className="w-[70%] mt-[200px] mb-[100px] mx-auto grid grid-cols-1 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
      <img
        src={overlay_bg}
        alt=""
        className="absolute bottom-10 -right-[220px]"
      />
      <img src={path} alt="" className="absolute hidden lg:block top-[160px] -right-6 w-[99%]" />
      <img
        className="absolute -top-[100px] left-[200px] w-4 h-4 bg-contain"
        src={star_bg}
        alt=""
      />
       <img
        className="absolute -top-[50px] right-[200px] w-4 h-4 bg-contain"
        src={star_bg}
        alt=""
      />
      {OverviewContent.map((item, index) => (
        <div
          key={index}
          className="w-[200px] mt-10 md:mt-[105px] border-1 flex flex-col text-center justify-center items-center relative"
        >
          <div className="relative rounded-full flex items-center justify-center bg-[#1D1E33] w-[90px] h-[90px]">
            <p className="absolute top-0 right-0 w-6 text-sm pt-[2px] h-6 text-white bg-[linear-gradient(304.07deg,#283DAA_10.34%,#2AB182_115.99%)] rounded-full text-center">
              {index + 1}
            </p>
            <img src={overview_icon} alt="" className="w-12 h-12" />
          </div>
          <div className="mt-2 w-[75%]">
            <p className="font-semibold text-sm">{item.title}</p>
            <p className="text-[10px] text-gray-400">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Overview;
