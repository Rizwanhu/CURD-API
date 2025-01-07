import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
    try {
        const order = new Order({
            ...req.body,
            user: req.user._id
        });
        await order.save();
        res.status(201).json(order);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id })
            .populate('products.product');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}; 