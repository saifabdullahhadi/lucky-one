import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product =><Product
                    key={product.id}
                    product ={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Selected Watches</h4>
                <button className='choose-btn'>BEST FOR ME</button>
                <br />
                <button className='choose-btn'>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Shop;