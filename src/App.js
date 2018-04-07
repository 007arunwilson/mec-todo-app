import React, { Component } from 'react';
import Header from './Header';
import Todotextbox from  './Todotextbox';
import Todolist from './Todolist';
import './App.css';

class App extends Component {

  state = {todoInputValue:'',todolist:[]};

  textChangeFn = (event)=>{
    let input_value =  event.target.value;
    // console.log(input_value);
    // this.state = {todoInputValue:''};
    // console.log(this.state);

    this.setState({todoInputValue:input_value});

    // console.log(this.state);

  }

  todoSubmit=()=>{
      let currentState = {...this.state};
      currentState.todolist.push(currentState.todoInputValue);
      currentState.todoInputValue = '';
      this.setState(currentState);
  }

  render() {
    return (
      <div className="root-div" >
        <Header title2="A simple todo App ...." 
        title="New Todo App" 
        ></Header>
        <Todotextbox todosubmitfn={this.todoSubmit} newValue={this.state.todoInputValue} changeFn={this.textChangeFn} />
        <hr/>
        <Todolist todolist={this.state.todolist} />
      </div>
    );
  }
}

export default App;
