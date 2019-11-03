import { TestBed } from '@angular/core/testing';

import { Course } from '../models';
import { CourseService } from './course.service';

describe('CourseService created', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseService = TestBed.get(CourseService);
    expect(service).toBeTruthy();
  });
});


describe('CourseService', () => {
  let service: CourseService;
  const course: Course = {
    id: 2,
    title: 'Video Course 2. Name tag',
    creationDate: '11.10.2018',
    duration: 77,
    description: `Learn about where you can find course descriptions, what information they include, how they work, and details
    about various components of a course description. Course descriptions report information about a university or college's
    classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain
    descriptions for all courses offered during a particular semester.`
  };

  beforeEach(() => { service = new CourseService(); });

  it('#getCourse should return value from observable',
    (done: DoneFn) => {
    service.getCourse(3).subscribe(value => {
      expect(Object.keys(value)).toContain('id');
      expect(value.title).toBe('Video Course 3. Name tag');
      expect(value.duration).toBe(105);
      done();
    });
  });

  it('#editCourse should update the course', () => {
    service.editCourse({
      id: 1,
      title: 'Test update course 1',
      creationDate: '12.09.2018',
      duration: 717,
      description: `Test update`
    });
    service.getCourse(1).subscribe(value => {
      expect(value.title).toBe('Test update course 1');
      expect(value.duration).toBe(717);
    });
  });


  it('#deleteCourse should delete the course',
    (done: DoneFn) => {
      service.deleteCourse(course);
      service.getCourses().subscribe(value => {
        expect(value.length).toBe(2);
        done();
    });
  });
});
