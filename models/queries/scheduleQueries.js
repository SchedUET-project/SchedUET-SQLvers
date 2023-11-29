const defaultQuery = "show databases;";

const getScheduleById = 
`SELECT courses.title, courses.credits, sections.* 
FROM schedule inner join sections on schedule.courseID = sections.courseID and schedule.sectionID = sections.sectionID 
    inner join courses on courses.courseID = sections.courseID 
WHERE userID = ?`;

const addSchedule = "INSERT INTO schedule (userID, courseID, sectionID) VALUES (?, ?, ?)";

const deleteSchedule = "DELETE FROM schedule WHERE userID = ? AND courseID = ? AND sectionID = ?";

export { defaultQuery, getScheduleById, addSchedule, deleteSchedule };
