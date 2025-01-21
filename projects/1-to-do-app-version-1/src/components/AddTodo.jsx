import styles from "./AppTodo.module.css";
function AddTodo() {
  return (
    <div className={`${styles.todoContainer} `}>
      <div className={`row ${styles.kgRow} `}>
        <div className="col-6">
          <input
            className={`${styles.kgInput}`}
            type="text"
            placeholder="Enter TO-DO Here"
          />
        </div>
        <div className="col-4">
          <input className={`${styles.kgInput}`} type="date" />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-success ${styles.kgButton}`}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
