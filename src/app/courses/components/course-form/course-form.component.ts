import { Component, OnInit } from '@angular/core';

import { Course } from '../../models';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  public course: Course;

  constructor() { }

  ngOnInit() {
    this.course = new Course();
  }

  cancel() {
    this.course = new Course();
  }

  save() {
    console.log(this.course);
  }
}
