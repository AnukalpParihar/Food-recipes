import React from 'react';
import Meal from './Component/Meal';
import './Component/style.css';
// import Recipeindex from './Component/Recipeindex';
import { Routes ,Route } from 'react-router-dom';
import RecipeInfo from './Component/RecipeInfo';

function App() {
  
  return (
    <>
    <Routes>
    <Route path="/" element ={<Meal/>}/>
    <Route path="/:MealId" element={<RecipeInfo/>}/>
    </Routes>
    
    </>
  );
}

export default App;
// Anukalp Parihar
