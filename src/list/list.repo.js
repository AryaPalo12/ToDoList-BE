const { List } = require("../database/models");

const getList = async ( user_id ) => {
  return await List.findAll({
    where:{
      user_id
    }
  });
}

const createToDoEntry = async ({ texts, user_id }) => {
    return await List.create({
      texts,
      user_id,
    });
  };

const deleteToDoList = async (id) => {
    return await List.destroy({
      where: { id },
    });
  };
  
const listRepo = {
    createToDoEntry,
    deleteToDoList,
    getList
}

module.exports = listRepo;