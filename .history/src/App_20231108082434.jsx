function App() {
  return (
    <div class="container mt-5 text-center">
      <h1 class="mb-4">My Task Tracker</h1>

      <form class="mb-5 row row-cols-2 justify-content-center">
        <input type="text" class="input-group-text p-1 w-25" placeholder="Add task here..." id="taskInput" required />
        <button class="btn btn-primary ms-3 w-auto" type="submit">
          Add task
        </button>
      </form>

      <div>
        <h4 class="text-muted mb-4">Tasks</h4>

        <div class="row row-cols-3 mb-3 justify-content-center">
          <button class="btn btn-secondary w-auto">X</button>
          <div class="bg-light p-2 mx-2">My first task</div>
          <input type="checkbox" role="button" class="form-check-input h-auto px-3" />
        </div>

        <div class="row row-cols-3 mb-3 justify-content-center">
          <button class="btn btn-secondary w-auto">X</button>
          <div class="bg-light p-2 mx-2 text-decoration-line-through">My second task</div>
          <input type="checkbox" checked role="button" class="form-check-input h-auto px-3" />
        </div>
      </div>
    </div>
  )
}

export default App
