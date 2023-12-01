import { query } from "express";

const defaultQuery = "show databases;";

const getType = {
  0: "courseID",
  1: "materialID",
  2: "name",
  3: "courseTitle",
  4: "author",
  5: "publisher",
  6: "publishYear"
}

function getMaterial(type){
  let query = "SELECT * FROM studyMaterials WHERE LOWER("
  let isFirst = false;
  type.forEach(val => {
    if(isFirst == false){
      isFirst = true
      query += getType[val] + ") LIKE ?";
    }else{
      query += " OR LOWER(" + getType[val] + ") LIKE ?";
    }
  });
  return query;
}

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
