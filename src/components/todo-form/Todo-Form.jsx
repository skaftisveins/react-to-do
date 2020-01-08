import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={value}
        placeholder='Click here to Add a To do'
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export default TodoForm;
