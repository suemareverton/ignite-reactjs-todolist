import { useState } from 'react'
import { Header } from './components/Header/'
import { TaskBar } from './components/TaskBar/'
import { TaskList } from './components/TaskList/'

import styled from 'styled-components'

import GlobalStyle from './globalStyles'

export interface Task {
  id: string
  description: string
  isDone: boolean
}

const tasksTemplate: Task[] = [
  {
    id: '1',
    description: 'Task 1',
    isDone: false,
  },
  {
    id: '2',
    description: 'Task 2',
    isDone: false,
  },
]

const AppContainer = styled.div``

function App() {
  const [tasks, setTasks] = useState<Task[]>(tasksTemplate)

  function createTask(taskDescription: string) {
    const newTask = {
      id: new Date().getTime().toString(),
      description: taskDescription,
      isDone: false,
    }
    setTasks((state) => [...state, newTask])
  }

  function deleteTask(taskId: string) {
    const filteredTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(filteredTasks)
  }

  function toggleTaskState(taskId: string) {
    console.log('toggling task ', taskId)
    const changedTasks = tasks.map((task) =>
      task.id !== taskId ? task : { ...task, isDone: !task.isDone },
    )
    setTasks(changedTasks)
  }

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <TaskBar onTaskCreated={createTask} />
        <TaskList
          tasks={tasks}
          onTaskDeleted={deleteTask}
          onToggleTaskState={toggleTaskState}
        />
      </AppContainer>
    </>
  )
}

export default App
