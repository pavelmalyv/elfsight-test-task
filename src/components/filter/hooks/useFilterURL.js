import { useCallback } from 'react';

export function useFilterURL() {
  const updateUrlParams = useCallback((params) => {
    window.history.pushState(
      {},
      '',
      params.size
        ? `${window.location.pathname}?${params}`
        : window.location.pathname
    );
  }, []);

  const getUrlParam = useCallback((key) => {
    const params = new URLSearchParams(window.location.search);

    return params.get(key);
  }, []);

  const setUrlParams = useCallback(
    (fields) => {
      const params = new URLSearchParams(window.location.search);

      for (const key in fields) {
        const item = fields[key];
        if (item) params.set(key, item.value);
      }

      updateUrlParams(params);
    },
    [updateUrlParams]
  );

  const clearUrlParams = useCallback(
    (fields) => {
      const params = new URLSearchParams(window.location.search);
      for (const key in fields) {
        params.delete(key);
      }

      updateUrlParams(params);
    },
    [updateUrlParams]
  );

  return { getUrlParam, setUrlParams, clearUrlParams };
}
