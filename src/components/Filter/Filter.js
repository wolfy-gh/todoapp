import React from 'react'
import './Filter.css'

function Filter({setFilter}) {
    const handleChange =(e) => {
        setFilter(e.target.value)
    }

    return (
        <div className="filter">
            <select onChange={handleChange}>
                <option value="all">All</option>
                <option value="done">Done</option>
                <option value="notdone">To Do</option>
            </select>
        </div>
    )
}

export default Filter
