import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import config from './config';
import { bookRoutes } from './modules/book/book.route';

const app = express();

app.use(cors());
app.use(express.json());

app.use(bookRoutes)

app.get("/", (req, res) => {
    res.send({ success: true, message: "Server is running successfully" });
});

app.listen(config.port, () => {
    console.log(`🚀 Server is running on port ${config.port}`);
    server();
});

async function server() {
    try {
        await mongoose.connect(config.database_url);
        console.log('✅ Connected to the database successfully');
    } catch (error) {
        console.error('❌ Error connecting to the database:', error);
    }
}
