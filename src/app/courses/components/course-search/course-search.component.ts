import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent implements OnInit {
  public searchText: string;

  constructor() { }

  ngOnInit() {
  }

  onSearch() {
    if (this.searchText) {
      console.log(this.searchText);
    }
  }
}
