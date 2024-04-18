

// validation.js

const validateRegistration = (req, res, next) => {
    const { username, email, password, gender } = req.body;

    // Check if all required fields are provided
    if (!username || !email || !password) {
        return res.status(400).json({ status: "failed", error: "Username,password and email Are Required" });
    }

    // Check if the password meets minimum length requirement
    if (password.length < 8) {
        return res.status(400).json({ status: "failed", error: "Password must be at least 8 characters long" });
    }

    // Email validation using regular expression
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ status: "failed", error: "Invalid email format" });
    }

    // Gender validation
    const allowedGenders = ['male', 'female', 'other'];
    if (gender && !allowedGenders.includes(gender.toLowerCase())) {
        return res.status(400).json({ status: "failed", error: "Invalid gender value" });
    }

    // If all validations pass, move to the next middleware
    next();
};

module.exports =  validateRegistration ;
