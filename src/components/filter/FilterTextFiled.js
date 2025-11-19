import { useId } from 'react';
import styled from 'styled-components';

export function FilterTextFiled({ label, ...props }) {
  const fieldId = useId();

  return (
    <div>
      <label htmlFor={fieldId} className="visually-hidden">
        {label}
      </label>
      <TextField id={fieldId} {...props} />
    </div>
  );
}

const TextField = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 16px;
  background-color: #263750;
  border: 1px solid #83bf46;
  border-radius: 8px;
  font-size: 16px;
  color: #f5f5f5;
  outline: none;
  transition: background-color 0.2s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &::placeholder {
    color: #b3b3b3;
  }
  &:focus {
    background-color: #334466;
  }
`;
