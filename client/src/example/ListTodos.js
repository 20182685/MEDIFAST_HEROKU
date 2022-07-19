import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  //Delete todo function
  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE"
      });

      setTodos(todos.filter(todo => todo.todo_id !== id));

    } catch (error) {
      console.error(error.message)
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();
      setTodos(jsonData);

      console.log(jsonData);

    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <div className="container mt-5">
        <h2>Todo List</h2>
        <table className="table mt-3 text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo => (
              <tr>
                <td>{todo.todo_id}</td>
                <td>{todo.description}</td>
                <td><EditTodo todo={todo} /></td>
                <td><button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ListTodos;