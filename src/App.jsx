import { useState } from 'react'

import './App.css'

import {Header, Inputter, ToDoLine} from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='app-wrapper'>
        <h1 className='app-title'>todo</h1>
        <div className='app-inner-container'>
          <Header />
          <div className='app-toDo-container'>
            <Inputter />
            <div className='app-toDoLine-container'>
              <ToDoLine />
            </div>
          </div>

        </div>
    </div>
  )
}

export default App
