import React from 'react';

const mario = true;

const isMario = () => {
    if (mario) {
        return <h1>Hello Mario!</h1>;
    } else {
        return <h1>Oh no it's Bowser!!! :'(</h1>;
    }
};

const SecondComposant = () => {
    return (
        <div className="BooleanComponent">
            <div>{mario ? <h1>Hello Mario!</h1> : <h1>Oh no it's Bowser!!! :'(</h1>}</div>
            <div>{mario && <h1>Hello Mario!</h1>}</div>
            <div>{isMario()}</div>
        </div>
    );
};

export default SecondComposant;