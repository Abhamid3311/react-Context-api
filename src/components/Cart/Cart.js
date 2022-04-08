import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    //Conditional Rendering options
    //1.Element Variable
    //2.Ternary Oparetor: condition? true:false
    //3. && oparetor (shortHand) {if 1st one True Than go for 2nd}
    //4. || oparetor  {if 1st one False Than go for 2nd}

    let greetings;
    if (cart.length === 0) {
        greetings = <p>Please add atleast One item!!!</p>
    }
    else if (cart.length === 1) {
        greetings = <p> Please Add more item!!</p>
    } else {
        greetings = <p>Thanks for adding</p>
    }


    return (
        <div>
            <h1>Item selected: {cart.length}</h1>
            {greetings}
            {
                cart.map(tShirt => <p>{tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {cart.length === 0 || <div>
                <h2>Yes You are Buying!!</h2>
            </div>}

            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Gift for 3 person</p>
            </div>}
            {cart.length !== 4 ? <p>Keep Adding</p> : <button>Clear All</button>}
        </div>
    );
};

export default Cart;