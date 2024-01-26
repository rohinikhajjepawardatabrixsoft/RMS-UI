import React, { useContext, useState } from 'react';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './login.css'
import {
  faChevronLeft,
  faChevronRight,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import FirstSlide from '../../assets/png/login/crm-login-slide1.png';
import CrmStudent from '../../assets/png/login/crm-preview-students.png';
import CrmBatch from '../../assets/png/login/crm-preview-batches.png';
import CrmFee from '../../assets/png/login/crm-preview-fee.png';
import CrmLoginHeader from '../../assets/png/login/yuvipep-crm-login.png';

const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(['login']);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [forgot, setForgot] = useState<boolean>(false);
  const [forgotEmail, setForgotEmail] = useState<string>('');
  const [emailText, setEmailText] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [proceedToLogin, setProceedToLogin] = useState<boolean>(false);
  const [isPasswordVisible, setPasswordVisibility] = useState<boolean>(false);
  const imageSource = [
    {
      title: `${t('login:imgTitles:yuvipepCRM')}`,
      imgSrc: FirstSlide,
      description: `${t('login:imgDescription:yuvipepCRM')}`,
    },
    {
      title: `${t('login:imgTitles:studentManagement')}`,
      imgSrc: CrmStudent,
      description: `${t('login:imgDescription:studentManagement')}`,
    },
    {
      title: `${t('login:imgTitles:batchesManagement')}`,
      imgSrc: CrmBatch,
      description: `${t('login:imgDescription:batchesManagement')}`,
    },
    {
      title: `${t('login:imgTitles:feeStructure')}`,
      imgSrc: CrmFee,
      description: `${t('login:imgDescription:feeStructure')}`,
    },
  ];
  const handleImageForward = () => {
    if (imageSource.length - 1 > imageIndex) {
      setImageIndex(imageIndex + 1);
    }
  };
  const handleImageBackward = () => {
    if (imageIndex !== 0) {
      setImageIndex(imageIndex - 1);
    }
  };
  const handlePasswordVisibilityChange = () => {
    setPasswordVisibility(!isPasswordVisible);
  };
  const [error, setError] = useState(false);
  const formValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email(`email`)
      .required(`*Required`),
    password: yup
      .string()
      .min(8, `*Required`)
      .required(`*Required`),
  });

  const initialFormValues = {
    email: '',
    password: '',
  };
  const [rememberMe, setRememberMe] = useState(
    !!JSON.parse(
      localStorage.getItem('token') ||
        JSON.stringify({
          value: '',
          expires: '',
        }),
    ).value,
  );
  return (
    <div className="w-screen h-screen flex flex-1">
      <div className="w-[50%] bg-loginImage bg-cover flex flex-col justify-center p-[4rem]">
        <div className="flex justify-center mb-3">
          <img src={CrmLoginHeader} className="w-[50%] h-auto rounded-lg" alt="" />
        </div>
        <div className="flex justify-center">
          <img src={imageSource[imageIndex].imgSrc} className="w-[85%] h-auto rounded-lg" alt="" />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-white font-semibold text-4xl mt-[5rem] text-center">
            <div>{imageSource[imageIndex].title}</div>
          </div>
          <div className="mt-[2rem] w-[60%] text-center text-slate-300 font-medium text-base">
            <div>{imageSource[imageIndex].description}</div>
          </div>
          <div className="flex justify-between w-[60%] pt-[1rem] items-center">
            <div
              className="bg-white hover:bg-white text-[#1586F7] w-[2rem] h-[2rem] font-bold border border-white rounded-full flex items-center justify-center cursor-pointer"
              onClick={handleImageBackward}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="w-[5rem] flex justify-around items-center">
              {imageSource.map((eachImage, index) => {
                return (
                  <div
                    key={`${eachImage}-${index}`}
                    className={
                      index === imageIndex
                        ? 'w-[0.5rem] h-[0.5rem] rounded bg-white'
                        : 'w-[0.5rem] h-[0.5rem] rounded bg-slate-400'
                    }
                  ></div>
                );
              })}
            </div>
            <div
              className="bg-white hover:bg-white text-[#1586F7] w-[2rem] h-[2rem] font-bold border border-white rounded-full flex items-center justify-center cursor-pointer"
              onClick={handleImageForward}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
      </div>
      {!forgot ? (
        <div className="w-[50%] flex items-center justify-center bg-[#f9f9fb] px-[20rem]">
          <Formik
            initialValues={initialFormValues}
            validationSchema={formValidationSchema}
            onSubmit={(values) => {
             
            }}
          >
            {({ values, handleChange, touched, errors, handleBlur }) => {
              return (
                <Form className="flex flex-col">
                  <div className="text-3xl font-medium mb-[1.5rem]"> Login</div>
                  <div className="font-semibold text-lg text-slate-650 w-full">
                    Welcome
                  </div>

                  <div className="py-[2rem] border-b-2">
                    <div className="flex mb-[3rem]">
                      <div className="flex mb-2 text-lg font-bold text-gray-900 w-[10rem] items-center">
                        Email
                      </div>
                      <div>
                        <input
                          id="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                            handleBlur(e);
                          }}
                          className="bg-white border input text-lg rounded-lg  block w-[25rem] p-2.5  "
                          placeholder="Please enter email address"
                        />
                        <div className="h-[3px] pt-[0.2rem]">
                          {errors.email && touched.email && (
                            <div className="text-red-600">{errors.email}</div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex mb-[1rem]">
                      <div className="flex mb-2 text-lg font-bold text-gray-900  w-[10rem] items-center">
                        Password
                      </div>
                      <div className="bg-[#FFFFFF] flex flex-col">
                        <div className="flex justify-end items-center relative">
                          <input
                            id="password"
                            type={isPasswordVisible ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange}
                            onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                              handleBlur(e);
                            }}
                            className="bg-[#FFFFFF] border input text-lg rounded-lg block w-[25rem] p-2.5  "
                            placeholder="Please enter password"
                          />
                          <div
                            className="absolute w-8 cursor-pointer"
                            onClick={() => {
                              handlePasswordVisibilityChange();
                            }}
                          >
                            <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} />
                          </div>
                        </div>

                        <div className="h-[3px] pt-[0.2rem]">
                          {errors.password && touched.password && (
                            <div className="text-red-600">{errors.password}</div>
                          )}
                          {!errors?.password && error && (
                            <div className="text-red-600 pt-[0.2rem]">
                              *Required
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className=" flex justify-between ">
                      <div className="flex items-center mr-4">
                        <input
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#1586F7] checked:border-[#1586F7] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          id="remember-checkbox"
                          type="checkbox"
                          onChange={() => {
                            setRememberMe((prev) => !prev);
                          }}
                        />
                        <label className="ml-1 pt-1 text-base font-medium text-slate-600 ">
                          Remember Me
                        </label>
                      </div>
                      <a
                        href="#"
                        className="no-underline hover:no-underline text-[#1586F7]"
                        onClick={(event) => {
                          setForgot(true);
                          event.preventDefault();
                          event.stopPropagation();
                        }}
                      >
                        {' '}
                        Forgot Password
                      </a>
                    </div>
                  </div>
                  <div className="py-[3rem] flex justify-end">
                    <button
                      type={'submit'}
                      className="bg-[#1586F7] hover:bg-[#1586F7] text-white font-bold py-2 px-4 border border-[#1586F7] rounded"
                    >
                      Login
                    </button>
                  </div>
                  <div className="justify-center font-medium text-slate-600 hidden">
                    New User ?
                    <span>
                      <a href="#" className="text-[#1586F7] pl-[5px]">
                        Sign Up
                      </a>
                    </span>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      ) : (
        <div className="w-[50%] flex items-center justify-center bg-[#f9f9fb] px-[20rem]">
          <div className="flex flex-col">
            <div className="text-3xl font-medium mb-[1.5rem]">
              {' '}
              Forgot Password
            </div>
            <div className="font-semibold text-lg text-slate-650 w-full">
              {/* {t('login:forgotPasswordText')} */}
            </div>
            <div className="py-[2rem] border-b-2">
              <div className="flex mb-[3rem]">
                <div className="flex mb-2 text-lg font-bold text-gray-900 w-[10rem] items-center">
                  Email
                </div>
                <div>
                  <input
                    id="email"
                    className="bg-white border input text-lg rounded-lg  block w-[25rem] p-2.5  "
                    placeholder="Please enter email address"
                    onChange={(event) => setForgotEmail(event.target.value)}
                  />
                  <div className="h-[3px] pt-[0.2rem]">
                    {emailError && (
                      <div className="text-red-600">{t('login:formValidation:required')}</div>
                    )}
                    {error && (
                      <div className="text-red-600 pt-[0.2rem]"> {t('login:notRegistered')}</div>
                    )}
                  </div>
                </div>
              </div>
              {emailText && (
                <div className="text-green-600 mb-[3rem]">{t('login:emailSentText')}</div>
              )}
              <div className="flex items-center justify-end">
                <div>Login</div>
                <a
                  href="#"
                  className="no-underline hover:no-underline text-[#1586F7] pl-2"
                  onClick={(event) => {
                    setForgot(false);
                    event.preventDefault();
                    event.stopPropagation();
                  }}
                >
                  Sign In ?
                </a>
              </div>
            </div>
            <div className="py-[3rem] flex justify-end">
              <button
                type={'submit'}
                className="bg-[#1586F7] hover:bg-[#1586F7] text-white font-bold py-2 px-4 border border-[#1586F7] rounded"
                onClick={() => {
                  if (!proceedToLogin) {
                    if (!forgotEmail) setEmailError(true);
                    else {
                      setEmailError(false);
                     
                    }
                  } else {
                    setEmailText(false);
                    setForgot(false);
                    setError(false);
                    setProceedToLogin(false);
                  }
                }}
              >
                {proceedToLogin ? 'Login' : 'Proceed'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Login;
