import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import {of, Subscription} from 'rxjs';

import { Course } from '../../models';
import { CourseService } from '../../services';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  public course: Course;
  private sub: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.course = new Course();

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          return params.get('id')
            ? this.courseService.getCourse(+params.get('id'))
            : of(null);
        })
      )
      .subscribe(course => (this.course = { ...course }), err => console.log(err));

    console.log(this.course);
  }

  onCancel() {
    this.onGoBack();
  }

  onSave() {
    const course = { ...this.course };

    const method = course.id ? 'updateCourse' : 'createCourse';
    this.sub = this.courseService[method](course)
      .subscribe(() => {
          this.onGoBack();
        }
      );

    // if (course.id) {
    //   this.courseService.updateCourse(course);
    // } else {
    //   this.courseService.createCourse(course);
    // }

    this.onGoBack();
  }

  onGoBack(): void {
    this.router.navigate(['/courses']);
  }
}
