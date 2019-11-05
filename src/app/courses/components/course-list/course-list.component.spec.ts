import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { of } from 'rxjs';

import { Course } from '../../models';
import { CourseListComponent } from './course-list.component';
import { CourseService } from '../../services';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  const courseTest: Course = {
    id: 1,
    title: 'Video Course 1. Name tag',
    creationDate: '12.09.2018',
    duration: 88,
    description: `Learn about where you can find course descriptions, what information they include, how they work, and details
     about various components of a course description. Course descriptions report information about a university or college's
     classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain
     descriptions for all courses offered during a particular semester.`
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call onAddCourse once clicked', () => {
    const spy = spyOn(component, 'onAddCourse');

    fixture.debugElement.query(By.css('.btn-create-course')).triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should call onLoadMore once clicked', () => {
    const spy = spyOn(component, 'onLoadMore');

    fixture.debugElement.query(By.css('.load-more')).triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should log message when calling onAddCourse', () => {
    const addCourseSpy = spyOn(console, 'log');
    component.onAddCourse();

    expect(addCourseSpy).toHaveBeenCalled();
  });

  it('should log message when calling onDeleteCourse', () => {
    const deleteCourseSpy = spyOn(console, 'log');
    component.onDeleteCourse(courseTest);

    expect(deleteCourseSpy).toHaveBeenCalled();
  });

  it('should log message when calling onEditCourse', () => {
    const editCourse = spyOn(console, 'log');
    component.onEditCourse(courseTest);

    expect(editCourse).toHaveBeenCalled();
  });

  it('should log message when calling onLoadMore', () => {
    const loadMoreSpy = spyOn(console, 'log');
    component.onLoadMore();

    expect(loadMoreSpy).toHaveBeenCalled();
  });
});

describe('CourseListComponent with Dependency CourseService', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let courseService: CourseService;
  const courseServiceStub: Partial<any> = {
    getCourses: () => of([{id: 1}, {id: 2}, {id: 3}]),
    getCourse: (course: Course) => `Course № ${course.id}`,
    addCourse: () => `new course was added`,
    editCourse: (course: Course) => `course ${course.id} was edited`,
    deleteCourse: (course: Course) => `course ${course.id} was deleted`
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent ],
      providers: [{ provide: CourseService, useValue: courseServiceStub }],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    courseService = TestBed.get(CourseService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call courseService', () => {
    const getDataSpy = spyOn(courseService, 'getCourses');
    component.ngOnInit();
    expect(getDataSpy).toHaveBeenCalled();
  });

  it('should call courseService addCourse', () => {
    const addCourseSpy = spyOn(courseService, 'addCourse');
    component.onAddCourse();
    expect(addCourseSpy).toHaveBeenCalled();
  });

});
