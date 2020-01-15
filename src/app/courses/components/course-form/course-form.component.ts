import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.sub = this.store.pipe(select(selectSelectedCourse))
      .subscribe (course => {
        if (course) {
          this.course = course;
        } else {
          this.course = new Course();
        }
      });

    // it is not necessary to save subscription to route.paramMap
    // when router destroys this component, it handles subscriptions automatically
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

  onSave() {
    const course = { ...this.course } as ICourse;

    if (course.id) {
      this.store.dispatch(CoursesActions.updateCourse({ course }));
    } else {
      this.store.dispatch(CoursesActions.createCourse({ course }));
    }
  }

  onGoBack(): void {
    this.router.navigate(['/courses']);
  }
}
