import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Person.css'


class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');

    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return (
        <Aux>
            <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
        </Aux>
    )
    }
};

export default Person;