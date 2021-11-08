import './App.css';
import List from './components/ListItem/ListTask'
import Add from './components/Add/Add'
import Filter from './components/Filter/Filter'
import { useState, useEffect } from 'react';

function App() {
  const [todo, setTodo] = useState([])
  const [filter, setFilter] = useState("all")
  const [todoFilter, setTodoFilter] = useState([])


  // FILTER FUNCTION
  useEffect(() => {
    switch (filter) {
      case 'done':
        setTodoFilter(todo.filter(todo => todo.isDone === true))
        break;
      case 'notdone':
        setTodoFilter(todo.filter(todo => todo.isDone === false))
        break;
      default:
        setTodoFilter(todo)
        break;
    }
  }, [todo, filter])

  // ADD FUNCTION 
  const addDescription = (todo) => {
    if (todo !== "")
      setTodo(prev => { return [...prev, { id: Math.random() * 1000, description: todo, isDone: false }] })
  }
  console.log(todo)
  // DELETE FUNCTION
  const deleteItem = (id) => {
    setTodo(todo.filter(el => el.id !== id))
  }

  //MODIFY FUNCTION 
  const modifyItem = (id, newinput) => {
    setTodo(todo.map(el => el.id === id ? { ...el, description: newinput } : el))

  }

  // ISDONE FUNCTION 
  const doneTask = (id) => {
    setTodo(todo.map(el => el.id === id ? { ...el, isDone: !el.isDone } : el))

  }
  return (
    <div className="App">
      <div className="header">
        <Add addDescription={addDescription} />
        <Filter setFilter={setFilter} />
      </div>
      <div className="content">
        <List todoFilter={todoFilter} deleteItem={deleteItem} doneTask={doneTask} modifyItem={modifyItem} />
      </div>
    </div>
  );
}

export default App;
