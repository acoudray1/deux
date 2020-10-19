import React, { useEffect, useState } from 'react';

const HookComponent = (props) => {
    const [mario, setMario] = useState(true);
    const [title, setTitle] = useState("Un titre bof");

    /*useEffect(() => {
        console.log("Je ne m'exécuterai qu'une seule et unique fois, lorsque le composant sera monté");
    }, []);*/

    useEffect(() => {
        console.log("Je m'exécuterai quand le composant sera monté et à chaque mise à jour du composant");
    });

    const toggleCharacter = () => {
        setMario(!mario);
    }

    const updateComposant = () => {
        setTitle("Un titre de fou");
    }

    return (
        <div className='HookComponent'>
            <h1>{title}</h1>
            {mario ? <h3>It's me MARIOOOO</h3> : <h3>I'm Lord Bowser</h3>}
            <button onClick={toggleCharacter}>Change character</button>
            <button onClick={updateComposant}>Update Composant</button>
        </div>
    );
};

export default HookComponent;