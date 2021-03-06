import React, { useState } from 'react';

import './todo-item.styles.css';

const TodoItem = ({ todoItem, removeTodoItem, editTodoItem, checkTodoItem }) => {
    const { id, text, isChecked } = todoItem;
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(text);

    const handleRemoveItem = ev => {
        removeTodoItem(id);
    }

    const toggleEdit = ev => {
        setIsEditing(true);
    }

    const handleEditTextChange = ev => {
        setEditText(ev.target.value);
    }

    const handleEditSubmit = ev => {
        ev.preventDefault();
        editTodoItem(id, editText);
        setIsEditing(false);
    }

    const handleChecked = () => {
        checkTodoItem(id);
    }

    return(
        <div className='todo-item'>
            <div className='todo-item__description'>
                {isEditing ? 
                    <input value={editText} onChange={handleEditTextChange}/>
                 : ( <h4 className={`${isChecked ? 'todo-item__checked' : null}`} onClick={handleChecked} >{text}</h4> 
                
                )}
            </div>
            <div className='todo-item__button-container'>
                {isEditing ? <button className='btn' onClick={handleEditSubmit}>Save</button> : (
                    <>
                        <button className='btn' onClick={toggleEdit}>Edit</button> {' '}
                        <button className='btn' onClick={handleRemoveItem}>Delete</button>
                    </>
                )}
                
            </div>
        </div>
    )
}

export default TodoItem;