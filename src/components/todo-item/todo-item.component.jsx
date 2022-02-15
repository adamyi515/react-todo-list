import React from 'react';

import './todo-item.styles.css';

const TodoItem = ({ todoItem }) => {
    const { id, text } = todoItem;
    
    return(
        <div className='todo-item'>
            <div className='todo-item__description'>
                <h4>{text}</h4>
            </div>
            <div className='todo-item__button-container'>
                <button className='btn'>Edit</button> <button className='btn'>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem;