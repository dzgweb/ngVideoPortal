import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of, from, Subscription } from 'rxjs';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../../models';
import { CourseService } from '../../services';
import { FilterPipe } from '../../../shared/';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, OnDestroy {
  public courses$: Observable<Course[]>;
  public faPlus = faPlus;

  private sub: Subscription;

  private currentPage = 0;
  private countCourses = 5;
  private searchText: string;
  private sortBy: string;

  constructor(
    private courseService: CourseService,
    private filterPipe: FilterPipe,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCourses();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // getFilterCourses(courses$: Observable<Array<Course>>, searchText: string): Observable<Array<Course>> {
  //   return this.filterPipe.transform(courses$, searchText);
  // }

  onAddCourse() {
    this.router.navigate(['courses/new']);
  }

  onEditCourse(course: Course) {
    this.router.navigate(['courses', course.id]);
  }

  onDeleteCourse(course: Course) {
    this.courses$ = this.courseService.deleteCourse(course);
    // this.courseService.deleteCourse(course).subscribe(() => {
    //   this.courses$ = this.getFilterCourses(this.courseService.getCourses(), this.filterText);
    // });
  }

  onLoadMore() {
    this.countCourses += 5;
    this.loadCourses();
  }

  onSearchTextChange(searchText: string) {
    this.searchText = searchText;
    this.loadCourses();
  }

  private loadCourses() {
    this.courses$ = this.courseService.getCourses(this.currentPage, this.countCourses, this.searchText, this.sortBy);
  }
}
