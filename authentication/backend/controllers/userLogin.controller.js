import User from "../model/userSchema.js";
import bcrypt from 'bcrypt';
const registerUserCtrl = async (req,res)=>{
    try {
        const {username,email,password} = req.body;
        if(!username || !email || !password){
            res.status(400).json({
                success: 'false',
                message: 'All Fields are Necessary'
            });
        }
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success: false,
                message: 'Email is already registered',
            })
        }
        // Hash the Password
        const hashedPassword = await bcrypt.hash(password,10);

        const registerUser = await User.create({
            username,
            email,
            password:hashedPassword
        })

        if(!registerUser){
            return res.status(400).json({success: 'false',message: 'Something went wrong While Registering User'})
        }

        // Return the Registered User
        return res.status(200).json({
            success: true,
            message: 'User Registered Succesfully',
            data: registerUser,
        })
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
}
const loginUserCtrl = async (req,res)=>{
    try {
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                success: 'false',
                message: 'All Credentials are Necessary',
            })
        }

        const newUser = await User.findOne({email});
        // if(!newUser){
        //     return res.status(400).json({
        //         success: 'false',
        //         message: 'User Cannot be Found',
        //     })
        // }
        // If User Found Successfully
        return res.status(200).json({
            success: 'true',
            message: 'User Found Succesfully',
            data: newUser,
        })
        
    } catch (error) {
        console.log("Some Error Ocurred")
    }
}

const userDetailsCtrl = async(req,res) =>{
    try {
        const findUser = await User.find();
        if(!findUser){
            return res.status(200).json({
                success: 'false',
                message: "No Data Found",
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Data Found Succesfully',
            data: findUser
        })
    } catch (error) {
        
    }
} 

export {registerUserCtrl,loginUserCtrl,userDetailsCtrl}