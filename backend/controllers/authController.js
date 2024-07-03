const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req, res) => {
    

    try {
        let user = await User.findOne({ email:req.body.email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({ name:req.body.name, email:req.body.email, password:req.body.email });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(req.body.password, salt);
        const payload = {
            user: {
                id: user.id,
            },
        };

        let token = jwt.sign(
            payload,
            process.env.JWT_SECRET_KEY, 
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        )
        user.token = token
        await user.save();

        
    } catch (err) {
        console.error('Controller',err.message);
        res.status(500).send('Server error');
    }
};

const login = async (req, res) => {
    

    try {
        let user = await User.findOne({ email:req.body.email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const payload = {
            user: {
                id: user.id,
            },
        };

        let token = jwt.sign(
            payload,
            process.env.JWT_SECRET_KEY,
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        )
        user.token = token
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = { register, login };
