import styled from 'styled-components'

export const TaskListItemContainer = styled.div`
  display: flex;
  padding: 1rem;
  background-color: var(--gray-500);
  border: 1px solid var(--gray-400);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  vertical-align: top;

  .radio-wrapper {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .checkbox {
    appearance: none;
    -webkit-appearance: none;
    border-radius: 50%;
    border: 0.45rem solid var(--gray-500);
    box-shadow: 0 0 0 2px var(--blue);
    background: transparent;

    &:checked {
      box-shadow: 0 0 0 2px var(--purple-dark);
      border: 0.45rem solid var(--purple-dark);
    }

    &:hover {
      box-shadow: 0 0 0 2px var(--blue-dark);

      &:checked {
        box-shadow: 0 0 0 2px var(--purple);
        border: 0.45rem solid var(--purple);
      }
    }
  }

  .task-description {
    color: var(--gray-100);
    margin: 0rem 0.75rem 0rem 0.75rem;
    flex-grow: 1;
  }

  .task-description-finished {
    color: var(--gray-300);
    text-decoration: line-through;
  }

  .trash-wrapper {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--gray-300);
    &:hover {
      color: var(--danger);
      background-color: var(--gray-400);
    }
  }
`
