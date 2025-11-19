import styled from 'styled-components';
import { useData } from './providers';

export function Pagination() {
  const { info, activePage, setActivePage } = useData();
  const totalPages = info?.pages ?? 1;

  const pageClickHandler = (index) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActivePage(index);
  };

  if (totalPages <= 1) return null;

  return (
    <StyledPagination>
      {activePage !== 0 && (
        <>
          {activePage - 1 !== 0 && (
            <>
              <Page onClick={() => pageClickHandler(0)}>« First</Page>
              <Ellipsis>...</Ellipsis>
            </>
          )}

          <Page onClick={() => pageClickHandler(activePage - 1)}>
            {activePage}
          </Page>
        </>
      )}

      <Page active>{activePage + 1}</Page>

      {activePage < totalPages - 1 && (
        <>
          <Page onClick={() => pageClickHandler(activePage + 1)}>
            {activePage + 2}
          </Page>

          {activePage + 1 !== totalPages - 1 && (
            <>
              <Ellipsis>...</Ellipsis>
              <Page onClick={() => pageClickHandler(totalPages - 1)}>
                Last »
              </Page>
            </>
          )}
        </>
      )}
    </StyledPagination>
  );
}

const StyledPagination = styled.div`
  width: 100%;
  text-align: center;
`;

const Page = styled.span`
  color: #fff;
  font-size: 18px;
  padding: 5px;
  cursor: pointer;
  transition: color 0.2s;
  ${({ active }) => active && 'color: #83bf46'};

  &:hover {
    color: #83bf46;
  }
`;

const Ellipsis = styled(Page)`
  cursor: default;

  &:hover {
    color: #fff;
  }
`;
