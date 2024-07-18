import React, { useState } from 'react';

function ToyBox({ handleClick }) {
    const [toy, setToy] = useState('car');

    return (
        <div>

            {console.log(toy)}

            <button onClick={handleClick}>test</button>


            <h1>{toy}</h1>
            {/* <button onClick={() => setToy('robot')}>Change to Robot</button>
            <button onClick={() => setToy('doll')}>Change to Doll</button> */}
        </div>
    );
}

export default ToyBox;