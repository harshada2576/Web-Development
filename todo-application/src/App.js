//import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import FilterBar from "./components/FilterBar";
import NavBar from "./components/NavBar";
import TodoCard from "./components/TodoCard";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const addTodo = (note_id, title, category, body) => {
    const newTodo = {
      id: note_id,
      title: title,
      category: category,
      body: body,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const editTodo = (id, updatedTitle, updatedCategory, updatedBody) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, title: updatedTitle, category: updatedCategory, body: updatedBody }
        : todo
    ));
  };
  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  return (
    <>
      <NavBar></NavBar>
      <FilterBar filter={filter} setFilter={setFilter}></FilterBar>

      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} toggleComplete={toggleComplete} />

    </>
  );
}

export default App;
