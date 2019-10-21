import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Course } from '../../models';
import { CourseService } from '../../services';


@Component({
  selector: 'app-cource-list',
  templateUrl: './cource-list.component.html',
  styleUrls: ['./cource-list.component.scss']
})
export class CourceListComponent implements OnInit {
  public courses: Observable<Course[]>;

  constructor(
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

  onEditCourse() {
    console.log('onEditCourse');
  }

  onDeleteCourse() {
    console.log('onDeleteCourse');
  }
}
