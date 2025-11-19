import { createContext, useContext, useMemo, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';

const API_URL = 'https://rickandmortyapi.com/api/character/';

export function DataProvider({ children }) {
  const [activePage, setActivePage] = useState(0);
  const [filter, setFilter] = useState({
    status: null,
    gender: null,
    species: null,
    name: null,
    type: null
  });

  const apiURL = useMemo(() => {
    const url = new URL(API_URL);

    for (const key in filter) {
      const item = filter[key];
      if (item) url.searchParams.set(key, item.value);
    }

    url.searchParams.set('page', activePage + 1);

    return url.href;
  }, [filter, activePage]);

  const { data, isFetching, isError, fetchData } = useFetch(apiURL);

  const dataValue = useMemo(
    () => ({
      activePage,
      setActivePage,
      characters: data ? data.results : [],
      fetchData,
      isFetching,
      isError,
      info: data ? data.info : {},
      filter,
      setFilter
    }),
    [activePage, data, isFetching, isError, filter, fetchData]
  );

  return (
    <DataContext.Provider value={dataValue}>{children}</DataContext.Provider>
  );
}

const DataContext = createContext({});

export const useData = () => useContext(DataContext);
