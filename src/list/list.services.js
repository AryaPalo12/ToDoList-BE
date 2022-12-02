const listRepo = require("./list.repo");

const createToDoEntry = async ({ texts, user_id }) => {
  return await listRepo.createToDoEntry({ texts, user_id });
};

const deleteToDoList = async ({ id }) => {
    const deletedEntry = await listRepo.deleteToDoList(id);
    if (deletedEntry == 1) {
        return { message: "Entry deleted successfully."};
      } else {
        return { status : 400, message: "Failed to delete entry." };
      }
}

const getList = async ( user_id ) => {
  try {
    const userList = await listRepo.getList( user_id );
    return userList;
  } catch (e) {
    return { message: "Something went wrong while finding entry." };
  }
};

const listServices = {
  createToDoEntry,
  deleteToDoList,
  getList,
};

module.exports = listServices;