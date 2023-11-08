import logo from './logo.svg'
import styles from './App.module.css'

function App() {
  return (
    <div class="container mt-5 and text-center">
      <h1 class="mb-4">My Task Tracker</h1>

      <form class="mb-5 row row-cols-2 justify-content-center">
        <input type="text" class="input-group-text p-1 w-25" placeholder="Add task here..." id="taskInput" required />
        <button class="btn btn-primary ms-3 w-auto" type="submit">
          Add task
        </button>
      </form>
    </div>
  )
}

export default App
