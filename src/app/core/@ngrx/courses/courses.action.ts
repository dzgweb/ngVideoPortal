import { createAction, props } from '@ngrx/store';

import { ICourse } from '../../../courses';

export const getCourses = createAction('[Courses] GET_COURSES');
export const getCoursesSuccess = createAction(
  '[Courses Effects] GET_COURSES_SUCCEESS',
  props<{ courses: ICourse[] }>()
);
export const getCoursesError = createAction(
  '[Courses Effects] GET_COURSES_ERROR',
  props<{ error: Error }>()
);

export const getCourse = createAction(
  '[Courses] GET_COURSE',
  props<{ courseID: number }>()
);
export const getCourseSuccess = createAction(
  '[Courses Effects] GET_COURSE_SUCCESS',
  props<{ course: ICourse }>()
);
export const getCourseError = createAction(
  '[Courses Effects] GET_COURSE_SUCCESS',
  props<{ error: Error | string }>()
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
