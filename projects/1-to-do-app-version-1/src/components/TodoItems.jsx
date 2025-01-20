import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <div className="todo-Container">
      {todoItems.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.dueDate} />
      ))}
    </div>
  );
};

export default TodoItems;
