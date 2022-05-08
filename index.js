import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import users from './src/routes/users.routes.js';
import posts from './src/routes/posts.routes.js';
import carts from './src/routes/carts.routes.js';
import histories from './src/routes/histories.routes.js';
import reviews from './src/routes/reviews.routes.js';

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/cart', carts);
app.use('/history', histories);
app.use('/posts', posts);
app.use('/reviews', reviews);
app.use('/users', users);
app.get('/', (req, res) => {
    res.json({ message: 'API Mercadito' });
  });
  
const main = async () => {

    try {
        await mongoose.connect('mongodb+srv://lcamachoc:l1007171146@cluster0.0ofeh.mongodb.net/mercaditoDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(' Status: Connected');
    } catch (error) {
        console.error(' Error: An error occurred connecting to MongoDB');
        process.exit(1);
    }

    console.log('Status: Starting server...');

    app.listen(3001, () => {
        console.log(`Status: Server listening at port: ${3001}`);
    });

    process.on('SIGINT', async () => {
        console.log('Status: Closing connection...');
        await mongoose.disconnect();
        console.log(
            'Status: Connection is closed. State is: ${mongoose.connection.readyState}'
        ); process.exit(0);
    });
};

main();