import { Action, createReducer, on } from '@ngrx/store';

import { UsersState, initialUsersState } from './users.state';
import * as UsersAction from './users.actions';


const reducer = createReducer(
  initialUsersState,
  on(UsersAction.loginUserSuccess, (state, { token }) => {
    console.log('GET_COURSES action being handled!');
    return {
      ...state,
      token
    };
  }),
);

export function usersReducer(state: UsersState | undefined, action: Action) {
  return reducer(state, action);
}
