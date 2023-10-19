const getTakesByStudentId = "SELECT courseID, sectionID FROM takes WHERE studentID = ?";

const addTake = "";

const deleteTake = "DELETE FROM takes WHERE studentID = ? AND courseID = ? AND sectionID = ?";

export { getTakesByStudentId, addTake, deleteTake };
