const defaultQuery = "show databases;";

const addSection = "";

// This query MUST avoid the section has been taken 
const getAllSections = "SELECT * FROM sections WHERE courseID NOT IN (SELECT courseID FROM tooks WHERE studentID = ?)";

const getSectionById = "";

const updateSection = "";

const deleteSection = "";

export {
  defaultQuery,
  addSection,
  getAllSections,
  getSectionById,
  updateSection,
  deleteSection,
};
