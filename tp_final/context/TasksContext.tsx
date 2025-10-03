import React, { createContext, useState, useEffect } from 'react'
import type { Task } from '../types.ts'
import { loadTasks, saveTasks } from '../utils/storage.ts'
import { nanoid } from 'nanoid'

interface TasksContextType {
  tasks: Task[]
  addTask: (title: string, description?: string, dueDate?: string | null) => void
  toggleTask: (id: string) => void
  removeTask: (id: string) => void
}

export const TasksContext = createContext<TasksContextType>({
  tasks: [],
  addTask: () => {},
  toggleTask: () => {},
  removeTask: () => {}
})

export const TasksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks())

  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  const addTask = (title: string, description?: string, dueDate?: string | null) => {
    const newTask: Task = {
      id: nanoid(),
      title,
      description: description || '',
      dueDate: dueDate || null,
      done: false
    }
    setTasks(prev => [...prev, newTask])
  }

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, done: !t.done } : t))
    )
  }

  const removeTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  return (
    <TasksContext.Provider value={{ tasks, addTask, toggleTask, removeTask }}>
      {children}
    </TasksContext.Provider>
  )
}
