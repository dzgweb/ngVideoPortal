import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

import { Course } from '../../models';

@Component({
  selector: 'app-cource',
  templateUrl: './cource.component.html',
  styleUrls: ['./cource.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourceComponent implements OnInit {
  @Input() cource: Course;

  @Output() editCourse = new EventEmitter<Course>();
  @Output() deleteCourse = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  onEditCourse() {
    this.editCourse.emit(this.cource);
  }

  onDeleteCourse() {
    this.deleteCourse.emit(this.cource);
  }

}
