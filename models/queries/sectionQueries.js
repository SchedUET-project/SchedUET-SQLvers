const defaultQuery = "show databases;";

const addSection = `
INSERT INTO sections
VALUEs(?, ?, ?, ?, ?, ?, ?, ?)
`;

// This query MUST avoid the section has been taken 
const getAllSections = `
SELECT courses.title, courses.credits, teachers.name, sections.* 
FROM sections inner join courses on sections.courseID = courses.courseID
inner join teachers on sections.teacherID = teachers.teacherID
WHERE sections.courseID
NOT IN (SELECT courseID FROM tooks WHERE studentID = ?)
`;

const getAllSectionsFullInfo = `
SELECT * FROM sections NATURAL JOIN courses
WHERE courseID
NOT IN (SELECT courseID FROM tooks WHERE studentID = ?)
`;

const getSectionById = `
SELECT * FROM sections
WHERE sectionID = ?;
`;

const updateSection = 
`UPDATE sections
SET
courseID = ?,
sectionID = ?,
location = ?,
day = ?,
start = ?,
end = ?,
teacherID = ?,
capacity = ?
WHERE courseID = ? and sectionID = ?;`;

const deleteSection = `
DELETE FROM sections
WHERE sectionID = ? 
AND courseID = ?;
`;

export {
  defaultQuery,
  addSection,
  getAllSections,
  getSectionById,
  updateSection,
  deleteSection,
  getAllSectionsFullInfo
};
