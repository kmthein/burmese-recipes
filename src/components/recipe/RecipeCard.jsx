import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imgNotFound from "../../images/img_not_found.jpg";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import recipes from "../../json/BurmeseRecipes.json";
import { RecipeContext } from "../../contexts/RecipeContext";
import { toast } from "react-toastify";

const RecipeCard = ({ recipe }) => {
  const { savedRecipes, setSavedRecipes, savedId } = useContext(RecipeContext);

  const saveRecipeHandler = (id) => {
    const isSaved = savedRecipes.find((recipe) => recipe.Guid == id);
    let saveRecipe;
    if (!isSaved) {
      saveRecipe = recipes.find((recipe) => recipe.Guid == id);
      setSavedRecipes((prev) => [...prev, saveRecipe]);
      toast.success("Recipe Saved.");
    } else {
      saveRecipe = savedRecipes.filter((recipe) => recipe.Guid != id);
      setSavedRecipes(saveRecipe);
      toast.warning("Recipe Unsaved.");

    }
  };

  return (
    <div className=" border w-[90%] md:w-[40%] xl:w-[23%] md:ml-[5%] xl:ml-0 my-2 mb-4 mx-auto md:mx-2 rounded-lg hover:-translate-y-1 hover:duration-200 relative">
      <Link to={`/recipes/${recipe.Guid}`}>
        <img
          src={`/img/${recipe.Name}.jpg`}
          onError={(e) => (e.target.src = imgNotFound)}
          className=" w-full h-[257px] object-cover object-center rounded-tl-lg rounded-tr-lg"
          alt=""
        />
      </Link>
      <div
        onClick={() => saveRecipeHandler(recipe.Guid)}
        className={`absolute top-1 bg-white  rounded-md right-2 px-[5px] py-3 cursor-pointer`}
      >
        {savedId.includes(recipe.Guid) ? (
          <FaHeart className=" text-xl  text-[#FB7E0B] hover:text-[22px]" />
        ) : (
          <FaRegHeart className=" text-xl  text-[#FB7E0B] hover:text-[22px]" />
        )}
      </div>
      <div className=" my-4 mx-4">
        <h4 className=" font-semibold text-[17px]">
          {recipe.Name.substr(0, 35)}
          {recipe.Name.length > 35 && "..."}
        </h4>
      </div>
    </div>
  );
};

export default RecipeCard;
