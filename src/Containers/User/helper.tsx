import { TFunction } from 'i18next';
import { GroupBase, StylesConfig } from 'react-select';
import * as yup from 'yup';

export const styles: StylesConfig<
  { value: string; label: string },
  false,
  GroupBase<{ value: string; label: string }>
> = {
  container: (provided) => ({
    ...provided,
    minHeight: '3.2rem !important',
    maxHeight: '3.2rem !important',
  }),
  control: (provided, state) => ({
    ...provided,
    background: '#F8F8F8',
    padding: '0.2rem',
    fontSize: '1rem',
    fontWeight: '500',
    borderRadius: '0.3rem',
    minHeight: '3.2rem !important',
    maxHeight: '3.2rem !important',
    display: 'flex !important',
    alignItems: 'center !important',
    boxShadow: '0 !important',
    border: '1px solid #e4e4e7',
    outline: state.isFocused ? '1px solid #d4d4d8' : '',
    outlineOffset: state.isFocused ? '0.2rem' : '',
    transition: state.isFocused ? 'none' : '',

    '&:hover': {
      border: '1px solid #e4e4e7 !important',
    },
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: '0rem 0.5rem !important',
  }),
  input: (provided) => {
    return {
      ...provided,
      margin: '0',
      padding: '0',
      fontSize: '1rem',
      fontWeight: '500',
    };
  },

  option: (provided: any, { isSelected }: { isSelected: boolean }) => ({
    ...provided,
    fontSize: '1rem',
    backgroundColor: isSelected && 'rgb(99 102 241 / 0.9)',
    color: isSelected ? 'white' : 'black',
    '&:active': {
      backgroundColor: isSelected && 'rgb(99 102 241 / 0.9)',
    },

    '&:hover': {
      backgroundColor: !isSelected && '#BDBDBD',
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: '1rem',
    fontWeight: '500',
    color: '#4F4F4F',
    opacity: 0.5,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  valueContainer: (provided) => ({
    ...provided,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),
  menu: (provided) => ({
    ...provided,
    maxHeight: '12rem',
    zIndex: 9999,
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: '12rem',
  }),
};

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const countryCodeselectStyles: StylesConfig<
  { value: string; label: string },
  false,
  GroupBase<{ value: string; label: string }>
> = {
  control: (provided: any, state) => ({
    ...provided,
    width: '8.2rem !important',
    background: '#F8F8F8',
    padding: '0.2rem',
    fontSize: '1rem',
    fontWeight: '500',
    borderRadius: '0.3rem',
    minHeight: '3rem !important',
    maxHeight: '3rem !important',
    display: 'flex !important',
    alignItems: 'center !important',
    boxShadow: '0 !important',
    border: '1px solid #e4e4e7',
    outline: state.isFocused ? '1px solid #d4d4d8' : '',
    outlineOffset: state.isFocused ? '0.2rem' : '',
    transition: state.isFocused ? 'none' : '',

    '&:hover': {
      border: '1px solid #e4e4e7 !important',
    },
  }),
  option: (provided: any, { isSelected }: { isSelected: boolean }) => ({
    ...provided,
    width: '19.8rem',
    backgroundColor: isSelected && 'rgb(99 102 241 / 0.9)',
    color: isSelected ? 'white' : 'black',
    '&:active': {
      backgroundColor: isSelected && 'rgb(99 102 241 / 0.9)',
    },

    '&:hover': {
      backgroundColor: !isSelected && '#BDBDBD',
    },
  }),
  menu: (provided) => ({
    ...provided,
    maxHeight: '12rem',
    width: '20rem',
    zIndex: 9999,
  }),
  menuList: (provided) => ({
    ...provided,
    width: '20rem',
    maxHeight: '12rem',
  }),
};

export const menuCustomHeight: StylesConfig<
  { value: string; label: string },
  false,
  GroupBase<{ value: string; label: string }>
> = {
  menu: (provided) => ({
    ...provided,
    maxHeight: '20rem',
    zIndex: 9999,
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: '20rem',
  }),
  menuPortal: (provided) => ({
    ...provided,
    zIndex: 9999,
  }),
};
export const whiteBgStyles: StylesConfig<
  { value: string; label: string },
  false,
  GroupBase<{ value: string; label: string }>
> = {
  control: (provided, state) => ({
    ...provided,
    background: '#FFF',
    padding: '0.2rem',
    fontSize: '1rem',
    fontWeight: '500',
    borderRadius: '0.3rem',
    minHeight: '3.2rem !important',
    maxHeight: '3.2rem !important',
    display: 'flex !important',
    alignItems: 'center !important',
    boxShadow: '0 !important',
    border: '1px solid #e4e4e7',
    outline: state.isFocused ? '1px solid #d4d4d8' : '',
    outlineOffset: state.isFocused ? '0.2rem' : '',
    transition: state.isFocused ? 'none' : '',

    '&:hover': {
      border: '1px solid #e4e4e7 !important',
    },
  }),
};

export const selectStyles: StylesConfig<
  { value: string; label: string },
  false,
  GroupBase<{ value: string; label: string }>
> = {
  container: (provided) => ({
    ...provided,
    width: '100% !important',
    minHeight: '3.2rem !important',
    maxHeight: '3.2rem !important',
  }),
  control: (provided, state) => ({
    ...provided,
    background: '#F8F8F8',
    padding: '0.2rem',
    fontSize: '1rem',
    fontWeight: '500',
    borderRadius: '0.3rem',
    minHeight: '3.2rem !important',
    maxHeight: '3.2rem !important',
    display: 'flex !important',
    alignItems: 'center !important',
    boxShadow: '0 !important',
    border: '1px solid #e4e4e7',
    outline: state.isFocused ? '1px solid #d4d4d8' : '',
    outlineOffset: state.isFocused ? '0.2rem' : '',
    transition: state.isFocused ? 'none' : '',

    '&:hover': {
      border: '1px solid #e4e4e7 !important',
    },
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: '0rem 0.5rem !important',
  }),
  input: (provided) => {
    return {
      ...provided,
      margin: '0',
      padding: '0',
      fontSize: '1rem',
      fontWeight: '500',
    };
  },
  singleValue: (provided) => ({
    ...provided,
    maxWidth: '100%',
  }),
  option: (provided: any, { isSelected }: { isSelected: boolean }) => ({
    ...provided,
    fontSize: '1rem',
    backgroundColor: isSelected && 'rgb(99 102 241 / 0.9)',
    color: isSelected ? 'white' : 'black',
    '&:active': {
      backgroundColor: isSelected && 'rgb(99 102 241 / 0.9)',
    },

    '&:hover': {
      backgroundColor: !isSelected && '#BDBDBD',
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: '1rem',
    fontWeight: '500',
    color: '#4F4F4F',
    opacity: 0.5,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  valueContainer: (provided) => ({
    ...provided,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),
  menu: (provided) => ({
    ...provided,
    maxHeight: '12rem',
    zIndex: 9999,
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: '12rem',
  }),
  menuPortal: (provided) => ({
    ...provided,
    zIndex: 9999,
  }),
};

export const getFormValidationSchema = (
  t: TFunction<('common' | 'students')[], undefined>,
): object => {
  return yup.object().shape({
    fullName: yup
      .string()
      .min(
        2,
        `${t('common:inputValidationMessages:minimumCharacter', {
          characterCount: 2,
        })}`,
      )
      .max(
        50,
        `${t('common:inputValidationMessages:maximumCharacter', {
          characterCount: 50,
        })}`,
      )
      .required(`${t('common:inputValidationMessages:requiredField')}`),
    country: yup
      .string()
      .nullable()
      .min(
        2,
        `${t('common:inputValidationMessages:minimumCharacter', {
          characterCount: 2,
        })}`,
      )
      .max(
        50,
        `${t('common:inputValidationMessages:maximumCharacter', {
          characterCount: 50,
        })}`,
      )
      .required(`${t('common:inputValidationMessages:requiredField')}`),
    grade: yup.string().required(`${t('common:inputValidationMessages:requiredField')}`),
    gender: yup.string().required(`${t('common:inputValidationMessages:requiredField')}`),
    email: yup
      .string()
      .nullable()
      .email(`${t('common:inputValidationMessages:emailError')}`)
      .max(
        50,
        `${t('common:inputValidationMessages:maximumCharacter', {
          characterCount: 50,
        })}`,
      ),
    parentEmail: yup
      .string()
      .nullable()
      .email(`${t('common:inputValidationMessages:emailError')}`)
      .max(
        50,
        `${t('common:inputValidationMessages:maximumCharacter', {
          characterCount: 50,
        })}`,
      )
      .required(`${t('common:inputValidationMessages:requiredField')}`),
    phoneNumber: yup
      .string()
      .matches(phoneRegExp, `${t('common:inputValidationMessages:invalid')}`),
    parentPhoneNumber: yup
      .string()
      .matches(phoneRegExp, `${t('common:inputValidationMessages:invalid')}`)
      .required(`${t('common:inputValidationMessages:requiredField')}`),
    address: yup
      .string()
      .nullable()
      .max(
        100,
        `${t('common:inputValidationMessages:maximumCharacter', {
          characterCount: 100,
        })}`,
      )
      .required(`${t('common:inputValidationMessages:requiredField')}`),
    dateOfJoining: yup.string().required(`${t('common:inputValidationMessages:requiredField')}`),
    expectedStartDate: yup
      .string()
      .required(`${t('common:inputValidationMessages:requiredField')}`),
  });
};
