import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './todo-list.styles.css';

// Components
import TodoItem from '../todo-item/todo-item.component';
import TodoForm from '../todo-form/todo-form.component';

const TodoList = () => {

    const [todos, setTodos] = useState([]);

    const addTodoItem = (text) => {
        const newTodoItem = {
            text,
            id: uuidv4(),
            isChecked: false
        };
        setTodos([...todos, newTodoItem]);
    }

    const removeTodoItem = (id) => {
        const filterTodos = todos.filter(todo => todo.id !== id);
        setTodos(filterTodos);
    }

    const checkTodoItem = (id) => {
        const updatedTodos = todos.map(todoItem => {
            if(todoItem.id === id){
                return {
                    ...todoItem,
                    isChecked: !todoItem.isChecked
                }
            } else {
                return todoItem;
            }
        });
        setTodos(updatedTodos);
    }

    const editTodoItem = (id, newText) => {
        const updatedTodos = todos.map(todoItem => {
            if(todoItem.id === id){
                return {
                    ...todoItem,
                    text: newText
                }
            } else {
                return todoItem;
            }
        });
        setTodos(updatedTodos);
    }

    return(
        <div className='todo-list'>
            <h1>Todo List</h1>
            <p>A simple react Todo List App</p>
            <p>Items on the list: {todos.length} </p>
            <div className='todo-list__border'></div>
            {
                todos.map(todoItem => <TodoItem key={todoItem.id} todoItem={todoItem} removeTodoItem={removeTodoItem} 
                    editTodoItem={editTodoItem} checkTodoItem={checkTodoItem}/>)
            }
            <TodoForm addTodoItem={addTodoItem}/>
        </div>
    )
}

export default TodoList;