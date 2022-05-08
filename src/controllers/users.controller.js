import User from '../models/user.model.js';

export const fetchUser = async (req, res) => {
    const { user_id } = req.query;
    if (!user_id) return res.status(400).json({ message: 'User_id does not exist' });

    try {
        const user = await User.findById(user_id);
        if (!user) return res.status(404).json({ message: 'User was not found' });

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const register = async (req, res) => {
    const { display_name, username, password } = req.body;
    try {
        const user = await User.create({ display_name, username, password });
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(404).json({ message: 'User not found' });
        if (user.password !== password) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const prevLogin = async (req, res) => {
    const { user_id } = req.body;
    if (!user_id) return res.status(400).json({ message: 'User_id does not exist' });

    try {
        const user = await User.findById(user_id);
        if (!user) return res.status(404).json({ message: 'User was not found' });
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ error });
    }
};