import Cart from '../models/cart.model.js';

export const fetchCart = async (req, res) => {
    const { user_id } = req.query;
    try {
        const cart = await Cart.find({ user_id, state: true, bought: false });
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
      await Cart.updateMany(
          { user_id, state: true },
          { $set: { state: false, bought: true } }
        ).exec();
  
      return res.status(200).json({});
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };