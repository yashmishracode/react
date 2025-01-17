function TodoItem1() {
    let todoName = "Buy Milk";
    let todoDate = "2021-09-30";
  return (
    <div className="container ">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
