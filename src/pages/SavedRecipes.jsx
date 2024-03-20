import React, { useContext, useState } from "react";
import RecipeCard from "../components/recipe/RecipeCard";
import { RecipeContext } from "../contexts/RecipeContext";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SavedRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const { savedRecipes } = useContext(RecipeContext);
  const navigate = useNavigate();
  return (
    <div className="mt-10 px-[3%] xl:px-[5%] mx-auto mb-8 min-h-screen">
      <div className="flex justify-between">
        <h1 className=" text-[20px] font-semibold text-center md:text-left">
          Saved Recipes
        </h1>
        <IoReturnDownBackSharp
          onClick={() => navigate(-1)}
          className=" text-3xl cursor-pointer mr-[6%]"
        />
      </div>
      <div className="mt-4 flex flex-wrap">
        {loading && <p>Loading...</p>}
        {savedRecipes &&
          savedRecipes.length > 0 &&
          savedRecipes.map((recipe, i) => (
            <RecipeCard recipe={recipe} key={i} />
          ))}
      </div>
    </div>
  );
};

export default SavedRecipes;
