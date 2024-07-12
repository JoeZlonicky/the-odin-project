import React, { useState } from 'react';

// eslint-disable-next-line react/function-component-definition, react/prop-types
const FunctionalInput = ({ name }) => {
  /*
    We declare two state variables and their setters,
    one to store the To-Do's
    and the other to store the value of the input field
  */
  const [todos, setTodos] = useState(['Just some demo tasks', 'As an example']);
  const [inputVal, setInputVal] = useState('');

  const [editingTodo, setEditingTodo] = useState();
  const [editInputVal, setEditInputVal] = useState('');

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal.length === 0) return;
    if (todos.includes(inputVal)) return;
    setTodos((current) => [...current, inputVal]);
    setInputVal('');
  };

  const completeTodo = (todo) => {
    setTodos((current) => current.filter((val) => val !== todo));
  };

  const editTodo = (todo) => {
    setEditingTodo(todo);
    setEditInputVal(todo);
  };

  const resubmitTodo = (todo) => {
    if (todo === editInputVal) {
      setEditingTodo(null);
      return;
    }

    if (todos.includes(editInputVal)) return;

    setTodos(todos.map((val) => (val === todo ? editInputVal : val)));
    setEditingTodo(null);
  };

  const handleTodoEditInputChange = (e) => {
    setEditInputVal(e.target.value);
  };

  return (
    <section>
      <h3>{name}</h3>
      {/* The input field to enter To-Do's */}
      <form onSubmit={handleSubmit}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="task-entry">Enter a task: </label>
        <input type="text" name="task-entry" value={inputVal} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      <h4>All the tasks!</h4>
      {/* The list of all the To-Do's, displayed */}
      <ul>
        {todos.map((todo) => (
          <li key={todo}>
            {todo === editingTodo && (
              <>
                <label htmlFor="todo-edit">Rename: </label>
                <input type="text" name="todo-edit" value={editInputVal} onChange={handleTodoEditInputChange} />
                <button onClick={() => resubmitTodo(todo)}>Update</button>
              </>
            )}
            {todo !== editingTodo && (
              <>
                {todo}
                <button onClick={() => completeTodo(todo)}>Complete</button>
                <button onClick={() => editTodo(todo)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <div>Count: {todos.length}</div>
    </section>
  );
};

export default FunctionalInput;
