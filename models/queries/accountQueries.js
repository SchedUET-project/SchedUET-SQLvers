const defaultQuery = "show databases;";

const getAllAccounts = `
select * from accounts; 
`;

const addAccount = `
insert into accounts
values (?, ?, ?);
`;

const updateAccount = `
update accounts
set
userID = ?,
password = ?,
isAdmin = ?
where userID = ?
`;

const deleteAccount = `
DELETE FROM accounts
WHERE userID = ?;
`;

export {
  defaultQuery,
  addAccount,
  getAllAccounts,
  updateAccount,
  deleteAccount,
};
