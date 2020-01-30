import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { tap, map } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';

// @Ngrx
import { Store, select } from '@ngrx/store';
import { AppState, selectSelectedCourse } from './../../../core/@ngrx';
import * as CoursesActions from '../../../core/@ngrx/courses/courses.action';

import { Course, ICourse, Author, AuthorOptions } from '../../models';
import { AuthorsService } from '../../../core/services';
import { ValidateIsNumbers } from './../../../shared/validators/custom.validators';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit, OnDestroy {
  public pageTitle: string;
  public course: ICourse;
  public authorOptions$: Observable<AuthorOptions[]>;

  private sub: Subscription;
  private authorsSourceData: Author[];

  courseForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    length: [null, [Validators.required, Validators.min(1), ValidateIsNumbers]],
    date: [null, Validators.required],
    authors: [[]]
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private fb: FormBuilder,
    private authorsService: AuthorsService
  ) {}

  ngOnInit() {
    this.sub = this.store.pipe(select(selectSelectedCourse))
      .subscribe (course => {
        if (course) {
          this.pageTitle = `Edit course: ${course.name}`;
          this.course = course;
          this.setCourse(course);
        } else {
          this.course = new Course();
          this.pageTitle = 'New course';
        }
      });

    this.route.paramMap
      .subscribe((params: ParamMap) => {
        const id = params.get('id');
        if (id) {
          this.store.dispatch(CoursesActions.getCourse({ courseID: +id }));
        }
      });

    this.authorOptions$ = this.authorsService.getAuthors().pipe(
      tap((authors: Author[]) => { this.authorsSourceData = authors; }),
      map((authors: Author[]) => this.mapAuthorsToSelectOptions(authors)),
      map((authors: AuthorOptions[]) => authors.sort(this.sortAuthorOptions))
    );
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

  isInvalid(fieldName: string) {
    return (this.courseForm.get(fieldName).touched || this.courseForm.get(fieldName).dirty) && this.courseForm.get(fieldName).errors;
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
      authors: this.mapAuthorsToSelectOptions(course.authors)
    });
  }

  private mapAuthorsToSelectOptions(authors: Author[]): AuthorOptions[] {
    return authors.map(author => ({
      id: author.id,
      label: `${author.name} ${author.lastName}`,
    }));
  }

  private mapSelectOptionsToAuthors(options: AuthorOptions[]): Author[] {
    return options.map((option: AuthorOptions) => {
      const { id, name, lastName } = this.authorsSourceData.find(author => author.id === option.id);

      return new Author(id, name, lastName);
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
      this.mapSelectOptionsToAuthors(authors),
      this.course.isTopRated
    );
  }

  private sortAuthorOptions(option1, option2): number {
    return option1.label < option2.label ? -1 : (option1.label > option2.label ? 1 : 0);
  }

}
