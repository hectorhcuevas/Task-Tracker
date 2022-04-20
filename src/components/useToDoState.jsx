import { useState } from 'react';

export default initialValue => {
  const [toDos, setToDos] = useState(initialValue);

  return {
    toDos,
    addTodo: todoText => {
      setTodos([...toDos, todoText]);
    },
    deleteTodo: todoIndex => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);
      setToDos(newTodos);
    }
  };
};