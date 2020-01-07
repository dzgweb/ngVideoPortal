import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CoursesState } from './courses.state';

export const selectCoursesState = createFeatureSelector < CoursesState > ('courses');
export const selectCoursesData = createSelector(selectCoursesState, (state: CoursesState) => state.data);
export const selectCoursesError = createSelector(selectCoursesState, (state: CoursesState) => state.error);
export const selectCoursesLoaded = createSelector(selectCoursesState, (state: CoursesState) => state.loaded);
