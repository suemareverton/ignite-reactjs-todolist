import { NoTasksMessageContainer } from './style.js'
import clipBoardImage from './assets/clipboard.svg'

export function NoTasksMessage() {
  return (
    <NoTasksMessageContainer>
      <img src={clipBoardImage} alt="" />
      <span className="primary-message">
        Você ainda não tem tarefas cadastradas
      </span>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </NoTasksMessageContainer>
  )
}
