import { Action, createReducer, on } from '@ngrx/store';

import { UsersState, initialUsersState } from './users.state';
import * as UsersAction from './users.actions';

const reducer = createReducer(
  initialUsersState,
  on(UsersAction.loginUser, state => {
    console.log('LOGIN_USER action being handled!');
    return {
      ...state,
    };
  }),
  on(UsersAction.loginUserSuccess, (state, { token }) => {
    console.log('LOGIN_USER_SUCCESS action being handled!');
    return {
      ...state,
      error: ''
    };
  }),
  on(UsersAction.loginUserFail, state => {
    console.log('LOGIN_USER_FAIL action being handled!');
    return {
      ...state,
      error: 'Wrong login or password'
    };
  }),

  on(UsersAction.setUser, (state, { user }) => {
    console.log('LOGIN_USER_FAIL action being handled!');
    return {
      ...state,
      user
    };
  }),
);

export function usersReducer(state: UsersState | undefined, action: Action) {
  return reducer(state, action);
}
