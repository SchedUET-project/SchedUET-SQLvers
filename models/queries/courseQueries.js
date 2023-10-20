const getAllCourses = `
select * from courses;
`;

const getCourseById = ``;

const addCourse = `
    insert into courses
    value (
        ?,
        ?,
        ?
    );
`;
const deleteCourse = `
DELETE FROM courses
WHERE courseID = ?;
`;

const updateCourse = `
UPDATE courses
SET courseID = ?, title = ?, credits = ?
WHERE courseID = ?;
`;

export { addCourse, getAllCourses, getCourseById, updateCourse, deleteCourse };
