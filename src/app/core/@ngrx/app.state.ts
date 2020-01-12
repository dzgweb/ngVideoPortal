import { CoursesState } from './courses';
import { UsersState } from './users';

export interface AppState {
  courses: CoursesState;
  user: UsersState;
}
