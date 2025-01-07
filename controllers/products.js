import Product from '../models/Product.js';

// Get all products with optional filters
export const getProducts = async (req, res) => {
    try {
        const filters = {};
        if (req.query.category) filters.category = req.query.category;
        if (req.query.search) {
            filters.name = { $regex: req.query.search, $options: 'i' };
        }
        const products = await Product.find(filters);
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new product (admin only)
export const createProduct = async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ error: 'Admin access required' });
        }
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
