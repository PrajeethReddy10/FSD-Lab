import { useState, useEffect } from "react";
import "./exp6-1.css";   // App.css
function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("dailyTasks")) || []
  );
  useEffect(() => {
    localStorage.setItem("dailyTasks", JSON.stringify(tasks));
  }, [tasks]);
  function addTask() {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, done: false }]);
    setTask("");
  }
  function toggleTask(index) {
    setTasks(tasks.map((t, i) =>
      i === index ? { ...t, done: !t.done } : t
    ));
  }
  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }
  return (
    <div className="app-container">
      <h2>Student Daily Activities</h2>
      <div className="input-area">
        <input
          className="task-input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter activity"
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>
      <ul>
        {tasks.map((t, i) => (
          <li className="task-item" key={i}>
            <span
              className={t.done ? "task-text completed" : "task-text"}
              onClick={() => toggleTask(i)}
            >
              {t.text}
            </span>
            <button
              className="delete-btn"
              onClick={() => deleteTask(i)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
