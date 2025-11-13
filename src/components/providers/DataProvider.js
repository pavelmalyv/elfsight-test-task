import { createContext, useContext, useMemo, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';

const API_URL = 'https://rickandmortyapi.com/api/character/';

export function DataProvider({ children }) {
  const [activePage, setActivePage] = useState(0);
  const [apiURL, setApiURL] = useState(API_URL);
  const { data, isFetching, isError, fetchData } = useFetch(apiURL);

  const dataValue = useMemo(
    () => ({
      activePage,
      setActivePage,
      apiURL,
      setApiURL,
      characters: data ? data.results : [],
      fetchData,
      isFetching,
      isError,
      info: data ? data.info : {}
    }),
    [activePage, apiURL, data, isFetching, isError, fetchData]
  );

  return (
    <DataContext.Provider value={dataValue}>{children}</DataContext.Provider>
  );
}

const DataContext = createContext({});

export const useData = () => useContext(DataContext);
