const getTakesByStudentId = "SELECT courseID, sectionID FROM takes WHERE studentID = ?";

const addTake = "INSERT INTO takes (studentID, courseID, sectionID) VALUES (?, ?, ?)";

const deleteTake = "DELETE FROM takes WHERE studentID = ? AND courseID = ? AND sectionID = ?";

export { getTakesByStudentId, addTake, deleteTake };
