import styled from 'styled-components';

export function FilterButton({ children, ...props }) {
  return (
    <StyledFilterButton type="button" {...props}>
      {children}
    </StyledFilterButton>
  );
}

const StyledFilterButton = styled.button`
  --_color-accent: ${({ variant }) =>
    variant === 'dangerous' ? '#FF5152' : '#83bf46'};

  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  min-height: 40px;
  column-gap: 10px;
  padding: 6px 10px;
  border: 1px solid var(--_color-accent);
  border-radius: 8px;
  font-size: 16px;
  line-height: 1;
  color: var(--_color-accent);
  background-color: transparent;
  transition-duration: 0.2s;
  transition-property: color, background-color;

  &:hover {
    color: #f5f5f5;
    background-color: var(--_color-accent);
  }
`;
