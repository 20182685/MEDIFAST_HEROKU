import React, { Fragment } from 'react';
import InputTodo from './example/InputTodo';
import ListTodos from './example/ListTodos';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExamplePage = () => {
  return (
    <Fragment>
      <div className='container'>
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
};

export default ExamplePage;