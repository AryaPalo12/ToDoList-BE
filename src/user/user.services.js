const bcrypt = require("bcrypt");
const userRepo = require("./user.repo");
const salt = 10;

const createUser = async ({ number, password }) => {
    const hashedPassword = await bcrypt.hash(password, salt);
    const checkDuplicate = await userRepo.checkDuplicateUser(number);
    if (!checkDuplicate) {
      const createdUser = await userRepo.createUser({
        number,
        password: hashedPassword,
      });
      return createdUser;
    } else {
        return {
            message: 'This number has been used before.'
        }
    };
  };

  const authServices = {
    createUser,
  }

  module.exports = authServices;