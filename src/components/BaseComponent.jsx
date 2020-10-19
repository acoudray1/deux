import React, { Fragment } from 'react';
import styles from './BaseComponent.module.css';

const title = 'Hello World!';
const description = 'Initiation React';

const Composant = () => {
    return (
        <Fragment>
            <h1 style={{ backgroundColor: 'red' }}>{title}</h1>
            <span className={styles.description}>{description}</span>
        </Fragment>
    );
};

export default Composant;