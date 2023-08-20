const getUsers = () => `SELECT * FROM crud`;

const createUser = (id, name, old) =>
  `INSERT INTO crud (id, name, old) VALUES ("${id}", "${name}", ${old})`;

const removeUser = (id) => `DELETE FROM crud WHERE id = "${id}"`;

const updateUser = (id, name, old) =>
  `UPDATE crud SET name = "${name}", old = ${old} WHERE id = "${id}" `;

module.exports = { getUsers, createUser, removeUser, updateUser };
