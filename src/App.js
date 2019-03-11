import React, { Component } from 'react';
import './App.css'
class App extends Component {

  state = {
    todos: [
      {name: 'clean dishes', id: 1, complete: false},
      {name: 'wash up', id: 2, complete: false},
      {name: 'buy milk', id: 3, complete: false}
    ]
  }

  handleTodo(id){
    const state = [...this.state.todos]
    const todoFound = state.find(todo => todo.id === id)
    todoFound.complete = !todoFound.complete
    this.setState({todos: state})
  }

  render() {
    console.log()
    return (
      <div className="App">
        <h4> Todos </h4>
        {this.state.todos.map(todo => (
          <div className="todo">
            <span className={todo.complete ? 'done' : ''}> {todo.name} </span>
            <button onClick={() => this.handleTodo(todo.id)}> {todo.complete ? 'undo' : 'done'} </button>
          </div>
        ))}
        You have {this.state.todos.filter(todo => !todo.complete).length} todos left to do
      </div>
    );
  }
}

export default App;
