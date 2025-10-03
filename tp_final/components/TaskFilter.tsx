import React from 'react'

type FilterType = 'all' | 'todo' | 'done'
interface TaskFilterProps {
  filter: FilterType
  setFilter: (f: FilterType) => void
}

const TaskFilter: React.FC<TaskFilterProps> = ({ filter, setFilter }) => (
  <div className="task-filter" style={{ display: 'flex', gap: 12, margin: '1em 0', alignItems: 'center' }}>
    <span style={{ color: '#fff', fontWeight: 500 }}>Filtrer :</span>
    <button
      type="button"
      className={filter === 'all' ? 'active' : ''}
      style={{ background: filter === 'all' ? '#1db954' : '#232323', color: '#fff', border: 'none', borderRadius: 6, padding: '0.4em 1em', cursor: 'pointer' }}
      onClick={() => setFilter('all')}
    >
      Toutes
    </button>
    <button
      type="button"
      className={filter === 'todo' ? 'active' : ''}
      style={{ background: filter === 'todo' ? '#1db954' : '#232323', color: '#fff', border: 'none', borderRadius: 6, padding: '0.4em 1em', cursor: 'pointer' }}
      onClick={() => setFilter('todo')}
    >
      À faire
    </button>
    <button
      type="button"
      className={filter === 'done' ? 'active' : ''}
      style={{ background: filter === 'done' ? '#1db954' : '#232323', color: '#fff', border: 'none', borderRadius: 6, padding: '0.4em 1em', cursor: 'pointer' }}
      onClick={() => setFilter('done')}
    >
      Faites
    </button>
  </div>
)

export default TaskFilter