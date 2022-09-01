import { RootStateOrAny, useSelector } from 'react-redux';
import { AuthReducerType } from 'Types/authTypes';

export const useAuth = (): AuthReducerType => {
  return useSelector((state: RootStateOrAny) => state.authReducer);
};
