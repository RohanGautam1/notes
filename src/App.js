import './App.css';
import { useState } from "react"
import { isDisabled } from '@testing-library/user-event/dist/utils';


const App = ()=>{
  const [data, setData] = useState('')
  const [note, setNote] = useState([])
  const [modal, setModal] = useState([])
  const [editId,setEditId]=useState(null)

  const onchange = (e)=>{
    setData(e.target.value)
  }

  const AddNote = ()=>{
    setNote([...note, data]);
    setData("")
  }

  const DeleteNote = (id)=>{
    console.log(id);
    setNote(
      note.filter((data,index)=>{
        return(
          index !== id
        )
      })
    )
  }

  const EditBtn = (id)=>{
    setEditId(id)
    setModal(
      note.filter((data,index)=>{
        return(
          index === id
        )
      })
    )
  }

  const save = (id)=>{
    const newData = setNote(note.map((data,index)=>{
      if(index === editId){
        // setNote(newData)
        return (modal);
      }
      else{
        return data
      }
      
    }))
    setEditId(null)
    
  }

  const editNote = (e)=>{
    setModal(e.target.value)
  }
  console.log(data?.length);
  return(
<div className='container mt-4'> 
  <div className="inputAndBtn d-flex flex-column mb-4">
<textarea className='add-note-input rounded-2' type="text" rows="5" onChange={onchange} value={data} />
<button className="btn btn-primary col-md-4 offset-md-4 mt-4" disabled={data?.length===0?isDisabled:null} onClick={AddNote}>Add Note</button>

  </div>

<ol>
{
  note.map((data,index) =>{
    return(
      <div id={index} key={index}>
      <li>{data}</li>
      <button className="btn btn-sm me-2 btn-danger" onClick={()=>DeleteNote(index)}>Delete</button>
      <button className="btn btn-sm me-2 btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>EditBtn(index)}>Edit</button>
      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleMo console.log(id)dalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input className="border-0" type="text" value={modal} onChange={editNote} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>save(index)}
              >Save changes</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  })
}
</ol>
</div>
  )
}

export default App

























