
import React from 'react';
import './Tshirt.css';

const Tshirt = (props) => {
    const { handleAddToCart, tShirt } = props
    const { name, price, picture } = tShirt;
    return (
        <div className='tShirt-container'>
            <img src={picture} alt="" />
            <div className='tShirt-detail'>
                <h2>{name}</h2>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddToCart(tShirt)} className='add-btn'>Add to cart</button>

        </div>
    );
};

export default Tshirt;