import { AuthReducerType } from 'Types/authTypes';

import window from 'global/window';

export function getAuth(): AuthReducerType {
  return JSON.parse(
    JSON.parse(window.localStorage['persist:root']).authReducer,
  );
}
