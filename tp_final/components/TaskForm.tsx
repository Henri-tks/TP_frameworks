import React, { useState, useContext } from 'react'
import { TasksContext } from '../context/TasksContext.tsx'

const TaskForm: React.FC = () => {
  const { addTask } = useContext(TasksContext)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (title.trim().length < 3) {
      setError('Le titre doit faire au moins 3 caractères.')
      return
    }

    // Description et date optionnelles
    if (dueDate) {
      const today = new Date()
      const chosen = new Date(dueDate)
      if (chosen < today) {
        setError('La date doit être supérieure ou égale à aujourd’hui.')
        return
      }
    }

    addTask(title, description, dueDate || null)
    setTitle('')
    setDescription('')
    setDueDate('')
    setError('')
  }

  return (
    <form onSubmit={handleSubmit} className="fade-in">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', alignItems: 'stretch', justifyContent: 'center', marginBottom: 8 }}>
  <label htmlFor="task-title" style={{ fontWeight: 500, color: '#fff' }}>Titre de la tâche *</label>
        <input
          id="task-title"
          type="text"
          placeholder="Titre de la tâche"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
  <label htmlFor="task-desc" style={{ fontWeight: 500, color: '#fff' }}>Description (optionnelle)</label>
        <textarea
          id="task-desc"
          placeholder="Description de la tâche (optionnelle)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={2}
          style={{ resize: 'vertical', borderRadius: 8, padding: 8, fontSize: '1rem', border: '1.5px solid #232323', background: '#232323', color: '#fff', minHeight: 40 }}
        />
  <label htmlFor="task-date" style={{ fontWeight: 500, color: '#fff' }}>Date d’échéance (optionnelle)</label>
        <input
          id="task-date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button
          type="submit"
          disabled={!title.trim()}
        >
          ➕ Ajouter
        </button>
      </div>
      {error && <p className="text-red-500" style={{ marginTop: 8 }}>{error}</p>}
    </form>
  )
}

export default TaskForm
