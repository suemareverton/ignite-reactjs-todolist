import { TaskListItemContainer } from './style.js'
import { Trash } from 'phosphor-react'

interface TaskListItemProps {
  taskId: string
  taskDescription: string
  taskDone: boolean
  onTaskDeleted: (taskId: string) => void
  onToggleTaskState: (taskId: string) => void
}

export function TaskListItem(props: TaskListItemProps) {
  const taskClassName = props.taskDone
    ? 'task-description task-description-finished'
    : 'task-description'

  function handleDeletedTask() {
    props.onTaskDeleted(props.taskId)
  }

  function handleToggleTaskState() {
    props.onToggleTaskState(props.taskId)
  }

  return (
    <TaskListItemContainer>
      <div className="radio-wrapper">
        <input
          type="checkbox"
          className="checkbox"
          onClick={handleToggleTaskState}
        />
      </div>
      <span className={taskClassName}>{props.taskDescription}</span>
      <div className="trash-wrapper" onClick={handleDeletedTask}>
        <Trash size={14} />
      </div>
    </TaskListItemContainer>
  )
}
