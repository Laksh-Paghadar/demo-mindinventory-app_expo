import { useCallback, useRef, useState } from 'react';
import { TextInput } from 'react-native';

import * as yup from 'yup';

import { useAppContext } from '@src/context';
import { loader, logger } from '@src/utils';

import { loginStyles } from './Login.style';
import { useAppDispatch } from '@src/store';
import { setLoginResponse } from '@src/store/reducers/loginData';
import { Screen } from '@src/navigation/appNavigation.type';

const useLogin = () => {
  const { color, navigation, services } = useAppContext();

  const [disabled, setDisabled] = useState(false);
  const passwordRef = useRef<TextInput>(null);

  const fieldValidation = yup.object().shape({
    email: yup.string().trim().required('Please enter your Email'),
    password: yup.string().trim().required('Please enter your Password'),
  });

  const initialValues = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  };

  const dispatch = useAppDispatch();

  const handleButtonSubmit = useCallback(
    async (values: typeof initialValues) => {
      // logger('values: ', values);
      // setDisabled(true);
      // await new Promise(res => setTimeout(res, 3000));
      // setDisabled(false);

      loader.current?.show();
      try {
        const response = await services.loginUser({
          email: values.email,
          password: values.password,
        });
        dispatch(setLoginResponse(response));
        navigation.navigate(Screen.NEWS_LIST);
      } catch (error) {
        logger('Laksh >> error ', error);
      } finally {
        loader.current?.hide();
      }
    },
    [loader, services, dispatch]
  );

  return {
    disabled,
    fieldValidation,
    handleButtonSubmit,
    initialValues,
    navigation,
    passwordRef,
    styles: loginStyles(color),
  };
};

export default useLogin;
