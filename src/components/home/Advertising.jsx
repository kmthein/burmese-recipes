import React from 'react'
import advertising2 from "../../images/myanmar_food.jpg";

const Advertising = () => {
  return (
    <div className=' mt-10 h-[700px] relative'>
        <img src={advertising2} className=' h-[700px] w-full object-cover' />
        <div className=' bg-white rounded-lg absolute top-[40%] left-[20%] md:left-[30%] xl:top-[40%] xl:left-[50%] w-[70%] md:w-[50%] xl:w-[28%] py-5 px-4 md:py-8 md:px-7 xl:py-12 xl:px-8'>
            <h3 className=' xl:text-2xl font-bold'>+100 Delicious Recipes That Easy to Cook and Quick</h3>
            <p className=' text-sm xl:text-md md:mt-2 xl:mt-4 text-gray-600'>Find the perfect food ideas to start your day with quickly and easily</p>
        </div>
    </div>
  )
}

export default Advertising