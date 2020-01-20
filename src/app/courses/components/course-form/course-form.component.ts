import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { switchMap } from 'rxjs/operators';
import { of, Subscription, Observable } from 'rxjs';

// @Ngrx
import { Store, select } from '@ngrx/store';
import { AppState, selectSelectedCourse } from './../../../core/@ngrx';
import * as CoursesActions from '../../../core/@ngrx/courses/courses.action';

import { Course, ICourse } from '../../models';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit, OnDestroy {
  public course: ICourse;
  // public course$: Observable<Readonly<ICourse>>;
  private sub: Subscription;

  courseForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    length: [null, [Validators.required, Validators.min(1)]],
    date: [null, Validators.required],
    authors: [[], Validators.required]
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.sub = this.store.pipe(select(selectSelectedCourse))
      .subscribe (course => {
        if (course) {
          this.course = course;
          this.setCourse(course);
        } else {
          this.course = new Course();
        }
      });

    this.route.paramMap
      .subscribe((params: ParamMap) => {
        const id = params.get('id');
        if (id) {
          this.store.dispatch(CoursesActions.getCourse({ courseID: +id }));
        }
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onCancel() {
    this.onGoBack();
  }

  onSubmit() {
    console.warn(this.courseForm.value);

    const courseForm = this.getCourse();
    const course = { ...courseForm } as ICourse; // need a plain object to dispatch

    if (this.course.id) {
      this.store.dispatch(CoursesActions.updateCourse({ course }));
    } else {
      this.store.dispatch(CoursesActions.createCourse({ course }));
    }
  }

  onGoBack(): void {
    this.router.navigate(['/courses']);
  }

  private setCourse(course: ICourse) {
    this.courseForm.setValue({
      name: course.name,
      description: course.description,
      length: course.length,
      date: course.date,
      authors: []
    });
  }

  private getCourse(): Course {
    const { name, description, length, date, authors } = this.courseForm.value;

    return new Course(
      this.course.id || null,
      name,
      date,
      length,
      description,
      authors,
      this.course.isTopRated
    );
  }
}
