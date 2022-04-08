import React, { useState } from 'react';
import "./Home.css";
import '../Cart/Cart';
import Cart from '../Cart/Cart';
import useTshirts from '../../hooks/useTshirts';
import Tshirt from '../Tshirt/Tshirt';


const Home = () => {
    const [tShirts, setTshirts] = useTshirts();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        const exist = cart.find(tShirts => tShirts._id === selectedItem._id);
        if (!exist) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        } else {
            alert('Item Alreadt Exist');
        }

    };

    const handleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tShirts => tShirts._id !== selectedItem._id);
        setCart(rest);
    }
    return (
        <div className='home-container'>
            <div className="tshirts-container">

                {
                    tShirts.map(tShirt => <Tshirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;