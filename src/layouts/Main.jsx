import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Foot from "../components/Foot";
import ScrollToTop from "react-scroll-to-top";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollToTop
        smooth
        className=" pl-[6px] bg-[#FB7E0B] hover:bg-[#fb7f0bdc] hover:-translate-y-1"
        color="white"
      />
      <Foot />
    </>
  );
};

export default Main;
