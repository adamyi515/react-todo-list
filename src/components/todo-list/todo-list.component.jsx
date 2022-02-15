import React from 'react';

import './todo-list.styles.css';

// Components
import TodoItem from '../todo-item/todo-item.component';

const TodoList = () => {
    return(
        <div className='todo-list'>
            <h1>Todo List</h1>
            <p>A simple react Todo List App</p>
            <div className='todo-list__border'></div>
            <TodoItem />
        </div>
    )
}

export default TodoList;