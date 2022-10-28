
import mongoose from 'mongoose';

export const connect = async (): Promise<typeof mongoose> => {
    const connectionString = process.env.DATABASE_URL;
    if(typeof connectionString !== 'string'){
        throw Error('500')
    }
    return mongoose.connect(connectionString);
}