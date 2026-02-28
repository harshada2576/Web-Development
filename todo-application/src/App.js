//import logo from './logo.svg';
import "./App.css";
import FilterBar from "./components/FilterBar";
import NavBar from "./components/NavBar";
import TodoCard from "./components/TodoCard";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <TodoCard></TodoCard>
      <FilterBar></FilterBar>

    </>
  );
}

export default App;
