import React from 'react';
import { Table} from 'antd';

const TodoList = ({ onDelete, todolist }) => {
  const columns = [{
    title: '订单ID',
    dataIndex: 'name',
  }];
  return (
    <Table
      dataSource={todolist}
      columns={columns}
    />
  );
};

export default TodoList;
