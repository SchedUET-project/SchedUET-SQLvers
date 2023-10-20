const getAllTeachers = `SELECT * FROM teachers;`;

const updateTeacher = `UPDATE teachers
                       SET name = ?,
                           email = ?,
                           faculty = ?,
                           role = ?
                       WHERE teacherId = ?;`;

const addTeacher = `INSERT INTO teachers
                    VALUES(?, ?, ?, ?, ?);`;

const deleteTeacher = `DELETE FROM teachers 
                       WHERE teacherID = ?;`;

export { getAllTeachers, updateTeacher, addTeacher, deleteTeacher };
