import React from "react";
import heroImg from "../../images/hero-img2.png";

const Hero = () => {
  return (
    <>
    <div className="px-[3%] xl:px-[5%] py-4 mx-auto relative z-50 2xl:min-h-screen mb-20 2xl:mb-0">
        <div className=" mt-[100px] 2xl:mt-[250px]">
          <h1 className=" text-[32px] xl:text-[45px] 2xl:text-[56px] font-bold text-center md:text-left">
            Welcome to the World <br /> of{" "}
            <span className=" text-[#FB7E0B]">Myanmar</span> Recipe
          </h1>
          <p className=" md:w-[50%] xl:w-[40%] 2xl:w-[32%] leading-loose text-center md:text-left mt-5">
            Embark on a fascinating journey through traditional Myanmar.
            we'll take you on a flavorful adventure through the wonders of Burmese
            gastronomy. Start your culinary journey now!
          </p>
        </div>
        <img
          src={heroImg}
          alt=""
          className="absolute md:w-[400px] xl:w-[480px] 2xl:w-auto top-14 2xl:top-[20%] right-6 xl:right-[20%] z-50 hidden md:block"
        />
        <div className=" flex justify-center md:block">
          <button className="bg-[#3E3636] hover:bg-[#302929] hover:text-[#f0f0f0] px-3 py-3 mt-8 text-white rounded-md">
            Explore Now
          </button>
        </div>
      </div>
      <svg
        className=" absolute right-0 top-[-10px] md:top-[-10px] xl:top-0 z-10 w-[240px] md:w-[55%] xl:h-[600px] 2xl:h-[833px]"
        viewBox="0 0 813 733"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M152.991 458.196C67.6176 367.055 -6.62733 261.92 1.51939 154.939C10.6773 47.4018 101.469 -62.2235 167.738 -157.733C234.26 -254.039 274.742 -336.712 329.889 -428.746C385.036 -520.781 454.341 -623.214 535.471 -628.969C615.843 -634.965 708.294 -545.079 789.639 -483.269C871.238 -422.255 942.49 -389.075 985.676 -333.265C1028.61 -276.658 1043.48 -197.42 1109.13 -102.03C1175.04 -7.43532 1292.25 104.349 1297.76 202.524C1304.02 300.94 1199.09 386.784 1100.98 480.056C1002.61 574.124 911.066 675.62 801.36 713.486C690.642 751.908 561.762 726.698 448.566 675.797C335.371 624.895 238.617 548.542 152.991 458.196Z"
          fill="#FB7E0B"
        />
      </svg>  
    </>
  );
};

export default Hero;
