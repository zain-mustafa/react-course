import React, { Component } from 'react';

import './App.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

class App extends Component {
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

    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary 
            key={person.id}
            >
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age} 
                changed={(event) => this.nameChangeHandler(event, person.id)} />
            </ErrorBoundary>
          })}
    </div>
      );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <=1) {
      classes.push('bold');
    }



    return (
        <div className="App">
        <h1>This is a test file!</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
        onClick={this.togglePersonsHandler}>
          Toggle Name
        </button>
         {persons}
      </div>
    );
  }
}

export default App;
