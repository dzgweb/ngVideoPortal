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
  public filterText: string;

  private sub: Subscription;

  constructor(
    private courseService: CourseService,
    private filterPipe: FilterPipe,
    private router: Router
  ) {}

  ngOnInit() {
    this.courses$ = this.getFilterCourses(this.courseService.getCourses(), this.filterText);
    // this.courses$ = this.courseService.getCourses();
    this.sub = this.courseService.getFilterText()
      .subscribe(filterText => {
        this.filterText = filterText;
        this.courses$ = this.getFilterCourses(this.courseService.getCourses(), this.filterText);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getFilterCourses(courses$: Observable<Array<Course>>, searchText: string): Observable<Array<Course>> {
    return this.filterPipe.transform(courses$, searchText);
  }

  onAddCourse() {
    this.router.navigate(['courses/new']);
  }

  onEditCourse(course: Course): void {
    this.router.navigate(['courses', course.id]);
  }

  onDeleteCourse(course: Course): void {
    this.courseService.deleteCourse(course);
  }

  onLoadMore() {
    console.log('onLoadMore');
  }
}
