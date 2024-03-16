import { useState } from 'react'
import Header from './Components/Header/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div>
        <h2 className='text-4xl font-semibold text-center mt-7'>Our Recipes</h2>
        <p className='text-center my-3'>Recipes are culinary roadmaps, guiding us through flavors and techniques, turning ingredients <br />
        into delicious creations that satisfy cravings</p>
        <div className="main-container mx-14">
          <div className="cards-container w-2/3 flex justify-center gap-4">
            <div className="card-item">
              <img className='card-img' src="https://i.ibb.co/Dg4gDBC/spaghetti.jpg" alt="" />
              <h4 className='font-bold my-1'>Spaghetti Carbonara</h4>
              <p>A classic Italian pasta dish with creamy sauce, crispy bacon, and Parmesan cheese.</p>
              <h6 className='font-bold'>Ingredients: 6</h6>
              <ul>
                <li>350g spaghetti</li>
                <li>150g pancetta</li>
                <li>3 Eggs</li>
              </ul>
              <button className='border-2 bg-green-600 rounded-3xl p-[6px] font-semibold mr-4 mt-3'>Want to Cook</button>
            </div>
            
          </div>
          <div className="cart-container">

          </div>
        </div>
      </div>

    </>
  )
}

export default App
