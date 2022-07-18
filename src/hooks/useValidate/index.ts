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
            user_id: profileData.user_id,
            chain_id: profileData.chain_id,
            name: profileData.name,
            nickname: profileData.nickname,
            phone: profileData.phone,
            role: profileData.role,
            created_at: profileData.created_at,
            school: profileData.school,
            grade: profileData.grade,
            class_id: profileData.class_id,
            address: profileData.address,
            zip: profileData.zip,
            address_detail: profileData.address_detail,
            academy_id: profileData.academy_id,
          },
          token: res.data,
        }),
      );
    }
  }, [authState]);
};

export default useValidate;
