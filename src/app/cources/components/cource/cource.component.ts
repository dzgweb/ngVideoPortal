import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Course } from '../../models';

@Component({
  selector: 'app-cource',
  templateUrl: './cource.component.html',
  styleUrls: ['./cource.component.scss']
})
export class CourceComponent implements OnInit {
  @Input() cource: Course;

  @Output() editCourse = new EventEmitter<Course>();
  @Output() deleteCourse = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  onEditCource() {
    this.editCourse.emit(this.cource);
  }

  onDeleteCource() {
    this.deleteCourse.emit(this.cource);
  }

}
