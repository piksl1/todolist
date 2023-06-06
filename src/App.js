import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import ListItems from "./components/ListItems";

function App() {
  return (
    <div className="App">
      <h2 style={{ color: "wheat", textAlign: "center" }}>Todo List</h2>
      <AddTodo />
      <ListItems />
    </div>
  );
}

export default App;
