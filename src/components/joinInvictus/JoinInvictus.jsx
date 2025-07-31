import arrow_right from "../../assets/arrow-right_join.png";
import join_invictus_bg from "../../assets/Join_invictus_bg.png";
import join_invictus_arrow from "../../assets/join_invictus_arrow.png";
import telephone from "../../assets/telephone.png";
import invictus_logo from "../../assets/invictus_logo_join.png"

const JoinInvictus = () => {
  const bookingCallContent = [
    {
      title: "Book a 15 Min Intro Call",
      content: "Learn more about how Invictus works and how it can help you",
    },
    {
      title: "Refer a friend & earn",
      content: "Earn 5% monthly recurring commissions for each referral.",
    },
  ];
  return ( 
    <div className="w-[90%] md:w-[70%] rounded-[50px]  my-20 min-h-[500px] h-auto bg-black flex flex-col md:flex-row justify-between bg-cover bg-center items-center" style={{backgroundImage : `url(${join_invictus_bg})`}}>
      <div className="md:w-[50%] p-10 flex flex-col justify-start items-start">
        <button className="bg-[#2CB183] text-black cursor-pointer text-xs p-2 px-3 rounded-lg">
          Slots Available
        </button>
        <h4
          className="text-5xl text-left w-25 my-3 font-bold bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #FFFFFF 0%, #FFC400 100%)",
          }}
        >
          Join
          <br />
          Invictus
        </h4>
        <div className="flex flex-col ">
          {bookingCallContent.map((item) => (
            <div className="text-white my-2 flex gap-5 items-center">
              <div
                className="border w-[70%] border-solid rounded-full p-3 text-white"
                style={{
                  borderWidth: "0.87px",
                  borderImage:
                    "linear-gradient(180deg, #FFFFFF 0%, #262626 100%) 1",
                  borderRadius: "10px",
                  backgroundClip: "padding-box", // Ensures border respects radius
                  WebkitMaskImage: "-webkit-radial-gradient(white, black)", // For Chrome/Safari fix
                }}
              >
                <h4 className="text-xs font-semibold">{item.title}</h4>
                <p className="text-[10px] leading-none mt-1">{item.content}</p>
              </div>

              <div>
                <img src={arrow_right} alt="" className="w-7 h-7" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[70%] md:w-[50%] p-5 md:p-0 h-[500px] flex justify-start overflow-hidden">
        <div className="border-2 rounded-3xl flex flex-col items-center justify-start border-white w-full md:w-[70%] h-full mt-10 md:ml-10">
          <div className="h-3 w-[60px] rounded-full bg-white  border-white mt-10"></div>
          <div className="text-center mt-[120px] text-white">
<img src={invictus_logo} alt="" />
          </div>
          <img src={join_invictus_arrow} alt="" className="w-35 h-[100px]" />
          <p className="text-white my-2 text-sm">Request Quote</p>
          <div className="bg-black mt-2 text-white border my-2 mb-10 md:my-0 border-white items-center md:pl-5 justify-center rounded-full p-3 px-2 flex md:gap-3 h-[50px] w-[90%] md:w-[220px]">
            <p className="w-full text-xs whitespace-nowrap">How it works?</p>
            <button className="bg-[#2CB183] flex gap-1 px-1 items-center whitespace-nowrap justify-center text-black text-[10px] w-full rounded-full h-8">
              Book a demo <img src={telephone} alt="" className="bg-transparent border border-black rounded-full w-4 h-4 p-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinInvictus;
