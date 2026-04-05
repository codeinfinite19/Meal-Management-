import React from 'react';
import './FoodCart.css';

const FoodCart = ({ meal, addToCart }) => {
    return (

        <div>

            <div className='foodDiv'>
             
            <h3>{meal.strMeal}</h3>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <button onClick={() => addToCart(meal) }>Add to cart</button>
        </div>



           
        </div>
        
    );
};

export default FoodCart;