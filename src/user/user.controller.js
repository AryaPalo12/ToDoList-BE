const userServices = require('./user.services')

const createUser = async (req, res) => {
  console.log(req.body)
    const { number, password } = req.body;
    if(number < 1000 || number>9999){
      return res.status(400).json({message: 'Number input not correct'}) 
    }
    const createUser = await userServices.createUser({
        number,
        password,
      });
      if (createUser.message)
      {
        return res
          .status(400)
          .json({message: createUser.message});
      } 
      else {
        return res.status(200).json({ message: 'User created successfully' });
    }
};

const userControllers = {
    createUser,
}

module.exports = userControllers;