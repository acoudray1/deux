import React from 'react';

const tab = ['Un', 'Deux', 'Trois', 'Quatre'];

const style = {
    color: 'green',
};

const ListComponent = () => {
    return (
        <div className='ListComponent'>
            <ul style={style}>
                {tab.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
        </div>
    );
}

export default ListComponent;