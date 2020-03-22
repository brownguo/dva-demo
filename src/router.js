import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import TodoListRoute from './routes/TodoListRoute';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/todolist" exact component={TodoListRoute} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
