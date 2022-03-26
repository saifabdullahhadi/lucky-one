import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    const addToCart = (product) =>{
        // console.log(product.name);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    const removeFromCart = () =>{
        const newCart = [];
        setCart(newCart);
    }
    const randomChoice = () =>{
        const random = cart[Math.floor(Math.random() * cart.length)];
        setCart([random]);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product =><Product
                    key={product.id}
                    product ={product}
                    addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart key={cart.id} 
                cart={cart} 
                removeFromCart={removeFromCart} 
                randomChoice={randomChoice}
                ></Cart>
            </div>

        </div>
    );
};

export default Shop;