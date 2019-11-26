import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

import { faClock, faCalendarAlt, faPen, faTrashAlt, faStar } from '@fortawesome/free-solid-svg-icons';

import { Course } from '../../models';
import { DeleteCourseDialogComponent } from '../../../material';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {
  @Input() course: Course;

  @Output() editCourse = new EventEmitter<Course>();
  @Output() deleteCourse = new EventEmitter<Course>();

  public faClock = faClock;
  public faCalendarAlt = faCalendarAlt;
  public faPen = faPen;
  public faTrashAlt = faTrashAlt;
  public faStar = faStar;

  constructor() { }

  ngOnInit() {
  }

  onEditCourse() {
    console.log('onEditCourse');
    this.editCourse.emit(this.course);
  }

  onDeleteCourse() {
    const wantDelete = confirm('Do you really want to delete this course?');
    console.log('wantDelete', wantDelete);
    console.log('onDeleteCourse');
    if (wantDelete) { this.deleteCourse.emit(this.course); }
  }

}
