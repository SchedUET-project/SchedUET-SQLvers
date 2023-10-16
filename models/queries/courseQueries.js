
const getAllCourses = `
select * from courses;
`

const getCourseById = ``

const addCourse = `
    insert into courses
    value (
        ?,
        ?,
        ?
    );
`
const updateCourse = ""

const deleteCourse = ""

export {addCourse, getAllCourses, getCourseById, updateCourse, deleteCourse}