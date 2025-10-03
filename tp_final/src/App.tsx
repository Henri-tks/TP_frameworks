import React, { useContext } from 'react'
import TaskForm from '../components/TaskForm.tsx'
import TaskList from '../components/TaskList.tsx'
import TaskFilter from '../components/TaskFilter.tsx'
import { TasksContext } from '../context/TasksContext.tsx'

const App: React.FC = () => {
  const { tasks } = useContext(TasksContext)
  const [filter, setFilter] = React.useState<'all' | 'todo' | 'done'>('all')

  const todoCount = tasks.filter(t => !t.done).length
  const doneCount = tasks.filter(t => t.done).length

  return (
    <div id="root">
      <h1>Gestionnaire de tâches</h1>
      <TaskForm />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList filter={filter} />
      <div className="stats fade-in">
        <span role="img" aria-label="À faire">📝</span> {todoCount} à faire &nbsp;/&nbsp; <span role="img" aria-label="Faites">✅</span> {doneCount} faites
      </div>
    </div>
  )
}

export default App
