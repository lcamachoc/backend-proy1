import Cart from '../models/cart.model.js';

export const fetchCart = async (req, res) => {
    const { user_id } = req.query;
    try {
        const cart = await Cart.find({ user_id, state: true, bought: false }) ?? await Cart.create({ user_id });
        return res.status(200).json(cart);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const addToCart = async (req, res) => {
    const { product_id, user_id } = req.body;

    try {
        const cart = new Cart ({ user_id, product_id });
        await cart.save();
        return res.status(200).json(cart);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const removeFromCart = async (req, res) => {
    const { item_id } = req.query;

    try {
        const cart = await Cart.findByIdAndUpdate(
            { '_id': item_id },
            { $set: { state: false } },
        );
        return res.status(200).json(cart);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const buyCart = async (req, res) => {
    const { user_id } = req.body;
    try {
      const user = await User.findById(user_id);
      if (!user) return res.status(404).json({ message: 'User was not found.' });
  
      Cart.updateMany(
          { user_id, state: true },
          { $set: { state: false, bought: true } }
        ).exec();
  
      return message(res, "Cart purchased successfully.", 200, {});
    } catch (error) {
      console.log(error);
      return message(res, "Cart could not be purchased.", 500);
    }
  };