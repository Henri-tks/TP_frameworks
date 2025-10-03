import React, { useContext } from 'react'
import type { Task } from '../types.ts'
import { TasksContext } from '../context/TasksContext.tsx'

interface TaskItemProps {
  task: Task
}


const TaskItem: React.FC<TaskItemProps> = React.memo(({ task }) => {
  const { toggleTask, removeTask } = useContext(TasksContext)

  return (
    <li className={`task-item${task.done ? ' done' : ''}`}>
      <span className="task-avatar" aria-label="Tâche">
        {task.title.trim().charAt(0).toUpperCase()}
      </span>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => toggleTask(task.id)}
        className="task-checkbox"
        aria-label={task.done ? 'Marquer comme à faire' : 'Marquer comme faite'}
      />
      <div className="task-main">
        <span className={`task-title${task.done ? ' done' : ''}`}>{task.title}</span>
        <span style={{ color: '#b3b3b3', fontSize: '0.97em', margin: '2px 0 0 0', display: 'block', fontStyle: 'italic', wordBreak: 'break-word' }}>{task.description}</span>
        {task.dueDate && (
          <span className="task-date">{new Date(task.dueDate).toLocaleDateString()}</span>
        )}
          <span className="task-status" style={{ marginLeft: '1em', fontWeight: 'bold', color: task.done ? '#1db954' : '#fff' }}>
            {task.done ? 'fait' : 'à faire'}
          </span>
      </div>
      <div className="task-actions">
        <button
          onClick={() => {
            if (confirm('Supprimer cette tâche ?')) {
              removeTask(task.id)
            }
          }}
          className="remove-btn"
          title="Supprimer la tâche"
        >
          ✖
        </button>
      </div>
    </li>
  )
})

export default TaskItem
