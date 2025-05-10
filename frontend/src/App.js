import React, { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const fetchTasks = () => {
    fetch("http://localhost:8080/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Failed to fetch tasks:", err));
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask = { title: newTaskTitle, status: "to-do" };

    try {
      const res = await fetch("http://localhost:8080/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });
      if (res.ok) {
        setNewTaskTitle("");
        fetchTasks(); // Refresh the list
      }
    } catch (err) {
      console.error("Error creating task:", err);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      await fetch(`http://localhost:8080/api/tasks/${id}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });
      fetchTasks(); // refresh UI
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">TaskNest</h1>

      <div className="max-w-xl mx-auto bg-white rounded shadow p-6">
        <form onSubmit={handleCreateTask} className="mb-4 flex gap-2">
          <input
            className="flex-1 border border-gray-300 px-4 py-2 rounded"
            type="text"
            placeholder="New task title"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </form>

        <h2 className="text-xl font-semibold mb-4">Task List</h2>
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="p-4 rounded bg-gray-50 border flex justify-between items-center"
            >
              <span className="flex-1">{task.title}</span>
              <select
                className="ml-4 border rounded px-2 py-1 text-sm"
                value={task.status}
                onChange={(e) => updateStatus(task.id, e.target.value)}
              >
                <option value="to-do">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
