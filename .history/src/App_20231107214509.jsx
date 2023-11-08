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
      </div>
    </div>
  )
}

export default App
