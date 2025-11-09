import mongoose from 'mongoose'
const noteSchema=new mongoose.Schema({
    title:{type:String},
    desc:{type:String}
})
export default mongoose.model.note || mongoose.model('note',noteSchema)