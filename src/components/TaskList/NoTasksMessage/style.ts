import styled from 'styled-components'

export const NoTasksMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 15.25rem;
  font-weight: 400;
  font-size: 1rem;
  color: var(--gray-300);

  img {
    width: 3.5rem;
    height: 3.5rem;
    margin-bottom: 1rem;
  }

  .primary-message {
    font-weight: 700;
    margin-bottom: 2px;
  }

  .secundary-message {
    font-weight: 400;
  }
`
