import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Foot = () => {
  return (
    <div className="px-[3%] xl:px-[5%] py-4 mx-auto bg-[#dfdfdf]">
      <div className="xl:flex py-5 justify-between">
        <div className="xl:w-[25%]">
          <Link to="/">
            <h1 className=" font-semibold text-[25px] xl:text-[25px] text-center xl:text-left tracking-widest">
              CookWith<span className=" text-[#FB7E0B]">Me</span>
            </h1>
          </Link>
          <p className=" leading-loose text-center xl:text-left mt-2 text-black/80">
            Embark on a fascinating journey through traditional Myanmar.
          </p>
        </div>
        <div className="md:mt-2 mt-5 xl:w-[25%] xl:pl-[8%] text-center xl:text-left">
            <h4 className="font-semibold text-lg mb-2">Links</h4>
            <ul>
                  <li className=" hover:cursor-pointer hover:font-semibold">
                    Home
                  </li>
                <AnchorLink href="#about">
                <li className=" hover:cursor-pointer hover:font-semibold">
                  About Us
                </li>
                </AnchorLink>
                <AnchorLink href="#recipes">
                  <li className=" hover:cursor-pointer hover:font-semibold">
                    Recipes
                  </li>
                </AnchorLink>
            </ul>
        </div>
        <div className="md:mt-2 mt-5 xl:w-[25%] text-center xl:text-left">
            <h4 className="font-semibold text-lg mb-2">Contact us</h4>
            <p className=" leading-loose text-center xl:text-left mt-2 xl:w-[70%] text-black/80">
            No. 23, Pyay Road, Kamaryut Township, Yangon, Myanmar
          </p>
          <p className=" leading-loose text-center xl:text-left mt-1 xl:w-[70%] text-black/80">
            +95 9957324923
          </p>
        </div>
        <div className="md:mt-2 mt-5 xl:w-[25%]">
            <h4 className="font-semibold text-lg mb-2 text-center xl:text-left">Subscribe us</h4>
            <div className="relative w-[300px] mx-auto xl:mx-0">
            <input type="text" placeholder="Enter your email" className=" border-[#FB7E0B] rounded-full w-[300px]" />
            <MdOutlineNavigateNext className=" text-white h-10 w-10 rounded-full right-0 bg-[#FB7E0B] hover:bg-orange-400 absolute top-0 cursor-pointer" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Foot;
