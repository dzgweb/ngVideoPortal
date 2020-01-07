import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

// @Ngrx
import { Store, select } from '@ngrx/store';
import { AppState, selectCoursesData, selectCoursesError } from './../../../core/@ngrx';
import * as CoursesActions from '../../../core/@ngrx/courses/courses.action';

import { Observable, of, from, Subscription } from 'rxjs';

import { CourseDeleteModalComponent } from '../course-delete-modal/course-delete-modal.component';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ICourse, Course } from '../../models';
import { CourseService } from '../../services';
import { FilterPipe } from '../../../shared/';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  // public courses$: Observable<Course[]>;
  public courses$: Observable<ReadonlyArray<ICourse>>;
  public coursesError$: Observable<Error | string>;

  public faPlus = faPlus;

  private sub: Subscription;

  private currentPage = 0;
  private countCourses = 5;
  private searchText: string;
  private sortBy: string;

  constructor(
    private courseService: CourseService,
    private filterPipe: FilterPipe,
    private router: Router,
    private dialog: MatDialog,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    // this.loadCourses();
    this.courses$ =  this.store.pipe(select(selectCoursesData));

    this.store.dispatch(CoursesActions.getCourses());
  }

  onAddCourse() {
    this.router.navigate(['courses/new']);
  }

  onEditCourse(course: Course) {
    this.router.navigate(['courses', course.id]);
  }

  onDeleteCourse(course: Course) {
    const dialog$ = this.openDialog(course);

    dialog$.subscribe(confirm => {
      if (confirm) {
        // this.courses$ = this.courseService.deleteCourse(course);
        this.store.dispatch(CoursesActions.deleteCourse({ course }));
      }
    });
  }

  onLoadMore() {
    this.countCourses += 5;
    this.loadCourses();
  }

  onSearchTextChange(searchText: string) {
    this.searchText = searchText;
    this.loadCourses();
  }

  private openDialog(course: Course) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { title: course.name };
    dialogConfig.disableClose = true;
    dialogConfig.width = '394px';

    const dialogRef = this.dialog.open(CourseDeleteModalComponent, dialogConfig);

    return dialogRef.afterClosed();
  }

  private loadCourses() {
    this.courses$ = this.courseService.getCourses(this.currentPage, this.countCourses, this.searchText, this.sortBy);
  }

}
