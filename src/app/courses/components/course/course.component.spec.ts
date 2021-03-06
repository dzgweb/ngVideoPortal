import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CourseComponent } from './course.component';
import { Course } from '../../models';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.course =  {
      id: 1,
      title: 'Video Course 1. Name tag',
      creationDate: '12.09.2018',
      duration: 88,
      description: `Learn about where you can find course descriptions, what information they include, how they work, and details
       about various components of a course description. Course descriptions report information about a university or college's
       classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain
       descriptions for all courses offered during a particular semester.`
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit editCourse', () => {
    const spy = spyOn(console, 'log');
    component.onEditCourse();

    expect(spy).toHaveBeenCalled();
  });

  it('should log message when calling onLoadMore', () => {
    const spy = spyOn(console, 'log');
    component.onDeleteCourse();

    expect(spy).toHaveBeenCalled();
  });

  it('should emit editCourse once clicked', () => {
    const spy = spyOn(component, 'onEditCourse');

    fixture.debugElement.query(By.css('.course-manager-edit')).triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should emit DeleteCourse once clicked', () => {
    const spy = spyOn(component, 'onDeleteCourse');

    fixture.debugElement.query(By.css('.course-manager-delete')).triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

});

describe('CourseComponent class tests', () => {
  const comp = new CourseComponent();
  const course: Course = {
    id: 1,
    title: 'Video Course 1. Name tag',
    creationDate: '12.09.2018',
    duration: 88,
    description: `Test desc`
  };
  comp.course = course;

  it('raises the editCourse event when clicked onEditCourse', () => {
    comp.editCourse.subscribe((selectedCourse: Course) => expect(selectedCourse).toBe(course));
    comp.onEditCourse();
  });

  it('raises the deleteCourse event when clicked onDeleteCourse', () => {
    comp.deleteCourse.subscribe((selectedCourse: Course) => expect(selectedCourse).toBe(course));
    comp.onDeleteCourse();
  });
});
