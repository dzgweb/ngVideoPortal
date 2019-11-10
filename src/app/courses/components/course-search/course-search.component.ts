import { Component, OnInit } from '@angular/core';

import { CourseService } from '../../services';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent implements OnInit {
  public searchText: string;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

  onSearch() {
    if (this.searchText) {
      console.log(this.searchText);
      this.courseService.filterText.next(this.searchText);
    } else {
      this.courseService.filterText.next('');
    }
  }
}
