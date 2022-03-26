import React from 'react';
import './Cart.css'
const Cart = ({cart, removeFromCart, randomChoice}) => {
    return (
        <div>
            <h2 className='cart-title'>Selected Watches</h2>
            <div className="cart-info">
                {
                    cart.map(cart => <p className='cart-name'><div className='cart-details'>
                        <img className='cart-picture' src={cart.picture} alt="" />
                        {cart.name}         
                    </div></p>)
                }
            </div>
            <button onClick={randomChoice} className='choose-btn'>BEST FOR ME</button>
            <br />
            <button onClick={removeFromCart} className='choose-btn'>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;