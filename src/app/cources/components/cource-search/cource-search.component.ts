import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cource-search',
  templateUrl: './cource-search.component.html',
  styleUrls: ['./cource-search.component.scss']
})
export class CourceSearchComponent implements OnInit {
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
