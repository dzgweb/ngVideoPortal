import { Course } from './course.model';

describe('New Course', () => {
    const course = new Course();

    it('should be by default', () => {
        expect(course.id).toEqual(null);
        expect(course.title).toEqual('');
        expect(course.creationDate).toEqual('');
        expect(course.duration).toEqual(0);
        expect(course.description).toEqual('');
    });
});
