import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = () => {
    return (
        <div>
            <h2>Father</h2>
            <Myself></Myself>
            <Brother></Brother>
            <Sister></Sister>
        </div>
    );
};

export default Father;