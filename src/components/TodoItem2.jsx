function TodoItem2() {
  let todoName = "Buy Groceries";
  let todoDate = "4/10/2023";

  return (
    <div class="container">
      <div class="row My-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger My-button ">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
