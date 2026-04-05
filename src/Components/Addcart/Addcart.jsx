import React from 'react';

const Addcart = ({cart}) => {
    return (
        <div>
            {
                cart.map( c => <p>
                    
                    <ul>
                        <li>{c.strMeal}</li>
                    </ul>
                </p>)
            }
            
        </div>
    );
};

export default Addcart;