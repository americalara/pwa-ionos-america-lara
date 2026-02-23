import { useState, useEffect } from "react";
import './index.css'; // Mantiene la paleta de colores rosa y el fondo
import './App.css';   // Aplica el centrado y el contenedor blanco

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  return (
    /* Añadimos la clase 'card' para que los estilos de App.css 
       encierren todo en el contenedor blanco centrado */
    <div className="card">
      <h1>Task Manager PWA</h1>
      
      <div className="input-group">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe una tarea..."
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;