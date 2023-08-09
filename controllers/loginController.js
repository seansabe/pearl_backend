const User = require('../models/User');

const loginController = async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });

    if (user) {
        res.json({ success: true, message: 'Login successful', user: user });
        console.log(res);
    } else {
        res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
};

module.exports = { loginController }
