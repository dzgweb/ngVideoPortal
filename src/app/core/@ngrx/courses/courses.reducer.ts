import { Action, createReducer, on } from '@ngrx/store';

import { CoursesState, initialCoursesState } from './courses.state';
import * as CoursesActions from './courses.action';
import { ICourse } from '../../../courses';

export const coursesFeatureKey = 'courses';

const reducer = createReducer(
  initialCoursesState,
  on(CoursesActions.getCourses, state => {
    console.log('GET_COURSES action being handled!');
    return {
      ...state,
      loading: true
    };
  }),
  on(CoursesActions.getCoursesSuccess, (state, { courses }) => {
    console.log('GET_COURSES_SUCCESS action being handled!');
    const data = [...courses];
    return {
      ...state,
      data,
      loading: false,
      loaded: true
    };
  }),
  on(CoursesActions.getCoursesError, (state, { error }) => {
    console.log('GET_COURSES_ERROR action being handled!');
    return {
      ...state,
      loading: false,
      loaded: false,
      error
    };
  }),

  on(CoursesActions.getCourse, state => {
    console.log('GET_COURSE action being handled!');
    return { ...state };
  }),
  on(CoursesActions.createCourse, state => {
    console.log('CREATE_COURSE action being handled!');
    return { ...state };
  }),
  on(CoursesActions.updateCourse, (state, { course }) => {
    console.log('UPDATE_COURSE action being handled!');

    const id = course.id;
    const data = state.data.map(c => {
      if (c.id === id) {
        return course;
      }
      return c;
    });

    return {
      ...state,
      data
    };
  }),

  on(CoursesActions.deleteCourse, state => {
    console.log('DELETE_COURSE action being handled!');
    return { ...state};
  }),
  on(CoursesActions.deleteCourseSuccess, (state, { course }) => {
    console.log('DELETE_COURSE_SUCCESS action being handled!');
    const data = state.data.filter(c => c.id !== course.id);
    return {
      ...state,
      data
    };
  }),
  on(CoursesActions.deleteCourseError, (state, props) => {
    console.log('DELETE_COURSE_ERROR action being handled!');
    const error = props.error;
    return {
      ...state,
      error
    };
  })

);

export function coursesReducer(state: CoursesState | undefined, action: Action) {
  return reducer(state, action);
}
