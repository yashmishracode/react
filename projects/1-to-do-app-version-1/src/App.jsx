import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import TodoItems from "./components/TodoItems.jsx";

import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "04/01/2005",
    },
    {
      name: "Go TO College",
      dueDate: "04/01/2005",
    },
    {
      name: "Yash Mishra",
      dueDate: "04/01/2005",
    },
  ];
  return (
    <center className="Content">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
