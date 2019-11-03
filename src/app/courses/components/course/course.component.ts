import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

import { Course } from '../../models';
import { faClock, faCalendarAlt, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

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

  constructor() { }

  ngOnInit() {
  }

  onEditCourse() {
    console.log('onEditCourse');
    this.editCourse.emit(this.course);
  }

  onDeleteCourse() {
    console.log('onDeleteCourse');
    this.deleteCourse.emit(this.course);
  }

}
