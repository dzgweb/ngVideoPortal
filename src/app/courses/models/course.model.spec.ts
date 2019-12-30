import { Course } from './course.model';

describe('New Course', () => {
    const course = new Course();

    it('should be by default', () => {
        expect(course.id).toEqual(null);
        expect(course.name).toEqual('');
        expect(course.date).toEqual('');
        expect(course.length).toEqual(0);
        expect(course.description).toEqual('');
    });
});
