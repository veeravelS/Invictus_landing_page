import overlay_bg from "../../assets/pricing_overlay_bg.png"
import pricing_image from "../../assets/pricing_image2.png";
const Pricing = () => {
  const graphicsContent = [
    {
      id: 1,
      content: "Unlimited Requests",
    },
    {
      id: 2,
      content: "Unlimited Revisions",
    },
    {
      id: 3,
      content: "No Contract",
    },
    {
      id: 4,
      content: "24 Hour Turnaround For Graphics",
    },
    {
      id: 5,
      content: "2 Active Requests ",
    },
    {
      id: 6,
      content: "2-4 Day Turnaround For Video",
    },
    {
      id: 7,
      content: "Add Unlimited Team Members",
    },
    {
      id: 8,
      content: "Dedicated  Video Team",
    },
    {
      id: 9,
      content: "Dedicated Project Manager",
    },
    {
      id: 10,
      content: "Free Stock Images ",
    },
    {
      id: 11,
      content: "Source Files",
    },
    {
      id: 12,
      content: "Includes Print & Digital Designs",
    },
    {
      id: 13,
      content: "Also Includes Custom Illustrations",
    },
    {
      id: 14,
      content: "Also Includes Basic GIFs",
    },
    {
      id: 15,
      content: "Also Includes Landing Page Designs",
    },
    {
      id: 16,
      content: "Also Includes Website, App and UI Designs ",
    },
    {
      id: 17,
      content: "Also includes NFT Designs",
    },
    {
      id: 18,
      content: "Also Includes Canva Designs",
    },
    {
      id: 19,
      content: "KIMP360 Design Management",
    },
  ];
    const graphicsVideoContent = [
    {
      id: 1,
      content: "Unlimited Requests",
    },
    {
      id: 2,
      content: "Unlimited Revisions",
    },
    {
      id: 3,
      content: "No Contract",
    },
    {
      id: 4,
      content: "24 Hour Turnaround For Graphics",
    },
    {
      id: 5,
      content: "4 Active Requests  ",
    },
    {
      id: 6,
      content: "2-4 Day Turnaround For Video",
    },
    {
      id: 7,
      content: "Add Unlimited Team Members",
    },
    {
      id: 8,
      content: "Dedicated Design & Video Team",
    },
    {
      id: 9,
      content: "Dedicated Project Manager",
    },
    {
      id: 10,
      content: "Free Stock Images, Videos & Audio",
    },
    {
      id: 11,
      content: "Source Files",
    },
    {
      id: 12,
      content: "Includes Print & Digital Designs",
    },
    {
      id: 13,
      content: "Also Includes Canva Designs",
    },
    {
      id: 14,
      content: "Kimp360 Design Management",
    },
    {
      id: 15,
      content: "Also Includes Website, App and UI Designs",
    },
    {
      id: 16,
      content: "Also Includes Custom Illustrations, GIFS, & NFT Designs ",
    },
   
  ];
    const videoContent = [
    {
      id: 1,
      content: "Unlimited Requests",
    },
    {
      id: 2,
      content: "Unlimited Revisions",
    },
    {
      id: 3,
      content: "No Contract",
    },
    {
      id: 4,
      content: "24 Hour Turnaround For Graphics",
    },
    {
      id: 5,
      content: "2 Active Requests ",
    },
    {
      id: 6,
      content: "2-4 Day Turnaround For Video",
    },
    {
      id: 7,
      content: "Add Unlimited Team Members",
    },
    {
      id: 8,
      content: "Dedicated  Video Team",
    },
    {
      id: 9,
      content: "Dedicated Project Manager",
    },
    {
      id: 10,
      content: "Free Stock Images, Videos & Audio ",
    },
    {
      id: 11,
      content: "Source Files",
    },
    {
      id: 12,
      content: "Kimp360 Design Management",
    },
    {
      id: 13,
      content: "Also Includes GIFs",
    },
    {
      id: 14,
      content: "Also Includes Template Customization",
    },
    {
      id: 15,
      content: "Includes Video Editing, Animation, Video Design, & Motion Graphics",
    },
    {
      id: 16,
      content: "Also Includes UI/UX Animations ",
    },
  ];
  return (
    <div className="w-[80%] md:[90%] lg:w-[80%] my-[100px] flex relative items-center flex-col justify-center mt-[200px] md:mt-20">
      <img
        src={overlay_bg}
        alt=""
        className="absolute md:-top-[300px] right-[220px]"
      />
      <img
        src={pricing_image}
        alt=""
        className="absolute -bottom-[150px] md:-bottom-[280px] z-30 -left-[250px] md:-left-20 bg-transparent"
      />
      <h1 className="text-center font-semibold text-3xl mb-20">Pricing</h1>
      <div className="w-[90%] flex justify-center flex-col md:flex-row items-center gap-8">
        <div className="lg:w-[27%] h-[60%] bg-[#0F392A] p-6 rounded-3xl z-20">
          <h1 className="font-semibold w-full text-start text-white text-md">
            Graphics
          </h1>
          <ul className="list-disc space-y-3 ml-4 mt-5">
            {graphicsContent.map((item) => (
              <li className="text-white text-sm" key={item.id}>
                {item.content}
              </li>
            ))}
          </ul>
          <button className="text-[#FFC400] font-semibold w-full text-[11px] border rounded-lg p-4 mt-4 border-gray-400">
            Begin Complimentary Trail
          </button>
        </div>
        <div className="lg:w-[46%] h-[60%] bg-[#054830] p-6 rounded-3xl z-20">
          <button
            className="text-white px-6 py-2 my-4 rounded-full font-semibold text-md"
            style={{
              background:
                "linear-gradient(93.06deg, #283DAA 11.87%, #4385F7 93.92%)",
            }}
          >
            BEST VALUE
          </button>
          <h1 className="font-semibold w-full text-start text-white text-3xl">
            Graphics + Video
          </h1>
          <ul className="list-disc space-y-7 ml-4 mt-5">
            {graphicsVideoContent.map((item) => (
              <li className="text-white text-md md:text-xl" key={item.id}>
                {item.content}
              </li>
            ))}
          </ul>
          <button className="text-[#FFC400] font-semibold w-full text-[11px] border rounded-lg p-4 mt-4 border-gray-400">
            Activate Trail Access
          </button>
        </div>
        <div className="lg:w-[27%] h-[60%] bg-[#0F392A] p-6 rounded-3xl">
          <h1 className="font-semibold w-full text-start text-white text-md">
            Video
          </h1>
          <ul className="list-disc space-y-3 ml-4 mt-5">
            {videoContent.map((item) => (
              <li className="text-white text-sm" key={item.id}>
                {item.content}
              </li>
            ))}
          </ul>
          <button className="text-[#FFC400] font-semibold w-full text-[11px] border rounded-lg p-4 mt-4 border-gray-400">
            Unlock Your Trail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
