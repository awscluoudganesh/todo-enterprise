import React, { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/todos")
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  const addTodo = () => {
    fetch("http://localhost:8080/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task, completed: false })
    }).then(() => window.location.reload());
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(t => (
          <li key={t.id}>{t.task} {t.completed ? "✔️" : ""}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
