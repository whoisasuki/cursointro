import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css'

function TodoCounter() {

const {totalTodos, completedTodos} = React.useContext(TodoContext)
    
    if (totalTodos === [])
    { return <h2>You are out of tasks</h2>}
    else {
        return <h2 className='TodoCounter'>You've done {completedTodos} of {totalTodos} tasks</h2>
    }
}

export {TodoCounter} 