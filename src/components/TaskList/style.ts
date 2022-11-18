import styled from 'styled-components'

export const TaskListContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  margin: 4rem 2rem 2rem 2rem;
`

export const TaskListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5px;
  border-bottom: 1px solid var(--gray-400);

  .info-group {
    display: flex;
    gap: 8px;
    font-size: 0.875rem;
    font-weight: 700;
  }

  .created-tasks-label {
    color: var(--blue);
  }

  .finished-tasks-label {
    color: var(--purple);
  }

  .badge {
    padding: 2px 8px 2px 8px;
    background-color: var(--gray-400);
    border-radius: 999px;
    color: var(--gray-200);
    font-size: 0.75rem;
  }
`
