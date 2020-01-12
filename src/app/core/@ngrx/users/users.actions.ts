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
  props<{ error: Error | string }>()
);

export const logout = createAction(
  '[Logout user] Logout user'
);
