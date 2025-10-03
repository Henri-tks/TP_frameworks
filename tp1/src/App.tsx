import { useState, useEffect } from "react";
import "./App.css";


function App() {
  const [prenom, setPrenom] = useState("Henri");
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  const [fruits, setFruits] = useState(["Pomme", "Banane", "Orange"]);
  const [count, setCount] = useState(0);

  const removeLastFruit = () => {
    setFruits(prev => prev.slice(0, prev.length - 1));
  };

  const addFruit = () => {
    setFruits([...fruits, "Fraise"]);
  };

  const resetPrenom = () => setPrenom("");

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // ==== TO-DO LIST ====
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((prev: string[]) => [...prev, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index: number) => {
    setTasks((prev: string[]) => prev.filter((_, i) => i !== index));
  };

  // ==== CONNEXION UTILISATEUR ====
  const [isConnected, setIsConnected] = useState(false);
  const toggleConnection = () => setIsConnected(prev => !prev);

  return (
    <div className="app-container">
      {/* Image décorative 3D futuriste (remplace l'URL si tu ajoutes une vraie image) */}
      <img
        src="/src/assets/react.svg"
        alt="Logo Futuriste"
        className="futuristic-img"
        style={{ marginBottom: "1.5rem" }}
      />
      <h1>Bonjour {prenom}</h1>
      <p>Bienvenue dans mon premier projet React</p>
      <p>Il est {date}</p>

      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(prev => (prev > 0 ? prev - 1 : 0))}>-</button>

      <input
        type="text"
        value={prenom}
        onChange={e => setPrenom(e.target.value)}
        placeholder="Entrez votre prénom"
      />
      <button onClick={resetPrenom}>Réinitialiser</button>

      <ul>
        {fruits.map((fruit, i) => (
          <li key={i}>{fruit}</li>
        ))}
      </ul>
      <button onClick={addFruit}>Ajouter une Fraise</button>
      <button onClick={removeLastFruit}>Supprimer le dernier fruit</button>

      <h2>To-Do List</h2>
      <input
        type="text"
        placeholder="Nouvelle tâche"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Ajouter</button>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            {task} <button onClick={() => removeTask(i)}>Supprimer</button>
          </li>
        ))}
      </ul>

      <h2>État utilisateur</h2>
      <p style={{ color: isConnected ? "#00fff7" : "#ff0055", textShadow: isConnected ? "0 0 8px #00fff7, 0 0 16px #1e90ff" : "0 0 8px #ff0055, 0 0 16px #ff0055" }}>
        {isConnected ? "Connecté ✅" : "Déconnecté ❌"}
      </p>
      <button onClick={toggleConnection}>
        {isConnected ? "Se déconnecter" : "Se connecter"}
      </button>
    </div>
  );
}

export default App;
