const defaultQuery = "show databases;";

const addSection = `INSERT INTO sections
                    VALUEs(?, ?, ?, ?, ?, ?, ?, ?, ?)`;

// This query MUST avoid the section has been taken 
const getAllSections = "SELECT * FROM sections WHERE courseID NOT IN (SELECT courseID FROM tooks WHERE studentID = ?)";

const getSectionById = `SELECT * FROM sections
                        WHERE sectionID = ?;`;

const updateSection = `UPDATE sections
                       SET sectionId = ?,
                       courseID = ?,
                       location = ?,
                       day = ?,
                       start = ?,
                       end = ?,
                       teacher = ?,
                       capacity= ?;`;

const deleteSection = `DELETE FROM sections
                       WHERE sectionID = ? 
                             AND courseID = ?;`;

export {
  defaultQuery,
  addSection,
  getAllSections,
  getSectionById,
  updateSection,
  deleteSection,
};
