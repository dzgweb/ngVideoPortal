import { createAction, props } from '@ngrx/store';

import { ICourse } from '../../../courses';

export const getCourses = createAction(
  '[Get Courses] GET_COURSES',
  props<{ currentPage?: number, countCourses?: number, searchText?: string, sortBy?: string }>()
);
export const getCoursesSuccess = createAction(
  '[Get Courses Effects] GET_COURSES_SUCCEESS',
  props<{ courses: ICourse[] }>()
);
export const getCoursesError = createAction(
  '[Get Courses Effects] GET_COURSES_ERROR',
  props<{ error: Error }>()
);

export const getCourse = createAction(
  '[Add/Edit Course (App)] GET_COURSE',
  props<{ courseID: number }>()
);
export const getCourseSuccess = createAction(
  '[Get Course Effects] GET_COURSE_SUCCESS',
  props<{ course: ICourse }>()
);
export const getCourseError = createAction(
  '[Get Course Effects] GET_COURSE_SUCCESS',
  props<{ error: Error | string }>()
);
export const clearSelectCourse = createAction(
  '[Add/Edit clearSelectCourse (App)] GET_COURSE'
);

export const createCourse = createAction(
  '[Courses] CREATE_COURSE',
  props<{ course: ICourse }>()
);
export const createCourseSuccess = createAction(
  '[Courses Effects] CREATE_COURSE_SUCCESS',
  props<{ course: ICourse }>()
);
export const createCourseError = createAction(
  '[Courses Effects] CREATE_COURSE_ERROR',
  props<{ error: Error | string }>()
);

export const updateCourse = createAction(
  '[Courses] UPDATE_COURSE',
  props<{ course: ICourse }>()
);
export const updateCourseSuccess = createAction(
  '[Courses Effects] UPDATE_COURSE_SUCCESS',
  props<{ course: ICourse }>()
);
export const updateCourseError = createAction(
  '[Courses Effects] UPDATE_COURSE_ERROR',
  props<{ error: Error | string }>()
);

export const deleteCourse = createAction(
  '[Courses] DELETE_COURSE',
  props<{ course: ICourse }>()
);
export const deleteCourseSuccess = createAction(
  '[Courses Effects] DELETE_COURSE_SUCCESS',
  props<{ course: ICourse }>()
);
export const deleteCourseError = createAction(
  '[Courses Effects] DELETE_COURSE_ERROR',
  props<{ error: Error | string }>()
);
