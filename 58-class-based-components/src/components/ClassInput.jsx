/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example'],
      inputVal: '',
      editingTodo: null,
      editInputVal: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.completeTodo = this.completeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.resubmitTodo = this.resubmitTodo.bind(this);
    this.handleTodoEditInputChange = this.handleTodoEditInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      todos: state.todos.concat(state.inputVal),
      inputVal: '',
    }));
  }

  completeTodo(todo) {
    this.setState((state) => ({
      ...state,
      todos: state.todos.filter((val) => val !== todo),
    }));
  }

  editTodo(todo) {
    this.setState((state) => ({
      ...state,
      editingTodo: todo,
      editInputVal: todo,
    }));
  }

  resubmitTodo(todo) {
    if (todo === this.state.editInputVal) {
      this.setState((state) => ({
        ...state,
        editingTodo: null,
      }));
      return;
    }

    if (this.state.todos.includes(this.state.editInputVal)) return;

    this.setState((state) => ({
      ...state,
      todos: state.todos.map((val) => (val === todo ? state.editInputVal : val)),
      editingTodo: null,
    }));
  }

  handleTodoEditInputChange = (e) => {
    this.setState((state) => ({
      ...state,
      editInputVal: e.target.value,
    }));
  };

  render() {
    return (
      <section>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="task-entry">Enter a task: </label>
          <input type="text" name="task-entry" value={this.state.inputVal} onChange={this.handleInputChange} />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo}>
              {todo === this.state.editingTodo && (
                <>
                  <label htmlFor="todo-edit">Rename: </label>
                  <input
                    type="text"
                    name="todo-edit"
                    value={this.state.editInputVal}
                    onChange={this.handleTodoEditInputChange}
                  />
                  <button onClick={() => this.resubmitTodo(todo)}>Update</button>
                </>
              )}
              {todo !== this.state.editingTodo && (
                <>
                  {todo}
                  <button onClick={() => this.completeTodo(todo)}>Complete</button>
                  <button onClick={() => this.editTodo(todo)}>Edit</button>
                </>
              )}
            </li>
          ))}
        </ul>
        <div>Count: {this.state.todos.length}</div>
      </section>
    );
  }
}

export default ClassInput;
