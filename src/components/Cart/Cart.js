import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
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
            <button className='choose-btn'>BEST FOR ME</button>
            <br />
            <button className='choose-btn'>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;