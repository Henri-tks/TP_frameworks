import React, { useContext } from 'react'
import { TasksContext } from '../context/TasksContext.tsx'
import TaskItem from './TaskItem.tsx'

interface TaskListProps {
  filter: 'all' | 'todo' | 'done'
}

const TaskList: React.FC<TaskListProps> = ({ filter }) => {
  const { tasks } = useContext(TasksContext)

  let filtered = tasks
  if (filter === 'todo') filtered = tasks.filter(t => !t.done)
  if (filter === 'done') filtered = tasks.filter(t => t.done)

  if (filtered.length === 0) {
    return <p className="empty fade-in">Aucune tâche pour ce filtre.</p>
  }

  // Tri par défaut : tâches non faites d'abord, puis par date ou titre
  const sortedTasks = [...filtered].sort((a, b) => {
    if (a.done !== b.done) return a.done ? 1 : -1
    if (a.dueDate && b.dueDate) return a.dueDate.localeCompare(b.dueDate)
    if (a.dueDate) return -1
    if (b.dueDate) return 1
    return a.title.localeCompare(b.title)
  })

  return (
    <ul className="task-list fade-in">
      {sortedTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  )
}

export default TaskList
