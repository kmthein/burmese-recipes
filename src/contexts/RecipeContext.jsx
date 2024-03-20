import { createContext, useState } from "react";

export const RecipeContext = createContext();

export const RecipeContextProvider = ({children}) => {
    const [savedRecipes, setSavedRecipes] = useState([]);

    const savedId = savedRecipes.map(recipe => recipe.Guid);

    return (
        <RecipeContext.Provider value={{savedRecipes, setSavedRecipes, savedId}}>
            {children}
        </RecipeContext.Provider>
    )
}