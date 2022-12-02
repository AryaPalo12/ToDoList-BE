const authServices = require('./auth.services')

const emailLogin = async (req,res) => {
    const{number,password} = req.body;
    const numberLogin = await authServices.emailLogin({number,password});
    if(numberLogin.message)
    {
        return res.status(400).json({message: emailLogin.message});
    }
    else{
        return res.status(200).json(numberLogin)
    };
};

const authController = {
    emailLogin,
}

module.exports = authController;