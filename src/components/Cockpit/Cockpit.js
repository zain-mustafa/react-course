import React, { useEffect } from 'react';
import Classes from './Cockpit.css'

const Cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert("Something!");
        }, 1000);
    }, []);

    const classNames = [];
    if (props.personsLength <= 2) {
        classNames.push('red');
    }
    if (props.personsLength <=1) {
        classNames.push('bold');
    }

    return (
        <div className={classNames}>
            <h1>This is a test file!</h1>
        <p>This is really working!</p>
        <button
        onClick={props.clicked}>
          Toggle Name
        </button>
        </div>
    );
}

export default React.memo(Cockpit);