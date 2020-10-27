import React, { useEffect, useRef } from 'react';
import AuthContext from '../../context/auth-context';
import Classes from './Cockpit.css'

const Cockpit = (props) => {
    const togglBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // setTimeout(() => {
        //     alert("Something!");
        // }, 1000);
    togglBtnRef.current.click();
    return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');
    };
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
        <button ref={togglBtnRef}
        onClick={props.clicked}>
          Toggle Persons
        </button>
        <AuthContext.Consumer>
           {(context) => <button onClick={props.login}></button>} 
        </AuthContext.Consumer>
        </div>
    );
}

export default React.memo(Cockpit);