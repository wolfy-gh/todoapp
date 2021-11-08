import React, { useState, useEffect } from 'react'
import './Item.css'

function ItemTask({ id, description, isDone, deleteItem, doneTask, modifyItem }) {
    const [edit, setEdit] = useState(false)
    const [newinput, setNewInput] = useState("")
    const handleChange = (e) => {
       setNewInput(e.target.value)
    }
    useEffect(() => {
        setNewInput(description)
    }, [description])
    return (
        <div className="item">
            <p className={isDone ? `done` : null} >{description}</p>
            <div>
                <button onClick={() => doneTask(id)} className='btn-done'>{isDone ? "UnDone" : "Done"}</button>
                {edit ?
                    <button className='btn-edit' onClick={() => { modifyItem(id, newinput); setEdit(false) }} >Update</button> :
                    <button className='btn-edit' onClick={() => setEdit(true)} >Edit</button>
                }
                {edit ?
                    <input name="description" onChange={handleChange} value={newinput} className="edit_input" /> : null
                }
                <button className='btn-delete' onClick={() => deleteItem(id)}>Delete</button>
            </div>
        </div>
    )
}

export default ItemTask
