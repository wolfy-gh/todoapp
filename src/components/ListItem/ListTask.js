import React from 'react'
import Item from '../Item/ItemTask'

function ListTask({ todoFilter, deleteItem, doneTask,modifyItem}) {
    return (
        <div>
            {todoFilter.map(el => {
                return <Item key={el.id}
                    description={el.description}
                    id={el.id}
                    isDone={el.isDone}
                    deleteItem={deleteItem}
                    modifyItem={modifyItem}
                    doneTask={doneTask} />
            }
            )}
        </div>
    )
}

export default ListTask
