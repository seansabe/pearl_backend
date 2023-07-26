const users = require('../constants');

const login = (req, res) => {
    const { email, password } = req.body;
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
        res.json({ success: true, message: 'Login successful', user });
    } else {
        res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
};

module.exports = { login }
