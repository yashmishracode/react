function App() {
  return (
    <center class="Content">
      <h1>TODO APP</h1>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Enter TO-DO Here" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">
              Add
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-6">Buy Milk</div>
          <div class="col-4">2021-09-30</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-6">go to College</div>
          <div class="col-4">2021-09-30</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
