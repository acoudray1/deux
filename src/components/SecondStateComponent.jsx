import React from 'react';

const SecondStateComponent = (props) => {

    const changeTitle = () => {
        props.setTitle('Un nouveau titre');
        document.getElementsByClassName('changeTitleButton').item(0).style.display = 'none';
    }

    return (
        <div className='SecondStateComponents'>
            <h1>{props.title}</h1>
            <button className='changeTitleButton' style={{display: 'inline-block'}} onClick={changeTitle}>Change the title</button>
        </div>
    );
};

export default SecondStateComponent;