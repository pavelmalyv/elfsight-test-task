import Select, { components } from 'react-select';

const DropdownIndicator = ({ ...props }) => (
  <components.DropdownIndicator {...props}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 9L12 15L6 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </components.DropdownIndicator>
);

const ClearIndicator = ({ ...props }) => (
  <components.ClearIndicator {...props}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 18L12 12L18 18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L12 12L18 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </components.ClearIndicator>
);

export function FilterSelect({ ...props }) {
  return (
    <Select
      {...props}
      isClearable
      isSearchable={false}
      components={{ DropdownIndicator, ClearIndicator }}
      styles={{
        container: (baseStyles) => ({
          ...baseStyles,
          width: '100%'
        }),
        control: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: state.isFocused ? '#334466' : '#263750',
          borderColor: '#83BF46',
          borderRadius: 8,
          boxShadow: 'none',
          minHeight: 40,
          fontSize: 16,
          transition: 'background-color 0.2s',
          '&:hover': undefined
        }),
        valueContainer: (base) => ({
          ...base,
          paddingLeft: 16,
          paddingRight: 0
        }),
        placeholder: (baseStyles) => ({
          ...baseStyles,
          margin: 'initial',
          color: '#b3b3b3'
        }),
        singleValue: (baseStyles) => ({
          ...baseStyles,
          margin: 'initial',
          color: '#fff'
        }),
        indicatorSeparator: () => ({
          display: 'none'
        }),
        dropdownIndicator: (baseStyles, state) => ({
          ...baseStyles,
          display:
            state.hasValue && !state.selectProps.menuIsOpen ? 'none' : 'flex',
          width: 40,
          padding: '6px 12px',
          color: state.hasValue ? '#F5F5F5' : '#B2B2B2',
          transform: state.selectProps.menuIsOpen
            ? 'rotate(180deg)'
            : 'rotate(0)',
          ':hover': undefined
        }),
        clearIndicator: (baseStyles, state) => ({
          ...baseStyles,
          display: state.selectProps.menuIsOpen ? 'none' : 'flex',
          width: 40,
          padding: '6px 12px',
          color: state.hasValue ? '#F5F5F5' : '#B2B2B2',
          color: '#F5F5F5',
          ':hover': {
            color: '#83BF46'
          }
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          overflow: 'hidden',
          marginTop: 5,
          marginBottom: 5,
          boxShadow:
            '0 1px 4px 0 rgba(12, 12, 13, 0.05), 0 1px 4px 0 rgba(12, 12, 13, 0.1)',
          borderRadius: 8,
          border: '1px solid #d9d9d9',
          backgroundColor: '#fff'
        }),
        menuList: (baseStyles) => ({
          ...baseStyles,
          maxHeight: 150,
          paddingTop: 4,
          paddingBottom: 4
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          padding: '4px 8px',
          lineHeight: 1.4,
          color: '#1e1e1e',
          fontWeight: state.isSelected ? 'bold' : 'normal',
          backgroundColor: state.isFocused
            ? 'rgb(131 191 70 / 0.2)'
            : 'transparent',
          ':hover': {
            backgroundColor: 'rgb(131 191 70 / 0.2)'
          }
        })
      }}
    />
  );
}
