import styled from 'styled-components';
import { Logo } from './Logo';
import { Filter } from '../filter';

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <FilterHeader />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const FilterHeader = styled(Filter)`
  max-width: 561px;

  @media (max-width: 950px) {
    max-width: 482px;
  }

  @media (max-width: 530px) {
    max-width: 240px;
  }
`;
