const defaultQuery = "show databases;";

const getMaterial = `
select * from studyMaterials
`

;

const updateMaterial = `
UPDATE studyMaterials
SET
courseID = ?,
materialID = ?,
name = ?,
link = ?,
courseTitle = ?,
author = ?,
publisher = ?,
publishYear = ?
WHERE materialID = ?;
`;

const addMaterial = `
INSERT INTO studyMaterials
VALUES (?, ?, ?, ?, ?, ?, ?, ?);
`;

const deleteMaterial = `
DELETE FROM studyMaterials
WHERE materialID = ?;
`;

export {
  defaultQuery,
  getMaterial,
  updateMaterial,
  addMaterial,
  deleteMaterial,
};
