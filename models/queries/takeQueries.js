const getTakesByStudentId = 
`SELECT courses.title, courses.credits, sections.* 
FROM takes inner join sections on takes.courseID = sections.courseID and takes.sectionID = sections.sectionID 
    inner join courses on courses.courseID = sections.courseID 
WHERE studentID = ?`;

const addTake = "INSERT INTO takes (studentID, courseID, sectionID) VALUES (?, ?, ?)";

const deleteTake = "DELETE FROM takes WHERE studentID = ? AND courseID = ? AND sectionID = ?";

export { getTakesByStudentId, addTake, deleteTake };
