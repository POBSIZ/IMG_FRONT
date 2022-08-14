import { useCallback } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useMethod } from 'Hooks';
import jwt from 'jwt-decode';
import { authLogin } from 'Actions/authAction';
import { AuthProfileType } from 'Types/authTypes';

const useValidate = () => {
  const method = useMethod();
  const dispatch = useDispatch();
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);

  return useCallback(async () => {
    if (authState.token) {
      const res = await method.GET('/auth/validate');

      const profileData: AuthProfileType = await jwt(res.data);

      dispatch(
        authLogin({
          profile: {
            ...profileData,
          },
          token: res.data,
        }),
      );
    }
  }, [authState]);
};

export default useValidate;
