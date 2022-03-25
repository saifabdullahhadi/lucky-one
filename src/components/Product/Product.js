import { faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
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
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;