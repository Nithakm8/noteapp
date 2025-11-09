import express from 'express'
import env from 'dotenv'
import noteRoutes from './routes/note.js'
import connection from './connection.js'
env.config()
const app=express()
app.use(express.static('../clientside'))
app.use(express.json())
app.use('/note',noteRoutes)
connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server started at http://localhost:${process.env.PORT}`);
        
    })
}).catch((err)=>{
    console.log(err);
    
})
