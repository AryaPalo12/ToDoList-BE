const { User } = require("../database/models");

const createUser = async ({ number, password }) => {
    return await User.create({
      number,
      password,
    });
  };

const checkDuplicateUser = async (number) => {
    return await User.findOne({
      where: { number: number },
    });
  };
  
const userRepo = {
    createUser,
    checkDuplicateUser
}

module.exports = userRepo;