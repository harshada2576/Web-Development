import React from 'react'
import TodoCard from './TodoCard';

const TodoList = ({ todos }) => {
    return (
        <>
            {todos.map((todo) => (
                <TodoCard
                    key={todo.id}
                    title={todo.title}
                    category={todo.category}
                    Body={todo.Body}
                />
            ))}
        </>
    )
}

export default TodoList
