import React, { useState } from 'react';
import Todo from './components/todo/Todo';
import TodoForm from './components/todo-form/Todo-Form';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn about React', isCompleted: false },
    { text: 'Meet friend for lunch', isCompleted: false },
    { text: 'Build really cool todo app', isCompleted: false }
  ]);

  const addTodo = text => {
    setTodos([...todos, { text }]);
    // const newTodos = [...todos, { text }];
    // setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <div className='todo-list'>
        <h1>Hi there!</h1>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
