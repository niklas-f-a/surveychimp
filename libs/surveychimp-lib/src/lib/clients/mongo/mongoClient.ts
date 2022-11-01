
import mongoose from 'mongoose';

export const connect = async (): Promise<typeof mongoose> => {
    console.log('DATABASE_URL', process.env.DATABASE_URL)
    if (!process.env.DATABASE_URL) {
        throw "400";
    }
    return mongoose.connect(process.env.DATABASE_URL);
}