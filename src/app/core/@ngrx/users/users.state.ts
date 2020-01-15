import { User } from '../../../users';

export interface UsersState {
  readonly user: User;
  readonly error: Error | string;
}

export const initialUsersState: UsersState = {
  user: null,
  error: null
};
