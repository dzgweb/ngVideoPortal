import { ICourse } from '../../../courses';

export interface CoursesState {
  data: ReadonlyArray <ICourse>;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export const initialCoursesState: CoursesState = {
  data: [
    {
      id: 1,
      name: 'Video Course 1. Name tag',
      date: '12.10.2019',
      length: 125,
      description: `Learn about where you can find course descriptions, what information they include, how they work, and details
      about various components of a course description. Course descriptions report information about a university or college's
      classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain
      descriptions for all courses offered during a particular semester.`,
      isTopRated: false
    },
    {
      id: 2,
      name: 'Video Course 2. Name tag',
      date: '12.15.2019',
      length: 188,
      description: `Learn about where you can find course descriptions, what information they include, how they work, and details
       about various components of a course description. Course descriptions report information about a university or college's
       classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain
       descriptions for all courses offered during a particular semester.`,
       isTopRated: false
    },
    {
      id: 3,
      name: 'Video Course 3. Name tag',
      date: '01.12.2019',
      length: 55,
      description: `Learn about where you can find course descriptions, what information they include, how they work, and details
      about various components of a course description. Course descriptions report information about a university or college's
      classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain
      descriptions for all courses offered during a particular semester.`,
      isTopRated: false
    }
  ],
  loading: false,
  loaded: false,
  error: null
};
