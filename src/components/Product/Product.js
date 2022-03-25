import React from 'react';
import './Product.css'

const Product = (props) => {
    const{product, addToCart} = props;
    const{picture,price,name} = product;
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h3 className='product-name'>{name}</h3>
            <h4 className='product-price'>Price: $ {price}</h4>
            <button onClick={() => addToCart(product)} className='btn-cart'>
            <p className='btn-text'>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;