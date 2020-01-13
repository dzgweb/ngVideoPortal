import { createAction, props } from '@ngrx/store';

import { User } from '../../../users';

export const loginUser = createAction(
  '[Login Page] Login User',
  props<{ login: string, password: string }>()
);
export const loginUserSuccess = createAction(
  '[Login Page Effect] Login User Success',
  props<{ token: string }>()
);
export const loginUserFail = createAction(
  '[Login Page Effect] Login User Fail',
  // props<{ error: Error | string }>()
);

export const logout = createAction(
  '[Logout user] Logout user'
);
export const logoutSuccess = createAction(
  '[Logout user Effect] Logout Success user'
);

export const getUser = createAction(
  '[Login Page Effect] Get user'
);
export const setUser = createAction(
  '[Login Page Effect] Set user',
  props<{ user: User }>()
);
export const setUserSuccess = createAction(
  '[Logout user Effect] Set user Error'
);
export const setUserError = createAction(
  '[Logout user Effect] Set user Error',
  props<{ error: Error | string }>()
);
