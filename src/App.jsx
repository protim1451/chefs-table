import { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import Recipe from './Recipe';
import './App.css'
import { toast } from 'react-toastify';



function App() {
  const [recipes, setRecipes] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('./recipe.json')
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, [])

  const handleCart = (recipe) => {
    //console.log(recipe);
    const isExist = cart.find(rec =>
      rec.recipe_id == recipe.recipe_id);
    if (!isExist) {
      setCart([...cart, recipe]);
    }
    else {
      toast('already exist');
    }
  }

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
                handleCart={handleCart}
                recipe={recipe}>
              </Recipe>)
            }

          </div>
          <div className="cart-container my-7">
            <h5 className='font-bold text-center'>Want to Cook: </h5>
            <div className='flex justify-between items-center'>
              <table className='p-2 w-full text-center mt-3'>
                <tr>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
                <tr>
                  <td>Caprese Salad</td>
                  <td>15 Min</td>
                  <td>220</td>
                </tr>
              </table>
              <button className='border-2 bg-green-600 
              rounded-3xl p-[6px] font-semibold mr-4 mt-3 max-h-10'>
                Preparing</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
