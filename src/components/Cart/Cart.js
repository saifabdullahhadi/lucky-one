import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let total = '';
    for(const product of cart){
        total = total+ product.name;
    }
    return (
        <div>
            <h2>Selected Watches</h2>
            <div className="cart-info">
                
                <h4>{total}</h4>
            </div>
            <button className='choose-btn'>BEST FOR ME</button>
            <br />
            <button className='choose-btn'>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;