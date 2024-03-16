import { useState } from 'react'
import Header from './Components/Header/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div className="main-container mx-14">
        <div className="cards-container w-2/3">
            <h1>For Cards</h1>
        </div>
        <div className="cart-container">
            <h1>For Cart</h1>
        </div>
      </div>
    </>
  )
}

export default App
