import React, { useEffect, useState } from 'react';

const HookComponent = (props) => {
    const [title, setTitle] = useState("Un titre bof");

    useEffect(() => {
        console.log("Je ne m'exécuterai qu'une seule et unique fois, lorsque le composant sera monté");
    }, []);

    const updateComposant = () => {
        setTitle("Un titre de fou");
    }

    return (
        <div className='HookComponent'>
            <h1>{title}</h1>
            <button onClick={updateComposant}>Update Composant</button>
        </div>
    );
};

export default HookComponent;