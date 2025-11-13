import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export const useFetch = (apiURL, options = {}) => {
  const { skip = false } = options;
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = useCallback(async (url, options) => {
    setIsFetching(true);
    setIsError(false);
    setData(null);

    try {
      const response = await axios.get(url, options);

      setIsFetching(false);
      setData(response.data);
    } catch (error) {
      if (axios.isCancel(error)) {
        return;
      }

      setIsFetching(false);
      setIsError(true);

      throw error;
    }
  }, []);

  useEffect(() => {
    if (skip) return;

    const controller = new AbortController();

    (async () => {
      try {
        await fetchData(apiURL, { signal: controller.signal });
      } catch (error) {
        console.log(error);
      }
    })();

    return () => controller.abort();
  }, [fetchData, apiURL, skip]);

  return { data, isFetching, isError, fetchData };
};
