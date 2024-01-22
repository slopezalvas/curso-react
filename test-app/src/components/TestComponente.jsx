import React, { Fragment, useState } from 'react';

export function TestComponente(props){

    const [frase, setFrase] = useState("Esta es la frase inicial.")
    
    return (
        <Fragment>
            {frase}
            <br />
            Hola
            <br />
            <button onclick= {setFrase}>
                Frozzen se derrumba
            </button>
        </Fragment>
        
    );
}