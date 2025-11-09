import mongoose from 'mongoose'
export default async function connection(){
    try{
        const db=await mongoose.connect(process.env.DB_URL+process.env.DB_NAME)
        console.log('Database connected');
        return db;
    }
    catch(error){
        return 'Database connection failed'

    }
} 