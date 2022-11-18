import { TaskBarContainer, Form, Input, Button } from './style.js'
import { PlusCircle } from 'phosphor-react'

import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react'

interface TaskBarProps {
  onTaskCreated: (taskDescription: string) => void
}

export function TaskBar({ onTaskCreated }: TaskBarProps) {
  const [newTaskDescription, setNewTaskDescription] = useState('')

  function handleNewTask(event: FormEvent) {
    event.preventDefault()
    setNewTaskDescription('')
    onTaskCreated(newTaskDescription)
  }

  function handleTaskDescriptionInputChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    setNewTaskDescription(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  return (
    <TaskBarContainer>
      <Form onSubmit={handleNewTask} autoComplete="off">
        <Input
          type="text"
          name="task_description_input"
          placeholder="Adicione uma nova tarefa"
          value={newTaskDescription}
          onChange={handleTaskDescriptionInputChange}
          onInvalid={handleNewTaskInvalid}
          required
        ></Input>
        <Button
          title="Adicionar tarefa"
          type="submit"
          disabled={newTaskDescription.length === 0}
        >
          Criar
          <PlusCircle size={16} weight="bold" />
        </Button>
      </Form>
    </TaskBarContainer>
  )
}
