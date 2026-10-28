import { useState, useEffect } from "react";
import "./exp6-3.css";   // App.css
function App() {
  const [tasks, setTasks] = useState(() =>
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );
  const [task, setTask] = useState("");
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, { id: Date.now(), name: task, done: false }]);
    setTask("");
  };
  return (
    <main>
      <h1>Task Manager</h1>
      <input value={task} onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task" />
      <button onClick={addTask}>Add</button>
      {tasks.map((t) => (
        <div className="task" key={t.id}>
          <span className={t.done ? "done" : ""}>{t.name}</span>
          <button onClick={() => setTasks(tasks.map(x =>
            x.id === t.id ? { ...x, done: !x.done } : x
          ))}>✓</button>
          <button onClick={() => setTasks(tasks.filter(x => x.id !== t.id))}>×</button>
        </div>
      ))}
    </main>
  );
}
export default App;
