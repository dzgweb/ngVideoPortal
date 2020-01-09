import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-course-delete-modal',
  templateUrl: './course-delete-modal.component.html',
  styleUrls: ['./course-delete-modal.component.scss']
})
export class CourseDeleteModalComponent {
  courseTitle: string;

  constructor(
    private dialogRef: MatDialogRef<CourseDeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    console.log(data);
    this.courseTitle = data.title;
  }

  onClose() {
    this.dialogRef.close(false);
  }

  onDelete() {
    this.dialogRef.close(true);
  }
}
