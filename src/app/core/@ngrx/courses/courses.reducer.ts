import { Action, createReducer, on } from '@ngrx/store';

import { CoursesState, initialCoursesState } from './courses.state';
import * as CoursesAction from './courses.action';
import { ICourse } from '../../../courses';

export const coursesFeatureKey = 'courses';

const reducer = createReducer(
  initialCoursesState,
  on(CoursesAction.getCourses, state => {
    console.log('GET_COURSES action being handled!');
    return {
      ...state,
      loading: true
    };
  }),
  on(CoursesAction.getCourseSuccess, (state, payload) => {
    console.log('GET_COURSES_SUCCESS action being handled!');
    return {
      ...state,
      loading: false,
      loaded: false,
      error: null
    };
  }),
  on(CoursesAction.getCourseError, (state, payload) => {
    console.log('GET_COURSES_ERROR action being handled!');
    return {
      ...state,
      loading: false,
      loaded: false,
      error: null
    };
  }),

  on(CoursesAction.getCourse, state => {
    console.log('GET_COURSE action being handled!');
    return { ...state };
  }),
  on(CoursesAction.createCourse, state => {
    console.log('CREATE_COURSE action being handled!');
    return { ...state };
  }),
  on(CoursesAction.updateCourse, (state, { course }) => {
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

  on(CoursesAction.deleteCourse, (state, { course }) => {
    console.log('DELETE_COURSE action being handled!');

    const data = state.data.filter(c => c.id !== course.id);

    return { ...state, data};
  })
);

export function coursesReducer(state: CoursesState | undefined, action: Action) {
  return reducer(state, action);
}
