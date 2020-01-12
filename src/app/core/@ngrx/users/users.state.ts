import { User } from '../../../users';

export interface UsersState {
  readonly user: User;
  readonly token: string;
  readonly error: Error | string;
}

export const initialUsersState: UsersState = {
  user: null,
  token: '',
  error: null
};
