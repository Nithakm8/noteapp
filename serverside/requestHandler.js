import noteSchema from './models/note.model.js'
export async function getNotes(req,res){
    try{
        const notes=await noteSchema.find()
        console.log(notes); 
        return res.status(200).json({notes,msg:'All notes received'})
     }
     catch(err){
        return res.status(500).send('Internal server error')
     }
}
export async function addNote(req,res){
    try{
        console.log(req.body,'data');
        
        const {...note}=req.body
        console.log(note);
        const data=await noteSchema.create({...note})
        console.log(data);
        
        return res.status(200).send('index page')
        // return res.status(200).json({notes,msg:'All notes received'})
     }
     catch(err){
        return res.status(500).send('Internal server error')
     }
}
export async function getNote(req,res){
   try{
      const _id=req.params.id
      const note=await noteSchema.findOne({_id})
      return res.status(200).json({msg:'note retreived',note})
   }
    catch(error){
        console.log(error);
        
         return res.status(500).send('Internal Server Error')
    }
}

export async function editNote(req,res){
   try{
       const _id=req.params.id
       console.log(_id,'id');
       
        const {...notes}=req.body
        const data=await noteSchema.updateOne({_id},{$set:{...notes}})
      console.log(data);
      
       return res.status(200).json({msg:'note updated',notes})
   }
    catch(error){
        console.log(error);
        
         return res.status(500).send('Internal Server Error')
    }
}
export async function deleteNote(req,res){
    try{
        console.log('delete');
        
    const _id=req.params.id
    console.log(_id);
    
    const data=await noteSchema.deleteOne({_id})
    return res.status(200).json({msg:'note deleted'})
    }
    catch(err){ 
        console.log(err);
        
         return res.status(500).send('Internal Server Error')
    }
}