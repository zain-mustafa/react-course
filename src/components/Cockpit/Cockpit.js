import React from 'react';
import Classes from './Cockpit.css'

const cockpit = (props) => {

    const classNames = [];
    if (props.persons.length <= 2) {
        classNames.push('red');
    }
    if (props.persons.length <=1) {
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

export default cockpit;