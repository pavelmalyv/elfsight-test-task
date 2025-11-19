import styled from 'styled-components';
import { FilterSelect } from './FilterSelect';
import { FilterTextFiled } from './FilterTextFiled';
import { FilterButton } from './FilterButton';
import { useFilterController } from './hooks/useFilterController';
import {
  STATUS_OPTIONS,
  GENDER_OPTIONS,
  SPECIES_OPTIONS
} from './const/filterOptions';

export function Filter({ className }) {
  const { fields, setField, applyFilter, resetFilter } = useFilterController();

  function handleSubmit(e) {
    e.preventDefault();
    applyFilter();
  }

  return (
    <StyledFilter className={className} onSubmit={handleSubmit}>
      <FilterSelect
        placeholder="Status"
        value={fields.status}
        onChange={(value) => setField('status', value)}
        options={STATUS_OPTIONS}
      />
      <FilterSelect
        placeholder="Gender"
        value={fields.gender}
        onChange={(value) => setField('gender', value)}
        options={GENDER_OPTIONS}
      />
      <FilterSelect
        placeholder="Species"
        value={fields.species}
        onChange={(value) => setField('species', value)}
        options={SPECIES_OPTIONS}
      />
      <FilterTextFiled
        label="Name"
        placeholder="Name"
        value={fields.name?.value ?? ''}
        onChange={(e) => setField('name', { value: e.target.value })}
      />
      <FilterTextFiled
        label="Type"
        placeholder="Type"
        value={fields.type?.value ?? ''}
        onChange={(e) => setField('type', { value: e.target.value })}
      />
      <FilterButtons>
        <FilterButton type="submit">Apply</FilterButton>
        <FilterButton variant="dangerous" onClick={resetFilter}>
          Reset
        </FilterButton>
      </FilterButtons>
    </StyledFilter>
  );
}

const StyledFilter = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;

  @media (max-width: 950px) {
    gap: 15px;
  }

  @media (max-width: 530px) {
    grid-template-columns: 1fr;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  column-gap: 10px;

  @media (max-width: 530px) {
    flex-direction: column;
    row-gap: 15px;
  }
`;
