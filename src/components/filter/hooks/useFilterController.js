import { useState, useEffect, useCallback } from 'react';
import { useData } from '../../providers/DataProvider';
import { useFilterURL } from '../hooks/useFilterURL';
import {
  STATUS_OPTIONS,
  GENDER_OPTIONS,
  SPECIES_OPTIONS
} from '../const/filterOptions';

export function useFilterController() {
  const { getUrlParam, setUrlParams, clearUrlParams } = useFilterURL();
  const { filter, setFilter, setActivePage } = useData();
  const [fields, setFields] = useState({
    status: null,
    gender: null,
    species: null,
    name: null,
    type: null
  });

  useEffect(() => {
    setFilter({
      status: getOption('status', STATUS_OPTIONS),
      gender: getOption('gender', GENDER_OPTIONS),
      species: getOption('species', SPECIES_OPTIONS),
      name: getFieldValue('name'),
      type: getFieldValue('type')
    });

    function getOption(name, options) {
      const param = getUrlParam(name);

      return options.find((option) => option.value === param) ?? null;
    }
    function getFieldValue(name) {
      const param = getUrlParam(name);

      return param ? { value: param } : null;
    }
  }, [getUrlParam, setFilter]);

  useEffect(() => {
    setFields(filter);
  }, [filter]);

  const setField = useCallback((key, value) => {
    setFields((prev) => ({
      ...prev,
      [key]: value
    }));
  }, []);

  const applyFilter = useCallback(() => {
    setActivePage(0);

    setUrlParams(fields);
    setFilter(fields);
  }, [fields, setActivePage, setFilter, setUrlParams]);

  const resetFilter = useCallback(() => {
    setActivePage(0);
    clearUrlParams(fields);

    setFields({
      status: null,
      gender: null,
      species: null,
      name: null,
      type: null
    });

    setFilter({
      status: null,
      gender: null,
      species: null,
      name: null,
      type: null
    });
  }, [fields, setActivePage, clearUrlParams, setFilter]);

  return { fields, setField, applyFilter, resetFilter };
}
