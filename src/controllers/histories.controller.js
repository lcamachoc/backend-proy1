import History from '../models/cart.model.js';

export const fetchHistory = async (req, res) => {
    const { user_id } = req.params;
    if (!user_id) return res.status(400).json({ message: 'User_id does not exist' });
    try {
        const histories = await History.find({ user_id, state: false, bought: true }).sort({ createdAt: -1});
        return res.status(200).json(histories);
    } catch (error) {
        return res.status(500).json({ error });
    }
};