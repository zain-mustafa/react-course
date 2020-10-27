import React, { Component } from 'react';

import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../components/hoc/withClass';
import Aux from '../components/hoc/Aux';
import AuthContext from '../context/auth-context'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {
        id: 'asdfsadf', name: 'Max', age: 28
      },
      {
        id: 'sssss', name: 'Manu', age: 29
      },
      {
        id: 'aaaaaaa', name: 'Stephanie', age: 26
      },
    ],
    otherState: 'some other value',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  nameChangeHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });

      const person = {...this.state.persons[personIndex]};
      
      person.name = event.target.value;
      const persons = [...this.state.persons];
      persons[personIndex] = person;

    this.setState({persons: persons});
  } 

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    console.log('[App.js] render');

    let persons = null;
    if(this.state.showPersons) {
      persons = 
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />
    }



    return (
        // <WithClass classes="App">
        <Aux>
          <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
          <Cockpit 
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />
          </AuthContext.Provider>
         {persons}
         </Aux>
    );
  }
}

export default withClass(App, "App");
