const { User } = require('../database/models');

const emailLogin = async ({number}) => {
    return await User.findOne({ where : {number}});
}

const authRepo = {
    emailLogin
}

module.exports = authRepo;