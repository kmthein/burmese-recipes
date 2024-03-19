import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/home/Hero'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Main from './layouts/Main'
import Home from './pages/Home'
import RecipeDetails from './pages/RecipeDetails'

const router = createBrowserRouter([{
  path: "/",
  element: <Main />,
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: "/recipes/:id",
      element: <RecipeDetails />
    }
  ]
}])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App