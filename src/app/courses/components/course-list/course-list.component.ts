import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Course } from '../../models';
import { CourseService } from '../../services';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  public courses: Observable<Course[]>;
  public faPlus = faPlus;

  constructor(
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

  onEditCourse(course: Course): void {
    console.log(`onEditCourse  ${course.id}`);
  }

  onDeleteCourse(course: Course): void {
    console.log(`onDeleteCourse ${course.id}`);
    this.courseService.deleteCourse(course);
  }

  onAddCourse() {
    console.log(`onCreateCourse`);
    this.courseService.addCourse();
  }

  onLoadMore() {
    console.log('onLoadMore');
  }
}
