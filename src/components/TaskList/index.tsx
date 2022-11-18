import { TaskListContainer, TaskListHeader } from './style.js'
import { NoTasksMessage } from '../TaskList/NoTasksMessage/'
import { TaskListItem } from '../TaskList/TaskListItem/'
import { Task } from '../../App'

interface TaskListProps {
  onTaskDeleted: (taskId: string) => void
  onToggleTaskState: (taskId: string) => void
  tasks: Task[]
}

export function TaskList(props: TaskListProps) {
  const quantityTasksCreated = props.tasks.length
  const quantityTasksDone = props.tasks.filter((task) => task.isDone).length

  return (
    <TaskListContainer>
      <TaskListHeader>
        <div className="info-group">
          <span className="created-tasks-label">Tarefas criadas</span>
          <span className="badge">{quantityTasksCreated}</span>
        </div>
        <div className="info-group">
          <span className="finished-tasks-label">Concluídas</span>
          <span className="badge">
            {quantityTasksDone} de {quantityTasksCreated}
          </span>
        </div>
      </TaskListHeader>

      {props.tasks.length === 0 ? (
        <NoTasksMessage />
      ) : (
        props.tasks.map((task) => {
          return (
            <TaskListItem
              key={task.id}
              taskId={task.id}
              taskDescription={task.description}
              taskDone={task.isDone}
              onTaskDeleted={props.onTaskDeleted}
              onToggleTaskState={props.onToggleTaskState}
            ></TaskListItem>
          )
        })
      )}
    </TaskListContainer>
  )
}
