import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

import { Course } from '../../courses';

@Directive({
  selector: '[appCourseBorder]'
})
export class CourseBorderDirective implements OnInit{
  @Input('appCourseBorder') course: Course;

  private currentDate: Date = new Date(new Date().toLocaleDateString());
  private creationDate: Date;
  private withinTwoWeeks: Date;

  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    this.creationDate = new Date(this.course.creationDate);
    this.withinTwoWeeks = new Date(new Date(new Date().toLocaleDateString()).setDate(this.creationDate.getDate() - 14));
    this.setBorder();
  }

  private setBorder(): void {
    console.log(this.creationDate < this.withinTwoWeeks);
    if (this.creationDate < this.currentDate && this.creationDate >= this.withinTwoWeeks) {
      this.render.setStyle(this.el.nativeElement, 'border', '1px solid #9bc837');
    }
    if (this.creationDate > this.currentDate) {
      this.render.setStyle(this.el.nativeElement, 'border', '1px solid #30b6dd');
    }
  }

}
