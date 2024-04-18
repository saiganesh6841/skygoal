

const users=require('../model/user')
const bcrypt=require("bcrypt")
const jwt=require('jsonwebtoken')
const SECRET_KEY=process.env.SECRET_KEY

const userController={

    userRegister: async(req,res)=>{
        try{

            const {username,email,password,gender,fullname}=req.body

        const existingUser = await users.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ status: "failed", error: "Email or username already exists" });
        }

             // hashing  the password
             const hashedPassword = await bcrypt.hash(password, 10);
      
             // Updating the password with hassed
             const userDetails = await users.create({ username, email, password: hashedPassword, gender,fullname });
             res.status(201).json({ message: 'User registered successfully', userDetails });
        }
        catch(error){
         console.log(error)
         res.status(500).json({ status: "failed", error});
        }

    },

    userLogin: async(req,res)=>{
        try{
           const {username,password}=req.body

           if(!username || !password){
            return res.status(400).json({ status: "failed", error: "username & password Are Required" });
        }

        const login=await users.findOne({username})

        if(!login || !(await bcrypt.compare(password, login.password))){
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        // generating jwt token
        const token=jwt.sign({username:username},SECRET_KEY, { expiresIn: '3h' })
        res.status(200).json({ message: 'Login successful', token });
        }
        catch(error){
         console.log(error)
         res.status(500).json({ status: "failed", error});
        }
    },
    getUserDetails: async (req, res) => {
        try {
           
            const username = req.user.username
            // getting user details from the database
            const userDetails = await users.findOne({username});
            console.log(userDetails)

            if (!userDetails) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json({ message: 'User details retrieved successfully', userDetails });
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 'failed', error });
        }
    }
}

module.exports=userController