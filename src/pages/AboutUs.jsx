import React from "react";
import aboutImg from "../images/about-img3.png";

const AboutUs = () => {
  return (
    <div className="px-[3%] xl:px-[5%] py-4 mx-auto relative z-50 md:mb-20 xl:mb-40 pt-20" id="about">
      <div className="xl:flex">
        <div className="2xl:w-[50%]">
          <img src={aboutImg} alt="" className=" mx-auto w-[80%]" />
        </div>
        <div className=" mx-4 md:mx-0 xl:w-[50%]">
          <h1 className="text-[25px] xl:text-[25px] 2xl:text-[30px] font-bold text-center xl:text-left">
            About
            <span className=" text-[#FB7E0B]"> Us</span>
          </h1>
          <p className=" lg:w-[40%] xl:w-[90%] 2xl:w-[70%] leading-loose text-center xl:text-left mt-5">
            Welcome to our corner of culinary delight! At CookWithMe, we are
            passionate about sharing the rich flavors and vibrant culture of
            Burmese cuisine with food enthusiasts around the world. Nestled in
            the heart of Myanmar, Burmese food reflects a tapestry of influences
            from neighboring countries and indigenous traditions, resulting in a
            unique and tantalizing culinary experience.
          </p>
          <p className=" lg:w-[40%] xl:w-[90%]  2xl:w-[70%] leading-loose text-center xl:text-left mt-5">
            Our mission is simple yet profound to celebrate the essence of
            Burmese gastronomy by curating an array of authentic recipes that
            capture the essence of this diverse and flavorful cuisine. We aim to
            be your go-to destination for exploring the tantalizing flavors,
            aromatic spices, and time-honored cooking techniques that define
            Burmese cooking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
