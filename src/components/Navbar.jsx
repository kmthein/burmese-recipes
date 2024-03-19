import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const location = useLocation();

  return (
    <div className=" px-[3%] xl:px-[5%] py-4 mx-auto relative">
      <div className=" flex justify-between items-center">
        <Link to="/">
          <h1 className=" font-semibold text-[25px] xl:text-[32px] tracking-widest">
            CookWith<span className=" text-[#FB7E0B]">Me</span>
          </h1>
        </Link>
        <div className=" z-50 mr-20 gap-20 2xl:gap-80 items-center hidden xl:flex">
          {location.pathname == "/" ? (
            <>
              <ul className="flex gap-12 duration-500">
                <Link to="/">
                  <li className=" hover:cursor-pointer hover:font-semibold">
                    Home
                  </li>
                </Link>
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
            </>
          ) : (
            <></>
          )}
        </div>
        <div className=" z-50 xl:hidden">
          <button onClick={showDrawer}>
            <GiHamburgerMenu className=" text-white text-xl" />
          </button>
        </div>
        <Drawer onClose={onClose} open={open}>
          <ul className=" text-lg text-center">
            <li className=" hover:cursor-pointer hover:font-semibold mb-4">Home</li>
            <AnchorLink href="#about">
              <li className=" hover:cursor-pointer hover:font-semibold mb-4">
                About Us
              </li>
            </AnchorLink>
            <AnchorLink href="#recipes">
              <li className=" hover:cursor-pointer hover:font-semibold mb-4">
                Recipes
              </li>
            </AnchorLink>
          </ul>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
