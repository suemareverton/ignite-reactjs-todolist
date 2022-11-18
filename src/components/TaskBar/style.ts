import styled from 'styled-components'

export const TaskBarContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin: -1.6875rem 2rem 0rem 2rem;
`

export const Input = styled.input.attrs({
  type: 'text',
})`
  height: 3.375rem;
  flex-grow: 1;
  padding: 1rem;
  background-color: var(--gray-500);
  border: 1px solid var(--gray-700);
  border-radius: 8px;
  color: var(--gray-100);
  font-size: 1rem;
  line-height: 1.4rem;
  font-weight: 400;
  &:focus,
  :hover {
    border-color: var(--purple-dark);
    transition: border-color 0.2s ease-in-out;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: var(--gray-300);
  }
  :-ms-input-placeholder {
    color: var(--gray-300);
  }
`

export const Form = styled.form`
  display: flex;
  width: 100%;
  gap: 8px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 5.625rem;
  height: 3.25rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--blue-dark);
  color: var(--gray-100);
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.25rem;
  &:hover {
    background-color: var(--blue);
    transition: background-color 0.1s ease-in-out;
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
