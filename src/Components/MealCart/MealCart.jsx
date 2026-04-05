import React from 'react';
import './MealCart.css'
import FoodCart from './FoodCart';
import { useState } from 'react';
import Addcart from '../Addcart/Addcart';

const MealCart = ({ meals }) => {

    const [cart,setCart] = useState([]);

    const addToCart = (foodData)=>{
        // cart.push(foodData);
        setCart([...cart,foodData]);

    }

    const handleOrder = ()=>{
        
            setCart([]);
            alert("Your order is placed successfully");

    }

    

    return (
       

<div className='card-parent'>


    <div className='left-cart'>
        {
           meals.map(meal => 
             <FoodCart key={meal.idMeal} addToCart={addToCart} meal = {meal} />
          
           )
            
       }
    </div>

    <div className='right-cart'>
        <h1>Buy Food </h1>
        <Addcart cart={cart} />
        <button onClick={handleOrder}>Order Now</button>
    </div>
     

</div>
           
           
       
        

    );
};

export default MealCart;