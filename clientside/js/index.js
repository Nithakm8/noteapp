
   async function getNotes(){
        const res=await fetch('http://localhost:3000/note')
        const {notes}=await res.json()
        console.log(notes);
        
        let str=''
        notes.forEach((noteapp)=>{
            str+=`
                 <div id="noteapps" class="noteapps flex flex-col border-1 rounded-lg p-1">
                <p class="title"><strong>Title:</strong>${noteapp.title}</p>
                <p class="desc"><strong>Description:</strong>${noteapp.desc}</p>
                <div class="btn flex gap-3">
                 <a href='../pages/edit.html?id=${noteapp._id}'><button class="edit bg-green-500 text-white font-bold w-18 rounded-lg m-2">Edit</button></a>
                <button onclick=deleteNote('${noteapp._id}') class="del bg-red-500 text-white font-bold w-18 rounded-lg m-2">Delete</button>
                </div>
                </div>
            `
        })
        document.getElementById('note').innerHTML=str
   } 
   getNotes()
   async function deleteNote(id){
    console.log(id);
    
    const res=await fetch(`http://localhost:3000/note/deleteNote/${id}`,{
        method:"DELETE"
    })
    const {msg}=await res.json()
    alert(msg)
    getNotes()
   }