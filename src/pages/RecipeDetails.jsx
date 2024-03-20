import React, { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import { Link, useNavigate, useParams } from "react-router-dom";
import imgNotFound from "../images/img_not_found.jpg";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { ScaleLoader } from "react-spinners";
import recipes from "../json/BurmeseRecipes.json";

const RecipeDetails = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const recipe = recipes.find((recipe) => recipe.Guid == id);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      {loading && (
        <div className="flex justify-center mt-[10%] min-h-[50vh]">
          <ScaleLoader color="#ff9900" />
        </div>
      )}
      {!loading && (
        <div className="px-[3%] xl:px-[5%] py-4 relative z-50 mb-10 2xl:min-h-[50vh] w-[95%] mx-auto xl:mx-0 ">
          <div className="flex justify-between items-center">
            <Breadcrumb
              items={[
                {
                  title: <Link to="/">Home</Link>,
                },
                {
                  title: "Recipe",
                },
                {
                  title: recipe?.Name,
                },
              ]}
            />
            <IoReturnDownBackSharp
              onClick={() => navigate(-1)}
              className=" text-3xl cursor-pointer"
            />
          </div>
          <div className="mt-6 xl:flex gap-20">
            <div className=" 2xl:w-[35%]">
              <img
                src={`/img/${recipe?.Name}.jpg`}
                onError={(e) => e.target.src = imgNotFound}
                alt=""
                className=" w-full 2xl:h-[600px] object-cover object-center"
              />
              <div className=" mt-8 leading-7">
                <p>{recipe?.description}</p>
              </div>
            </div>
            <div className=" xl:w-[35%]">
              <h1 className=" text-[20px] xl:text-[22px] 2xl:text-[30px] font-semibold text-center md:text-left mb-8">
                {recipe?.Name}
              </h1>
              <div>
                <h5 className="mb-1 text-xl font-semibold">Category</h5>
                {recipe?.UserType == "001" ? "အသားဟင်း" : "သက်သက်လွတ်"}
              </div>
              <div className="mt-8 xl:mt-20 xl:hidden block">
                <h5 className="mb-1 text-xl font-semibold">Ingredients</h5>
                <pre className=" leading-loose">{recipe?.Ingredients}</pre>
              </div>
              <div className="mt-8">
                <h5 className="mb-2 text-xl font-semibold">Instructions</h5>
                <p className=" leading-loose">{recipe?.CookingInstructions}</p>
              </div>
            </div>
            <div>
            <div className="mt-8 xl:mt-16 hidden xl:block">
                <h5 className="mb-1 text-xl font-semibold">Ingredients</h5>
                <pre className=" leading-loose">{recipe?.Ingredients}</pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeDetails;
