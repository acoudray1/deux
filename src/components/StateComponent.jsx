import React, { useState } from 'react';

const StateComponent = () => {
    const [mario, setMario] = useState(true);
    const [title, setTitle] = useState('Bowser');

    const fn = () => {
        setMario(!mario);
        let newTitle = mario ? 'Mario' : 'Bowser';
        setTitle(newTitle);
    };

    return (
        <div className='StateComponent'>
            <div>{mario ? <h1>Mario</h1> : <h1>Bowser</h1>}</div>
            <div>
                <button onClick={fn}>Change to {title}</button>
            </div>
        </div>
    );
};

export default StateComponent;