import { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import Recipe from './Recipe';
import './App.css'


function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('./recipe.json')
    .then(res => res.json())
    .then(data => setRecipes(data));
  },[])
  
  return (
    <>
      <Header></Header>
      <div>
        <h2 className='text-4xl font-semibold text-center mt-7'>Our Recipes</h2>
        <p className='text-center my-3'>Recipes are culinary roadmaps, guiding us through flavors and techniques, turning ingredients <br />
        into delicious creations that satisfy cravings</p>
        <div className="main-container mx-14">
          <div className="cards-container w-2/3">
            {
              recipes.map(recipe => <Recipe 
                key={recipe.recipe_id}
                recipe ={recipe}>
                </Recipe>)
            }
            
          </div>
          <div className="cart-container">

          </div>
        </div>
      </div>

    </>
  )
}

export default App
