import React from 'react';
import classNames from 'classnames';
import s from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className={s.TodoList}>
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={classNames(s.TodoList__item, {
            [s['TodoList__item--completed']]: completed,
          })}
        >
          <input
            type="checkbox"
            className={s.TodoList__checkbox}
            checked={completed}
            onChange={() => onToggleCompleted(id)}
          />
          <p className={s.TodoList__text}>{text}</p>
          <button
            type="button"
            className={s.TodoList__btn}
            onClick={() => onDeleteTodo(id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
