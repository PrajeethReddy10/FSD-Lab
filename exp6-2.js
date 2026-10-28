import { useState, useEffect } from "react";
import "./exp6-2.css";   // App.css
const employees = ["Ava", "John", "Sara"];
function App() {
  const [tasks, setTasks] = useState(() =>
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );
  const [name, setName] = useState("");
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const addTask = () => {
    if (!name.trim()) return;
    setTasks([...tasks, { id: Date.now(), name, assigned: "" }]);
    setName("");
  };
  const assign = () => {
    setTasks((old) => {
      const counts = employees.map(
        (e) => old.filter((t) => t.assigned === e).length
      );
      return old.map((t) => {
        if (t.assigned) return t;
        const i = counts.indexOf(Math.min(...counts));
        counts[i]++;
        return { ...t, assigned: employees[i] };
      });
    });
  };
  const reassign = (id) =>
    setTasks((old) =>
      old.map((t) =>
        t.id === id
          ? {
              ...t,
              assigned: employees[
                (employees.indexOf(t.assigned) + 1) % employees.length
              ],
            }
          : t
      )
    );
  return (
    <main className="app">
      <small>TEAM FLOW</small>
      <h1>Manager task board</h1>
      <section>
        <h3>Employees</h3>
        {employees.map((e) => (
          <div className="row" key={e}>
            {e}
            <b>{tasks.filter((t) => t.assigned === e).length} tasks</b>
          </div>
        ))}
      </section>
      <section>
        <h3>Add new task</h3>
        <div className="add">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            placeholder="Enter task name"
          />
          <button onClick={addTask}>Add</button>
        </div>
        <button className="dark" onClick={assign}>Auto assign</button>
      </section>
      <section>
        <h3>Task list</h3>
        {tasks.map((t) => (
          <div className="row task" key={t.id}>
            <div>
              <b>{t.name}</b>
              <small>Assigned to: {t.assigned || "Unassigned"}</small>
            </div>
            <button disabled={!t.assigned} onClick={() => reassign(t.id)}>
              Reassign
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
export default App;
