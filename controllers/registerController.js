const users = require('../constants');

const register = (req, res) => {
    const { firstName,
        lastName,
        address,
        phone,
        email,
        password } = req.body;

    if (firstName === undefined || lastName === undefined || address === undefined ||
        phone === undefined || email === undefined || password === undefined){
            res.json({ success: false, message: 'Fill the whole table, please'});
    }else{
        const user = users.find((u) => u.email === email);
        if (user) {
            res.json({ success: false, message: 'There is account with such email'});
        } else {
            const newUser = users.push({ firstName: firstName, 
                                         lastName: lastName, 
                                         address: address,
                                         phone: phone,
                                         email: email,
                                         password: password });
            res.json({ success: true, message: 'New user added', newUser });
        }
    }
};

module.exports = { register }
