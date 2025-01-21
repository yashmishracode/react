import styles from "./AppTodo.module.css";
import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <div className={`${styles.todoContainer}`}>
      {todoItems.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.dueDate} />
      ))}
    </div>
  );
};

export default TodoItems;
