import React, { useState } from 'react';

import './todo-form.styles.css';

const TodoForm = ({ addTodoItem }) => {

    const [text, setText] = useState('');

    const handleSubmit = ev => {
        ev.preventDefault();
        if(text){
            addTodoItem(text);
            setText('');
        }
    }
    return(
        <div className='todo-form'>
            <h2>New Todo</h2><br></br>
            <form className='todo-form__form' onSubmit={handleSubmit}>
                <input type='text' placeholder='New Todo' onChange={ev => setText(ev.target.value)} value={text}/>
                <button className='todo-form__button'>Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm;