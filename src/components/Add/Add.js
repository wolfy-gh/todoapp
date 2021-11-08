import React, { useState } from 'react'
import './Add.css'

function Add({addDescription}) {
    const [input , setInput] = useState("")
    const handleChange = (e) => {
        setInput(()=> { return [e.target.name]=e.target.value})
    }
    const addDesc = (e)=> {
        e.preventDefault()
        addDescription(input)
        setInput("")
    }

    return (
        <div className="add">
            <form>
                <input type='text' name='description' value={input} onChange={handleChange} placeholder="What to do ??"/>
                <button type="submit" className="btn" onClick={addDesc}>Add</button>
            </form>
        </div>
    )
}

export default Add
