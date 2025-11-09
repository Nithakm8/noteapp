const urlParams=new URLSearchParams(window.location.href.split('?')[1])
console.log(urlParams);
const id=urlParams.get('id')
async function getNote(){
    const res=await fetch(`http://localhost:3000/note/getNote/${id}`)
     const {note}=await res.json()
     document.getElementById('title').value=note.title
     document.getElementById('desc').value=note.desc
}
getNote()
document.getElementById('editnote').addEventListener('submit',async(e)=>{
    e.preventDefault()
    const notes={
        title:document.getElementById('title').value,
        desc:document.getElementById('desc').value
    }
    const res=await fetch(`http://localhost:3000/note/editNote/${id}`,{
        method:"PUT",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(notes)
    })
      const result=await res.json()
        alert(result.msg)
    window.location.href='../'
})

