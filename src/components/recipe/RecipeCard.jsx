import React from 'react'
import { Link } from 'react-router-dom';
import imgNotFound from "../../images/img_not_found.jpg"

const RecipeCard = ({ recipe }) => {
  return (
    <div className=' border w-[90%] md:w-[40%] xl:w-[23%] md:ml-[5%] xl:ml-0 my-2 mb-4 mx-auto md:mx-2 rounded-lg hover:-translate-y-1 hover:duration-200'>
      <Link to={`/recipes/${recipe.Guid}`}>
        <img src={`/img/${recipe.Name}.jpg`} onError={e => e.target.src = imgNotFound} className=' w-full h-[257px] object-cover object-center rounded-tl-lg rounded-tr-lg' alt="" />
      </Link>
        <div className=' my-4 mx-4'>
            <h4 className=' font-semibold text-[17px]'>{recipe.Name.substr(0, 35)}{recipe.Name.length > 35 && "..."}</h4>
        </div>
    </div>
  )
}

export default RecipeCard