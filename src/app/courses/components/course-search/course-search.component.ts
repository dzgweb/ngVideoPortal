import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

import { fromEvent, Subscription } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent implements AfterViewInit, OnDestroy  {
  @Output() searchFragment = new EventEmitter<string>();

  @ViewChild('searchInput', {static: false})
  input: ElementRef;

  private searchText: string;
  private sub: Subscription;

  ngAfterViewInit(): void {
    const terms$ = fromEvent<any>(this.input.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        filter(chars => ((chars.length < 0)) && chars.length >= 3),
        tap(e => console.log(e)),
        debounceTime(400),
        distinctUntilChanged()
      );

    this.sub = terms$
      .subscribe(
        criterion => {
          this.searchFragment.emit(criterion as string);
        }
      );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
