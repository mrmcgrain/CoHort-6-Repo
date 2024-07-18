import React, { useState } from 'react';

function ToyBox() {
    const [toy, setToy] = useState('car');

    return (
        <div>
            {console.log("toy is a", toy)}

            <p>Current toy: {toy}</p>

            <button onClick={() => setToy('robot')}>Change to Robot</button>

            <button onClick={() => setToy('doll')}>Change to Doll</button>

            <button onClick={() => setToy('Plane')}>Change to Plane</button>

            <button onClick={() => setToy('Car')}>Change to Car</button>

        </div>
    );
}

export default ToyBox;