import { createAction, props } from '@ngrx/store';

import { User } from '../../../users';

export const loginUser = createAction(
  '[Login Page] Login User',
  props<{ user: User }>()
);
export const loginUserSuccess = createAction(
  '[Login Page] Login User Success',
  props<{ user: User }>()
);
export const loginUserFail = createAction(
  '[Login Page] Login User Fail',
  props<{ error: Error | string }>()
);


export const login = createAction(
  '[Login Page] Login',
  props<{ username: string; password: string }>()
);
