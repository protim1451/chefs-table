import { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import Recipe from './Recipe';
import './App.css'
import { toast } from 'react-toastify';



function App() {
  const [recipes, setRecipes] = useState([]);
  const [cart, setCart] = useState([]);
  const [clickedCount, setClickedCount] = useState(0);
  const [clicked, setClicked] = useState(0);
  const [cookingItems, setCookingItems] = useState([]);
  const [cookingTime, setCookingTime] = useState(0);

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
      setClickedCount(prevCount => prevCount + 1);
    }
    else {
      toast('already exist');
    }
  }
  const handleAddToCooking = (item) => {
    setClicked(prevCount => prevCount + 1);
    setClickedCount(prevCount => prevCount - 1);
    setCookingItems(prevItems => [...prevItems, item]);
    setCart(prevCart => prevCart.filter(cartItem => cartItem.recipe_id !== item.recipe_id));
  };

  const totalCookingTime = cookingItems.reduce((total, item) => total + item.preparing_time, 0);
  const totalCalories = cookingItems.reduce((total, item) => total + item.calories, 0);

  return (
    <>
      <Header></Header>
      <div>
        <h2 className='text-4xl font-semibold text-center mt-7'>Our Recipes</h2>
        <p className='text-center my-3'>Recipes are culinary roadmaps, guiding us through flavors and techniques, turning ingredients <br />
          into delicious creations that satisfy cravings</p>
        <div className="main-container mx-14">
          <div className="cards-container w-3/5">
            {
              recipes.map(recipe => <Recipe
                key={recipe.recipe_id}
                handleCart={handleCart}
                recipe={recipe}>
              </Recipe>)
            }

          </div>
          <div className="cart-container w-2/5 my-7">
            <h5 className='font-bold text-center pt-4'>Want to Cook: {clickedCount}</h5>
            <hr />
            <div className='flex justify-between items-center'>
              <table className='p-1 w-full text-center mt-3'>
                <thead>
                  <tr>
                    <th>Recipe id</th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, idx) => (
                    <tr key={idx}>
                      <td>{item.recipe_id}</td>
                      <td>{item.recipe_name}</td>
                      <td>{item.preparing_time} min</td>
                      <td>{item.calories}</td>
                      <td><button onClick={(e) => { handleAddToCooking(item) }} className='border-2 bg-green-600 
              rounded-3xl p-[6px] font-semibold mr-4 mt-3 max-h-10'>
                        Preparing</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <hr />
            <h5 className='font-bold text-center mt-8'>Currently Cooking: {cookingItems.length}</h5>
            <hr />
            <div>
              <table className='p-4 w-full text-center mt-6 space-y-5'>
                <thead>
                  <tr>
                    <th>Recipe id</th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {cookingItems.map((item, idx) => (
                    <tr className='pl-3' key={idx}>
                      <td>{item.recipe_id}</td>
                      <td>{item.recipe_name}</td>
                      <td>{item.preparing_time} Min</td>
                      <td>{item.calories}</td>
                    </tr>
                  ))}
                  {/* <tr className='calculation mt-5'>
                    <td></td>
                    <td></td>
                    <td className='font-bold'>Total time = <br /> {totalCookingTime} min</td>
                    <td className='font-bold'>Total Calories = <br />{totalCalories}</td>
                  </tr> */}
                </tbody>
              </table>
              <hr />
              <div className='flex justify-end gap-8 mt-5 pr-4'>
                <p className='font-bold'>Total time =  {totalCookingTime} min</p>
                <p className='font-bold'>Total Calories = {totalCalories}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
