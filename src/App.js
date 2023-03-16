import React, { Component } from 'react';
import shortid from 'shortid';

import Profile from './components/Profile/Profile.js';
import Statistics from './components/Statistics/Statistics.js';
import FriendList from './components/FriendList/FriendList.js';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.js';
import SignUpForm from './components/Form/Form.js';
import TodoList from './components/TodoList/TodoList.js';
import TodoEditor from './components/TodoEditor/TodoEditor.js';
import Container from 'components/Container/Container.js';
import Filter from 'components/Filter/Filter.js';

import initialTodos from './json/todos.json';
import data from './json/data.json';
import user from './json/user.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

export default class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };
  formSubmitHandler(data) {
    setTimeout(() => {
      console.log(data);
    }, 1000);
  }

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  render() {
    const { todos, filter } = this.state;
    const visibleTodos = this.getVisibleTodos();
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();

    return (
      <div className="App">
        <Container>
          <TodoEditor onSubmit={this.addTodo} />
          <div>
            <p>Всего заметок: {totalTodoCount}</p>
            <p>Выполнено: {completedTodoCount}</p>
          </div>
          <TodoList
            todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
          <Filter value={filter} onChange={this.changeFilter} />
          <SignUpForm onSubmit={this.formSubmitHandler} />
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
          <Statistics title="Upload stats" stats={data} />
          <Statistics stats={data} />
          <FriendList friends={friends} />,
          <TransactionHistory items={transactions} />;
        </Container>
      </div>
    );
  }
}
