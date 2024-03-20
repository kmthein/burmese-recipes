import React, { useEffect, useState } from "react";
import RecipeCard from "../recipe/RecipeCard";
import RECIPES from "../../json/BurmeseRecipes.json";
import { Pagination } from "flowbite-react";
import { ScaleLoader } from "react-spinners";
import { MdOutlineNavigateNext } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const Trending = () => {
  const feature = RECIPES;
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(8);
  let totalPages;

  const [search, setSearch] = useState("");

  const [searchRecipes, setSearchRecipes] = useState([]);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  let currentRecipes;
  if(searchRecipes.length == 0) {
    totalPages = Math.ceil((recipes.length + 1) / recipesPerPage);
    currentRecipes = RECIPES.slice(indexOfFirstRecipe, indexOfLastRecipe);
  } else {
    totalPages = Math.ceil((searchRecipes.length + 1) / recipesPerPage);
    currentRecipes = searchRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  }

  const paginate = (page) => {
    setLoading(true);
    setCurrentPage(page);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    setRecipes(RECIPES);
    setLoading(false);
  }, []);

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    const recipe = recipes.filter((recipe) => recipe.Name.includes(search));
    console.log(recipe);
    setSearchRecipes(recipe);
  };

  return (
    <div className="pt-20 px-[3%] xl:px-[5%] mx-auto mb-20" id="recipes">
      <div className=" md:flex justify-between ">
        <h1 className="text-[25px] xl:text-[25px] 2xl:text-[30px] font-bold text-center md:text-left mx-auto mb-4">
          Latest
          <span className=" text-[#FB7E0B]"> Recipes</span>
        </h1>
      </div>
      <div className="flex justify-center mb-8">
        <div className="relative w-[300px] mx-auto xl:mx-0">
          <form onSubmit={searchSubmitHandler}>
            <input
              type="text"
              placeholder="Search by name..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              className=" border-[#FB7E0B] rounded-full w-[300px]"
            />
            <button
                type="submit"
                >
            <div className="rounded-full h-10 w-10 right-0 bg-[#FB7E0B] hover:bg-orange-400 absolute top-0 cursor-pointer flex justify-center items-center">
              
              <CiSearch
                className=" text-white text-3xl"
              />
            </div>
            </button>
          </form>
        </div>
      </div>
      {loading && (
        <div className="flex justify-center mt-[10%] min-h-[50vh]">
          <ScaleLoader color="#ff9900" />
        </div>
      )}
      <div className="md:flex flex-wrap gap-5">
      {!loading &&
          searchRecipes &&
          searchRecipes.length > 0 &&
          currentRecipes.map((recipe, i) => (
            <RecipeCard recipe={recipe} key={i} />
          ))}
        {!loading &&
          searchRecipes.length == 0 &&
          feature &&
          feature.length > 0 &&
          currentRecipes.map((recipe, i) => (
            <RecipeCard recipe={recipe} key={i} />
          ))}
      </div>
      {feature.length > 8 && searchRecipes.length == 0 && (
        <div className="flex overflow-x-auto mt-2 sm:justify-center items-end">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={paginate}
          />
        </div>
      )}
      {searchRecipes.length > 8 && (
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
