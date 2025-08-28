function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row My-row">
        <div class="col-6">
          <input type="text" placeholder="Add your new todo" />
        </div>
        <div class="col-4">
          <input type="date"></input>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success My-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
