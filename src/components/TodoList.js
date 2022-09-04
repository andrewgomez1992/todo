import React from "react";

// Importing Components
import Todo from './Todo'


const TodoList = ({ todos, setTodos }) => {
    return (
       <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <Todo 
                        text={todo.text} 
                        key={todo.id}
                        todos={todos} 
                        todo={todo}
                        setTodos={setTodos}
                    />
                ))}
            </ul>
       </div> 
    )
}

export default TodoList;