import { RootStateOrAny, useSelector } from 'react-redux';

export const useAuth = () => {
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);
  return authState;
};
