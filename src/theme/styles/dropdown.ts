import { CSSObjectWithLabel } from 'react-select';

const styles = {
  container: (provided: CSSObjectWithLabel) => ({
    ...provided,
    minHeight: '3rem !important',
    // maxHeight: '2.5rem',
  }),
  control: (provided: CSSObjectWithLabel) => ({
    ...provided,
    background: 'rgba(217, 217, 217, 0.3)',
    borderRadius: '0.3rem',
    boxShadow: '0 !important',
    minHeight: '2.5rem !important',
    border: '0.1rem solid #BDBDBD',
    outline: 'none',
    '&:hover': {
      border: '0.1rem solid #BDBDBD !important',
    },
  }),
  valueContainer: (provided: CSSObjectWithLabel) => ({
    ...provided,
    fontSize: '0.75rem',
    fontWeight: '400',
  }),

  dropdownIndicator: (provided: CSSObjectWithLabel) => ({
    ...provided,
    padding: '0rem !important',
  }),
  menu: (provided: CSSObjectWithLabel) => ({
    ...provided,
    fontSize: '0.75rem',
  }),
  input: (provided: CSSObjectWithLabel) => {
    return {
      ...provided,
      margin: '0',
      padding: '0',
      fontSize: '0.75rem',
      fontWeight: '400',
    };
  },
  placeholder: (provided: CSSObjectWithLabel) => ({
    ...provided,
    fontSize: '0.75rem',
    fontWeight: '400',
    color: '#4F4F4F',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};

export default { styles };
