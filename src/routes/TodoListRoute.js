import React from 'react';
import { connect } from 'dva';
import TodoList from '../components/TodoList';

const TodoListRoute = ({ dispatch, todolist }) => {
  return (
    <div>
      <TodoList todolist={todolist} />
    </div>
  );
};

// export default Products;
export default connect(({ todolist }) => ({
  todolist,
}))(TodoListRoute);
