const defaultQuery = "show databases;";

const getScheduleById = "SELECT courseID, sectionID FROM schedule WHERE userID = ?";

const addSchedule = "INSERT INTO schedule (userID, courseID, sectionID) VALUES (?, ?, ?)";

const deleteSchedule = "DELETE FROM schedule WHERE userID = ? AND courseID = ? AND sectionID = ?";

export { defaultQuery, getScheduleById, addSchedule, deleteSchedule };
