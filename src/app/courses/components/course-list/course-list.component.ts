import { Component, OnInit } from '@angular/core';

import { Observable, of, from } from 'rxjs';

import { Course } from '../../models';
import { CourseService } from '../../services';
import { FilterPipe } from '../../../shared/';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  public courses$: Observable<Course[]>;
  public courses: Course[];
  public faPlus = faPlus;
  public filterText: string;

  constructor(
    private courseService: CourseService,
    private filterPipe: FilterPipe
  ) {}

  ngOnInit() {
    this.courses$ = this.courseService.getCourses();
    this.courseService.getFilterText()
      .subscribe(filterText => this.filterText = filterText);

    // this.courseService.getCourses().subscribe(courses => this.courses = courses);
    // this.getFilterCourses();
  }

  getFilterCourses(courses: Array<Course>, searchText: string) {
    this.courses = this.filterPipe.transform(courses, searchText);
  }

  onAddCourse() {
    console.log(`onCreateCourse`);
    this.courseService.addCourse();
  }

  onEditCourse(course: Course): void {
    console.log(`onEditCourse  ${course.id}`);
  }

  onDeleteCourse(course: Course): void {
    console.log(`onDeleteCourse ${course.id}`);
    this.courseService.deleteCourse(course);
  }

  onLoadMore() {
    console.log('onLoadMore');
  }
}
