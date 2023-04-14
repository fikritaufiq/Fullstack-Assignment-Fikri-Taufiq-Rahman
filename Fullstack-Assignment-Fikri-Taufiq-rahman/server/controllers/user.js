const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models")

class Controller{
    static async login(req, res, next){
        try{
            const { email, password } = req.body;
            if(!email){
                throw {
                    name: "EMAIL_REQUIRED",
                    message: "Email or Password is required"
                }
            }

            if(!password){
                throw {
                    name: "PASSWORD_REQUIRED",
                    message: "Email or Password is required"
                }
            }

            const user = await User.findOne({
                where: {email}
            })

            if(!user){
                throw {
                    name: "EMAIL_INVALID",
                    message: "Email or Password is invalid"
                }
            }

            const passwordValidation = comparePassword(password, user.password)

            if(!passwordValidation){
                throw {
                    name: "PASSWORD_INVALID",
                    message: "Email or Password is invalid"
                }    
            }

            const access_token = createToken({ email: user.email })

            res.status(200).json({ access_token })
        }catch(error){
            next(error)
        }
    }

    static async register(req, res, next){
        try{
            const { name, email, password } = req.body

            const newUser = await User.create({ name, email, password })

            res.status(201).json({
                message: "User has been created",
                data: {
                    id: newUser.id,
                    name: newUser.name,
                    email: newUser.email
                }
            })

        }catch(error){
            next(error)
        }
    }
}

module.exports = Controller;