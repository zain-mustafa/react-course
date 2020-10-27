import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Aux';
import AuthContext from '../../../context/auth-context';
import withClass from '../../hoc/withClass';
import './Person.css'


class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createdRef();
    }

    render() {
        console.log('[Person.js] rendering...');

    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return (
        <Aux> 
            <AuthContext>
                {(context) => 
                context.authenticated ? <p>Authenticated!</p> : 
                <p>Please log in</p>
                }
            </AuthContext>
            <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input type="text"
            // ref={(inputEl) => {this.inputElement = inputEl}} 
            ref={this.inputElementRef}
            onChange={this.props.changed} 
            value={this.props.name}/>
        </Aux>
    )
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person);