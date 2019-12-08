import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from '../../models';
import { CourseService } from '../../services';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  public course: Course;

  constructor(private router: Router, private courseService: CourseService) { }

  ngOnInit() {
    this.course = new Course();
  }

  cancel() {
    this.router.navigate(['/login']);
  }

  save() {
    console.log(this.course);
    this.courseService.addCourse();
  }
}
