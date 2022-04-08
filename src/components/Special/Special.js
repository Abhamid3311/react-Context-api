import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h3>Special One</h3>
            {ring}

        </div>
    );
};

export default Special;