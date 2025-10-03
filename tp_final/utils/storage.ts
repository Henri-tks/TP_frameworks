import type { Task } from '../types.ts'

const STORAGE_KEY = 'tasks'


export const loadTasks = (): Task[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (!data) return []
  // Migration : ajoute description et dueDate si manquantes (pour anciennes tâches)
  let tasks = JSON.parse(data)
  if (!Array.isArray(tasks)) tasks = []
  return tasks.map((t: any) => ({
    id: t.id ?? '',
    title: t.title ?? '',
    description: typeof t.description === 'string' ? t.description : '',
    dueDate: typeof t.dueDate === 'string' || t.dueDate === null ? t.dueDate : null,
    done: !!t.done
  }))
  } catch {
    return []
  }
}

export const saveTasks = (tasks: Task[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  } catch {
    // ignore
  }
}
