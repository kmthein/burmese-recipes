import React, { useContext, useState } from "react";
import { Button, Drawer } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { RecipeContext } from "../contexts/RecipeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { savedRecipes, savedId } = useContext(RecipeContext);

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
          {savedRecipes.length > 0 && (
            <Link to="/saved-recipes">
              <div className="relative">
                <FaRegHeart className="text-2xl text-[#3E3636]" />
                <span className="absolute -top-3 -right-4 bg-[#3E3636] text-white py-[1px] px-[6px]  text-sm rounded-full">
                  {savedRecipes.length}
                </span>
              </div>
            </Link>
          )}
        </div>
        <div className="z-50 xl:hidden flex gap-8">
        {savedRecipes.length > 0 && (
            <Link to="/saved-recipes">
              <div className="relative">
                <FaRegHeart className="text-2xl text-[#3E3636]" />
                <span className="absolute -top-3 -right-4 bg-[#3E3636] text-white py-[1px] px-[6px]  text-sm rounded-full">
                  {savedRecipes.length}
                </span>
              </div>
            </Link>
          )}
        <div className=" z-50 xl:hidden">
          <button onClick={showDrawer}>
            <GiHamburgerMenu className=" text-white text-xl" />
          </button>
        </div>
        </div>
        <Drawer onClose={onClose} open={open}>
          <ul className=" text-lg text-center">
            <li className=" hover:cursor-pointer hover:font-semibold mb-4">
              Home
            </li>
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
