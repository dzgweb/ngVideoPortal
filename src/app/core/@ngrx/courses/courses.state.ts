import { ICourse } from '../../../courses';

export interface CoursesState {
  data: ReadonlyArray <ICourse>;
  selectedCourse: Readonly <ICourse>;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export const initialCoursesState: CoursesState = {
  data: [],
  selectedCourse: null,
  loading: false,
  loaded: false,
  error: null
};
