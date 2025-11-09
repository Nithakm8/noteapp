document.getElementById('addnote').addEventListener('submit',async(e)=>{
    e.preventDefault()
    console.log('Form submitted');
    let note={
        title:document.getElementById('title').value,
        desc:document.getElementById('desc').value
    }
    try{
        const res=await fetch('http://localhost:3000/note/add',{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(note)
        })
    }
    catch(err){
        console.log(err);
        
    }
    window.location.href='../'
    
})