import { Form, Formik } from 'formik';
import * as yup from 'yup';
import React, { useState } from 'react';
import Select from 'react-select';
// import React, { ReactElement, useState } from 'react';
// import { Formik, Form } from 'formik';
// import Select, { components, GroupBase, SingleValueProps } from 'react-select';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faXmark } from '@fortawesome/free-solid-svg-icons';
// import { useTranslation } from 'react-i18next';
// import moment from 'moment';
// import { useMutation, useQuery } from '@apollo/client';
// import toast from 'react-hot-toast';
// import Toast from '../../components/unicellular/toast/Toast';
// import { styles } from './helper';
// import { countryCodeselectStyles, selectStyles } from './helper';
// import countriesData from '../../assets/jsons/countries.json';

// interface FormValues {
//   name: string;
//   email: string;
//   mobile: string;
//   password: string;
//   roleId: string;
//   userType: string;
//   isActive: string;
//   countryCode: string;
// }

interface AddUserProps {
  closeUserAdd: () => void;
  edit?: string;
}

// const AddUser = ({ closeUserAdd, edit }: AddUserProps): ReactElement => {
//   const { t } = useTranslation(['user', 'common']);
//   const [formInitialValues, setFormInitialValues] = useState<FormValues>({
//     name: '',
//   email: '',
//   mobile: '',
//   password: '',
//   userType: '',
//   roleId: '',
//   isActive: '',
//     countryCode: '+91',
//   });
//   const [userTypes, setUserTypes] = useState<{ label: string; value: string }[]>([]);
//   const handleCreateUser = (formValues: FormValues) => {
   
//   };

//   const handleUpdateUser = (formValues: FormValues) => {
   
//   };

//   const SingleValue = (
//     props: SingleValueProps<
//       {
//         value: string;
//         label: string;
//       },
//       false,
//       GroupBase<{
//         value: string;
//         label: string;
//       }>
//     >,
//   ) => (
//     <components.SingleValue {...props}>
//       {props.data.value && props.data.value}
//     </components.SingleValue>
//   );

//   const formatOptionLabel = ({ value, label }: { value: string; label: string }) => (
//     <div>{`${label} (${value})`}</div>
//   );

//   return (
//     <>
//       <div className="fixed inset-0 z-10 overflow-y-auto ">
//         <div className="fixed inset-0  h-full bg-black opacity-40"></div>
//         <Formik
//           initialValues={formInitialValues}
//           enableReinitialize
//           onSubmit={(values) => {
//             if (edit) {
//               handleUpdateUser(values);
//             } else {
//               handleCreateUser(values);
//             }
//           }}
//         >
//           {({ values, handleChange, setFieldTouched, setFieldValue, errors, touched, dirty }) => {
//             return (
//               <Form>
//                 <div className="flex items-center min-h-screen px-4 py-8 ml-10">
//                   <div className="relative w-[60rem] p-6 mx-auto bg-[#FFFFFF]  rounded-lg shadow-2xl border border-gray-400">
//                     <div className="text-left  mx-auto">
//                       <p className="text-xl inline-block font-bold text-black font-poppins">
//                       {edit ? 'Update User' : 'Add User'}
//                       </p>
//                       <div className="float-right pb-2 cursor-pointer text-black" onClick={closeUserAdd}>
//                         <FontAwesomeIcon icon={faXmark} size="xl" />
//                       </div>
//                       <div className="max-h-[40rem] overflow-auto pr-[1rem]">
//                         <div className="flex flex-row mt-2 gap-4">
//                           <div className="w-full">
//                             <div className="text-sm font-semibold mb-[0.2rem] text-[#000000B2]">
//                               User Name
//                             </div>
//                             <input
//                               type="text"
//                               placeholder="User Name"
//                               className="input font-medium w-full h-[3rem] px-[10px] py-[12px] rounded bg-[#F8F8F8] border text-[#4a4949]"
//                               name="name"
//                               value={values.name}
//                               onChange={(e) => {
//                                 setFieldTouched('name', true);
//                                 handleChange(e);
//                               }}
//                             />
//                             <div className="h-6 flex items-center">
//                               {touched.name && errors.name && (
//                                 <p className="text-error font-normal text-xs mb-0">
//                                   {errors.name}
//                                 </p>
//                               )}
//                             </div>
//                           </div>
//                           <div className="w-full">
//                             <div className="text-sm font-semibold mb-[0.2rem] text-[#000000B2]">
//                               Roles
//                             </div>
//                             <Select
//                               styles={styles}
//                               value={userTypes?.filter((type) => type?.label === values?.roleId)}
//                               placeholder="User Type"
//                               name="roleId"
//                               menuPosition="fixed"
//                               onChange={(option) => {
//                                 setFieldTouched('roleId', true);
//                                 setFieldValue('roleId', option?.label);
//                               }}
//                               isSearchable={false}
//                               options={userTypes}
//                             />
//                             <div className="h-6 flex items-center">
//                               {touched.roleId && errors.roleId && (
//                                 <p className="text-error font-normal text-xs mb-0">
//                                   {errors.roleId}
//                                 </p>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                         <div className="flex flex-row mt-4 gap-4">
//                           <div className="w-full">
//                             <div className="text-sm font-semibold mb-[0.2rem] text-[#000000B2]">
//                               Email
//                             </div>
//                             <input
//                               type="text"
//                               placeholder="Email"
//                               className="input font-medium w-full h-[3rem] px-[10px] py-[12px] rounded bg-[#F8F8F8] border text-[#4a4949]"
//                               name="email"
//                               value={values.email}
//                               onChange={(e) => {
//                                 setFieldTouched('email', true);
//                                 handleChange(e);
//                               }}
//                             />
//                             <div className="h-6 flex items-center">
//                               {touched.email && errors.email && (
//                                 <p className="text-error font-normal text-xs mb-0">
//                                   {errors.email}
//                                 </p>
//                               )}
//                             </div>
//                           </div>
//                           <div className="w-full">
//                             <div className="text-sm font-semibold mb-[0.2rem] text-[#000000B2]">
//                               Phone Number
//                             </div>
//                             <div className="flex flex-row">
//                               <div className="w-fit mr-2">
//                                 <Select
//                                   styles={{ ...selectStyles, ...countryCodeselectStyles }}
//                                   options={countriesData?.countries}
//                                   onChange={(opt) => {
//                                     setFieldValue('countryCode', opt?.value);
//                                   }}
//                                   components={{ SingleValue }}
//                                   formatOptionLabel={formatOptionLabel}
//                                   menuPosition="fixed"
//                                   onBlur={() => setFieldTouched('countryCode', true)}
//                                   value={countriesData?.countries?.filter(
//                                     (country) => country.value === values.countryCode,
//                                   )}
//                                   placeholder="Country Code"
//                                 />
//                               </div>

//                               <input
//                                 type="text"
//                                 name="mobile"
//                                 value={values.mobile}
//                                 placeholder="Phone Number"
//                                 maxLength={16}
//                                 onChange={(e) => {
//                                   setFieldTouched('mobile', true);
//                                   handleChange(e);
//                                 }}
//                                 className="input font-medium w-full h-[3rem] px-[10px] py-[12px] rounded bg-[#F8F8F8] border text-[#4a4949]"
//                               />
//                             </div>
//                             <div className="h-6 flex items-center">
//                               {touched.mobile && errors.mobile && (
//                                 <p className="text-error font-normal text-xs mb-0">
//                                   {errors.mobile}
//                                 </p>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                         <div className="flex flex-row mt-4 gap-4">
//                           <div className="w-full">
//                             <div className="text-sm font-semibold mb-[0.2rem] text-[#000000B2]">
//                               Password
//                             </div>
//                             <input
//                               type="text"
//                               name="password"
//                               value={
//                                 ''
//                               }
//                               placeholder="Password"
//                               onChange={(e) => {
//                                 setFieldTouched('password', true);
//                                 handleChange(e);
//                               }}
//                               className="input font-medium w-full h-[3rem] px-[10px] py-[12px] rounded bg-[#F8F8F8] border text-[#4a4949]"
//                             />
//                             <div className="h-6 flex items-center">
//                               {touched.password && errors.password && (
//                                 <p className="text-error font-normal text-xs mb-0">
//                                   {errors.password}
//                                 </p>
//                               )}
//                             </div>
//                           </div>
//                           <div className="w-full">
//                             <div className="text-sm font-semibold mb-[0.2rem] text-[#000000B2]">
//                               Confirm Password
//                             </div>
//                             <input
//                               type="text"
//                               name="password"
//                               value={
//                                 ''
//                               }
//                               placeholder="Confirm Password"
//                               onChange={(e) => {
//                                 setFieldTouched('password', true);
//                                 handleChange(e);
//                               }}
//                               className="input font-medium w-full h-[3rem] px-[10px] py-[12px] rounded bg-[#F8F8F8] border text-[#4a4949]"
//                             />
//                             <div className="h-6 flex items-center">
//                               {touched.password && errors.password && (
//                                 <p className="text-error font-normal text-xs mb-0">
//                                   {errors.password}
//                                 </p>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                         <div className="flex flex-row mt-4 gap-4">
//                           <div className="w-full">
//                             <div className="text-sm font-semibold mb-[0.2rem] text-[#000000B2]">
//                               User Type
//                             </div>
//                             <Select
//                                   styles={{ ...selectStyles }}
//                                   options={countriesData?.countries}
//                                   onChange={(opt) => {
//                                     setFieldValue('userType', opt?.value);
//                                   }}
//                                   components={{ SingleValue }}
//                                   formatOptionLabel={formatOptionLabel}
//                                   menuPosition="fixed"
//                                   onBlur={() => setFieldTouched('userType', true)}
//                                   value={countriesData?.countries?.filter(
//                                     (country) => country.value === values.userType,
//                                   )}
//                                   placeholder="User Type"
//                                 />
//                             <div className="h-6 flex items-center">
//                               {touched.userType && errors.userType && (
//                                 <p className="text-error font-normal text-xs mb-0">{errors.userType}</p>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="flex flex-row-reverse w-full gap-3 mt-[1rem] ">
//                         <div className="">
//                           <button
//                             type="submit"
//                             disabled={!dirty}
//                             className="mt-2 py-2.5 flex-1  px-3 bg-indigo-500/90 text-base font-medium leading-5 text-white/80 rounded-sm disabled:opacity-50"
//                           >
//                             {edit ? 'Update' : 'Add'}
//                           </button>
//                         </div>
//                         <div className="">
//                           <button
//                             className=" mt-2 py-2.5 flex-1  px-3 text-base font-medium leading-5 text-black rounded-sm bg-gray-300"
//                             onClick={() => {
//                               closeUserAdd();
//                             }}
//                           >
//                             Cancel
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Form>
//             );
//           }}
//         </Formik>
//       </div>
//     </>
//   );
// };
// export default AddUser;



interface Query {
  field: string;
  comparator: string;
  value: Date | string | number | boolean;
  valueType: string;
}
interface Alert {
  name: string;
  id: string;
  collectionName: string;
  type: string;
  alertFrequency: string;
  query: Query[];
  template: string;
  isActive: boolean;
}



const ValueComponent = ({
  type,
  name,
  value,
  handleChange,
}: {
  type: string;
  name: any;
  value: any;
  handleChange: any;
}) => {
  if (type === 'string') {
    return (
      <div>
        <input
          type="text"
          maxLength={120}
          placeholder="value"
          className="input font-medium w-full h-[3rem] px-[10px] py-[12px] rounded bg-[#F8F8F8] border text-[#4a4949]"
          name={name}
          value={value}
          onChange={handleChange}
        />
      </div>
    );
  }
  if (type === 'number') {
    return (
      <div>
        <input
          type="number"
          maxLength={120}
          placeholder="Name"
          className="input font-medium w-full h-[3rem] px-[10px] py-[12px] rounded bg-[#F8F8F8] border text-[#4a4949]"
          name={name}
          value={value}
          onChange={handleChange}
        />
      </div>
    );
  }
  if (type === 'boolean') {
    return (
      <div>
        <label className="inline-flex relative items-center  cursor-pointer ">
          <input
            type="checkbox"
            name={name}
            className="sr-only peer"
            checked={value}
            onChange={handleChange}
          />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
    );
  }
  return (
    <input
      type="date"
      className="input font-medium w-full h-[3rem] px-[10px] py-[12px] rounded bg-[#F8F8F8] border text-[#4a4949]"
      name={name}
      value={value}
      placeholder="mm-dd-yyyy"
      onChange={handleChange}
    />
  );
};

const AddAlert = ({ closeUserAdd, edit }: AddUserProps) => {
  const [initialValues, setInitialValues] = useState<Alert>({
    id: '',
    name: '',
    collectionName: '',
    type: '',
    alertFrequency: '',
    query: [...Array(1)].map(() => {
      return { field: '', comparator: '', value: '', valueType: 'string' };
    }),
    template: '',
    isActive: false,
  });
  const handleCreateAlert = (values: any) => {
    setInitialValues(initialValues);
  };
  const handleEditAlert = (values: any) => {

    setInitialValues(initialValues);
  };
  const alertFrequencyoptions = [{ label: 'Default', value: 'Default' }];
const typeoptions = [
  { label: 'QUERY', value: 'QUERY' },
  { label: 'STREAM', value: 'STREAM' },
];
const Comparatoroptions = [
  { label: 'EQ', value: 'eq' },
  { label: 'NE', value: 'ne' },
  { label: 'GT', value: 'gt' },
  { label: 'GTE', value: 'gte' },
  { label: 'LT', value: 'lt' },
  { label: 'LTE', value: 'lte' },
];
const valueTypeoptions = [
  { label: 'Boolean', value: 'boolean' },
  { label: 'String', value: 'string' },
  { label: 'Date', value: 'date' },
  { label: 'Number', value: 'number' },
];
const keyTypeoptions = [
  { label: 'EMAIL', value: 'EMAIL' },
  { label: 'NUMBER', value: 'NUMBER' },
  { label: 'ID', value: 'ID' },
  { label: 'USERTYPE', value: 'USERTYPE' },
];

  const ValidationSchema = yup.object().shape({
    name: yup.string().required('Required*'),
    collectionName: yup.string().required('Required*'),
    type: yup.string().required('Required*'),
    alertFrequency: yup.string().required('Required*'),
    template: yup.string().required('Required*'),
    query: yup.array().of(
      yup.object().shape({
        field: yup.string().required('Field is required'),
        comparator: yup.string().required('Comparator is required'),
        value: yup.string().required('Value is required'),
        valueType: yup.string().required('Value Type is required'),
      }),
    ),
  });

  return (
    <>
      <div className="fixed inset-0 overflow-y-auto z-50">
        <div className="fixed inset-0  h-full bg-black opacity-40"></div>
        <Formik
          initialValues={initialValues}
          enableReinitialize
          validationSchema={ValidationSchema}
          onSubmit={(values) => {
            console.log(values);
            if (false) {
              handleEditAlert(values);
            } else {
              handleCreateAlert(values);
            }
          }}
        >
          {({ values, errors, touched, handleChange, setFieldValue }) => {
            console.log("value",values)
            console.log("ERROR",errors)
            return (
              <Form>
                <div className="flex items-center min-h-screen px-4 py-8 ml-10 z-50">
                  <div className="relative w-[80rem] p-6 mx-auto bg-[#FFFFFF]  rounded-lg shadow-2xl border border-gray-400">
                    <div className="text-left p-3">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-xl inline-block font-semibold  text-black font-poppins ">
                          {true ? 'Edit Alert' : 'Add Alert'}
                        </div>
                        <div className="" onClick={() => closeUserAdd()}>
                          x
                        </div>
                      </div>

                      <div className="max-h-[42rem]   overflow-auto z-[9999]">
                        <div className="font-semibold text-lg"></div>
                        <div className="mt-2 grid ">
                          <div className="flex items-center my-4">
                            <div className="w-full px-1.5">
                              <div className="flex items-center gap-2 mt-2">
                                <div className="text-sm font-semibold  text-[#000000B2]">Name*</div>
                              </div>
                              <input
                                type="text"
                                maxLength={120}
                                placeholder="Name"
                                name='name'
                                className="input font-medium w-full h-[3rem] px-[10px] py-[12px] rounded bg-[#F8F8F8] border text-[#4a4949]"
                                onChange={handleChange}
                                
                              />

                              {touched.name && errors.name && (
                                <div className="h-6 flex items-center">
                                  <p className="text-error font-normal text-xs mb-0">
                                    {errors.name}
                                  </p>
                                </div>
                              )}
                            </div>
                            <div className="w-full px-1.5">
                              <div className="flex items-center gap-2 mt-2">
                                <div className="text-sm font-semibold  text-[#000000B2]">
                                  Collection Name*
                                </div>
                              </div>
                              <input
                                type="text"
                                maxLength={120}
                                placeholder="Collection Name"
                                onChange={handleChange}
                                name='collectionName'
                                className="input font-medium w-full h-[3rem] px-[10px] py-[12px] rounded bg-[#F8F8F8] border text-[#4a4949]"
                              />
                              {touched.collectionName && errors.collectionName && (
                                <div className="h-6 flex items-center">
                                  <p className="text-error font-normal text-xs mb-0">
                                    {errors.collectionName}
                                  </p>
                                </div>
                              )}
                            </div>
                            <div className="w-full px-1.5">
                              <div className="flex items-center gap-2 mt-2">
                                <div className="text-sm font-semibold  text-[#000000B2]">Type*</div>
                              </div>
                              <Select
                                options={typeoptions}
                                placeholder="Select Type"
                                name='type'
                                onChange={(e)=>{
                                  setFieldValue('type', e?.value || '');
                                }}
                              />
                              {touched.type && errors.type && (
                                <div className="h-6 flex items-center">
                                  <p className="text-error font-normal text-xs mb-0">
                                    {errors.type}
                                  </p>
                                </div>
                              )}
                            </div>
                            <div className="w-full px-1.5">
                              <div className="flex items-center gap-2 mt-2">
                                <div className="text-sm font-semibold  text-[#000000B2]">
                                  Alert Frequency*
                                </div>
                              </div>
                              <Select
                                options={alertFrequencyoptions}
                                placeholder="Alert Frequency"
                                onChange={(e)=>{
                                  setFieldValue('alertFrequency', e?.value || '');
                                }}
                              />
                              {touched.alertFrequency && errors.alertFrequency && (
                                <div className="h-6 flex items-center">
                                  <p className="text-error font-normal text-xs mb-0">
                                    {errors.alertFrequency}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="text-md font-bold  text-[#000000B2] px-1">Query</div>
                          {values?.query?.map((items, index) => {
                            return (
                              <div key={index}>
                                <div className="flex items-center">
                                  <div className="w-full px-1.5">
                                    <div className="flex items-center gap-2 mt-2">
                                      <div className="text-sm font-semibold  text-[#000000B2]">
                                        Field*
                                      </div>
                                    </div>
                                    <input
                                      type="text"
                                      maxLength={120}
                                      placeholder="Field"
                                      className="input font-medium w-full h-[3rem] px-[10px] py-[12px] rounded bg-[#F8F8F8] border text-[#4a4949]"
                                      name={`query[${index}].field`}
                                      onChange={handleChange}
                                      value={items.field}
                                    />
                                    {touched?.query &&
                                      touched?.query[index]?.field &&
                                      errors?.query &&
                                      (errors?.query[index] as { field: string })?.field && (
                                        <p className="text-error font-normal text-xs mb-0">
                                          {(errors?.query[index] as { field: string })?.field}
                                        </p>
                                      )}
                                  </div>
                                  <div className="w-full px-1.5">
                                    <div className="flex items-center gap-2 mt-2">
                                      <div className="text-sm font-semibold  text-[#000000B2]">
                                        Comparator*
                                      </div>
                                    </div>
                                    <Select
                                      options={Comparatoroptions}
                                      placeholder="Select Comparator"
                                      name={`query[${index}].comparator`}
                                      value={Comparatoroptions.filter(
                                        (obj) => obj.value === values.query[index].comparator,
                                      )}
                                      onChange={(val) => {
                                        setFieldValue(`query[${index}].comparator`, val?.value);
                                      }}
                                    />
                                    {touched?.query &&
                                      touched?.query[index]?.comparator &&
                                      errors?.query &&
                                      (errors?.query[index] as { comparator: string })
                                        ?.comparator && (
                                        <p className="text-error font-normal text-xs mb-0">
                                          {
                                            (errors?.query[index] as { comparator: string })
                                              ?.comparator
                                          }
                                        </p>
                                      )}
                                  </div>

                                  <div className="w-full px-1.5">
                                    <div className="flex items-center gap-2 mt-2">
                                      <div className="text-sm font-semibold  text-[#000000B2]">
                                        Value Type*
                                      </div>
                                    </div>
                                    <Select
                                      options={valueTypeoptions}
                                      placeholder="Select Value Type"
                                      name={`query[${index}].valueType`}
                                      onChange={(val) => {
                                        setFieldValue(`query[${index}].valueType`, val?.value);
                                        if (val?.value === 'boolean') {
                                          setFieldValue(`query[${index}].value`, false);
                                        }
                                        if (val?.value === 'date') {
                                          setFieldValue(`query[${index}].value`, '');
                                        }
                                        if (val?.value === 'string') {
                                          setFieldValue(`query[${index}].value`, '');
                                        }
                                        if (val?.value === 'number') {
                                          setFieldValue(`query[${index}].value`, '');
                                        }
                                      }}
                                      value={valueTypeoptions.filter(
                                        (obj) => obj.value === values.query[index].valueType,
                                      )}
                                    />
                                    {touched?.query &&
                                      touched?.query[index]?.valueType &&
                                      errors?.query &&
                                      (errors?.query[index] as { valueType: string })
                                        ?.valueType && (
                                        <p className="text-error font-normal text-xs mb-0">
                                          {
                                            (errors?.query[index] as { valueType: string })
                                              ?.valueType
                                          }
                                        </p>
                                      )}
                                  </div>
                                  <div className="w-full px-1.5">
                                    <div className="flex items-center gap-2 mt-2">
                                      <div className="text-sm font-semibold  text-[#000000B2]">
                                        value*
                                      </div>
                                    </div>
                                    <ValueComponent
                                      type={items.valueType}
                                      name={`query[${index}].value`}
                                      value={items.value}
                                      handleChange={handleChange}
                                    />
                                    {touched?.query &&
                                      touched?.query[index]?.value &&
                                      errors?.query &&
                                      (errors?.query[index] as { value: string })?.value && (
                                        <p className="text-error font-normal text-xs mb-0">
                                          {(errors?.query[index] as { value: string })?.value}
                                        </p>
                                      )}
                                  </div>
                                  <div className="px-1.5 pt-4">
                                    <button
                                      type="button"
                                      className="inline-flex w-[2rem] bg-emerald-500 text-white items-center justify-center rounded-md border border-transparent py-[0.2rem] px-2 h-8 text-base font-medium "
                                      onClick={() => {
                                        setInitialValues({
                                          ...values,
                                          query: [
                                            ...values.query,
                                            {
                                              field: '',
                                              comparator: '',
                                              value: '',
                                              valueType: 'string',
                                            },
                                          ],
                                        });
                                      }}
                                    >
                                      +
                                    </button>
                                  </div>

                                  <div className=" px-1.5 pt-4">
                                    {index !== 0 && (
                                      <button
                                        className="inline-flex w-[2rem] items-center justify-center rounded-md border border-transparent py-[0.2rem] px-2 h-8 text-base font-medium "
                                        disabled={false}
                                        onClick={() => {
                                          const updatedQuery = [...values.query];
                                          updatedQuery.splice(index, 1);
                                          setFieldValue('query', updatedQuery);
                                        }}
                                      >D</button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}

                          {
                            <div className="w-full px-1.5 mt-4">
                              <div className="text-sm font-semibold mb-[0.2rem] text-[#000000B2]">
                                Active
                              </div>
                              <div className="flex items-center mx-1.5 mt-2 gap-2">
                                <label className="inline-flex relative items-center  cursor-pointer ">
                                  <input
                                    type="checkbox"
                                    name="isActive"
                                    className="sr-only peer"
                                    checked={values.isActive}
                                    onChange={(e) => setFieldValue('isActive', e.target.checked)}
                                  />
                                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                              </div>
                            </div>
                          }
                        </div>
                        <div className="flex flex-row mt-2 gap-4">
                          <div className="w-full px-1.5">
                            <div className="flex items-center gap-2 mt-2">
                              <div className="text-sm font-semibold  text-[#000000B2]">
                                Template*
                              </div>
                            </div>
                            <input
                              type="text"
                              maxLength={120}
                              placeholder="Template"
                              className="input font-medium w-full h-[3rem] px-[10px] py-[12px] rounded bg-[#F8F8F8] border text-[#4a4949]"
                              name={`template`}
                              onChange={handleChange}
                              value={values.template}
                            />

                            {touched.template && errors.template && (
                              <div className="h-6 flex items-center">
                                <p className="text-error font-normal text-xs mb-0">
                                  {errors.template}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex justify-end w-full gap-3 mt-2 ">
                          <div className="">
                            <button
                              className=" mt-2 py-2.5 flex-1 w-[7rem] px-3 text-base font-medium leading-5 text-black rounded-sm bg-gray-300"
                              onClick={() => {
                                closeUserAdd();
                              }}
                            >
                              Cancel
                            </button>
                          </div>
                          <div className="">
                            <button
                              type="submit"
                              disabled={false}
                              className="mt-2 py-2.5 flex-1 w-[7rem]  px-3 bg-indigo-500/90 text-base font-medium leading-5 text-white rounded-sm disabled:opacity-50"
                            >
                              {false ? 'Update' : 'Add'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default AddAlert;

