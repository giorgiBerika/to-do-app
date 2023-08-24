import { useState } from 'react'

import './App.css'

import {Header, Inputter, ToDoLine} from './components';

function App() {
  const [toDoLines, setToDoLines] = useState([]);

  return (
    
    <div className='app-wrapper'>
        <h1 className='app-title'>todo</h1>
        <div className='app-inner-container'>
          <Header />
          <div className='app-toDo-container'>
            <Inputter 
              toDoLines={toDoLines}
              setToDoLines={setToDoLines}
              />
            <div className='app-toDoLine-container'>
              {toDoLines.map((line) => {
                return (line)
              })}
            </div>
          </div>

        </div>
    </div>
  )
}

export default App
