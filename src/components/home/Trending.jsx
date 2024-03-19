import React, { useEffect, useState } from "react";
import RecipeCard from "../recipe/RecipeCard";
import RECIPES from "../../json/BurmeseRecipes.json";
import { Pagination } from "flowbite-react";
import { ScaleLoader } from "react-spinners";

const Trending = () => {
  const feature = RECIPES;
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(8);
  const totalPages = Math.ceil((recipes.length + 1) / recipesPerPage);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = RECIPES.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginate = (page) => {
    setLoading(true);
    setCurrentPage(page);
    setTimeout(() => {
      setLoading(false)
    }, 500)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    setRecipes(RECIPES);
    setLoading(false);
  }, []);

  return (
    <div className="pt-20 px-[3%] xl:px-[5%] mx-auto mb-20" id="recipes">
      <div className=" md:flex justify-between ">
        <h1 className="text-[25px] xl:text-[25px] 2xl:text-[30px] font-bold text-center md:text-left mx-auto mb-8">
            Latest
            <span className=" text-[#FB7E0B]"> Recipes</span>
          </h1>
      </div>
      {loading && (
        <div className="flex justify-center mt-[10%] min-h-[50vh]">
          <ScaleLoader color="#ff9900" />
        </div>
      )}
      <div className="md:flex flex-wrap gap-5">
        {!loading && feature &&
          feature.length > 0 &&
          currentRecipes.map((recipe, i) => <RecipeCard recipe={recipe} key={i} />)}
      </div>
      {feature.length > 8 && (
        <div className="flex overflow-x-auto mt-2 sm:justify-center items-end">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={paginate}
          />
        </div>
      )}
    </div>
  );
};

export default Trending;
