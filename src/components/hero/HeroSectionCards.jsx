import card_image1 from "../../assets/herosection_cardimage1.png";
import card_image2 from "../../assets/herosection_cardimage2.png";
import card_image3 from "../../assets/herosection_cardimage3.png";
import card_image4 from "../../assets/herosection_cardimage4.png";

const HeroSectionCards = () => {
  const cardContent = [
    {
      title: "Worked in brands for",
      tag: "20 + brands",
      image: card_image1,
    },
    {
      title: "We have worked more than",
      tag: "4 + countries",
      image: card_image2,
    },
    {
      title: "Designed more than",
      tag: "10,000 + Designs",
      image: card_image3,
    },
    {
      title: "Rebranded more than",
      tag: "5 + brands",
      image: card_image4,
    },
  ];
  return (
    <div className="w-[80%] lg:w-[75%] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mt-20 lg:grid-cols-2 gap-4">
      {cardContent.map((item, index) => (
        <div
          className="bg-black relative h-[110px] md:h-[100px] flex justify-start items-center text-white p-4 rounded-3xl shadow-[0_4px_6px_-1px_rgba(42,48,55,0.19)]"
          style={{
            borderImage:
              "linear-gradient(180.9deg, #2CB183 0.77%, #FFFFFF 99.23%) 1",
            borderImageSlice: "1",
          }}
          key={index}
        >
          <div className="flex flex-col items-start justify-center z-10">
            <p>{item.title}</p>
            <p className="bg-[linear-gradient(180deg,#B0DCF4_0%,#3B85DB_7.81%,#3A70DA_94.27%,#C8E3D3_100%)] text-md font-bold rounded-3xl px-2">
              {item.tag}
            </p>
          </div>

          {/* Responsive clipped image */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <img
              src={item.image}
              className={`absolute ${index==0 ? "top-0":"top-5"} md:top-0 left-auto right-0 w-[182px] lg:w-[180px] object-contain`}
              style={{
                transform: "rotate(-deg)",
                opacity: 1,
                clipPath: "inset(0 round 1rem)",
              }}
              alt="Decorative background"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSectionCards;
