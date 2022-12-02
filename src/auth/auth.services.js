
const bcrypt = require('bcrypt');
const authRepo = require('./auth.repo');
const jwt = require('jsonwebtoken');

const emailLogin = async({number, password}) => {
    const userData = await authRepo.emailLogin({number});
    if (!userData) 
    {
        return {message: 'User not found.'}
    }
    else
    {
        //comparing password 
        const passwordCompare = await bcrypt.compare(password, userData.password);

        if(passwordCompare)
        {
            const token = await jwt.sign({
                id: userData.id,
                number: userData.number,
            }, 'NOINWI16516516d5f16s51f5ONRW',
            {expiresIn: '1d'}
            );
            return {
                accessToken : token,
                id: userData.id,
                number: userData.number,
            }
        }
        else{
            return {message: 'Wrong Password.'} 
        }
        }
        
    };

const authServices = {
    emailLogin
}

module.exports = authServices;



