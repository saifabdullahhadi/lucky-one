import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => console.log(data));
    },[])
    return (
        <div className='shop-container'>
            <div className="products-container">
                <h4>This is for products</h4>
            </div>
            <div className="cart-container">
                <h4>Order summary</h4>
            </div>
        </div>
    );
};

export default Shop;