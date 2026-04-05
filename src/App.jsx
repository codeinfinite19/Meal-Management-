import { Suspense } from 'react'
import './App.css'
import MealCart from './Components/MealCart/MealCart'
import Navbar from './Components/Navbar/Navbar'
import { useEffect, useState } from 'react'

function App() {

  const mealsApi = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
     

     const [meals, setMeals] = useState([]);

      useEffect(() => {
        fetch(mealsApi)
        .then(res => res.json())
        .then(data => setMeals(data.meals));
      }, []);

  return (
    <>
    <Navbar />


<Suspense fallback={<div>Loading...</div>}>   
    <MealCart meals={meals} />

</Suspense>

    
  
    </>
  )
}

export default App
