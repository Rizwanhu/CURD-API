import express from "express";

import productRoutes from './routes/products.js';
import userRoutes from './routes/users.js';
import orderRoutes from './routes/orders.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api', orderRoutes);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});