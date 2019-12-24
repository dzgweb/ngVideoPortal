import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent {
  @Output() searchFragment = new EventEmitter<string>();

  private searchText: string;

  onSearch() {
    this.searchFragment.emit(this.searchText);
  }
}
