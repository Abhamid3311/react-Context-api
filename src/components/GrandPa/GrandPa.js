import React, { createContext } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './GrandPa.css';


export const RingContext = createContext('Diamond');

const GrandPa = () => {
    return (
        <RingContext.Provider value='Tiner Ring'>
            <div className='grandpa' style={{ "display": "flex" }}>
                <Father></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </div>
        </RingContext.Provider>
    );
};

export default GrandPa;