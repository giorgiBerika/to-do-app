import './Inputter.css';

import checkedSign from '../../assets/checked-icon.png'
import plusSign from '../../assets/plus-sign.png'

import {ToDoLine } from '../../components'

const Inputter = ({toDoLines, setToDoLines}) =>
{
    const addClickHandler = () =>
    {
        const input = document.querySelector('.app-input-bar');
        let inputVal = input.value;

        const currentTime = new Date();
        const currentHour = currentTime.getHours();
        const currentMinutes = currentTime.getMinutes();
        
        {
        !(inputVal === '') 
        && 
        setToDoLines([...toDoLines, 
                    <ToDoLine
                        workHour={currentHour}
                        workMinute={currentMinutes}
                        toDoWork={inputVal} 
                        key={toDoLines.length}/>])
        
        }
        input.value = ''
        
    }
    return (
        <div className='app-inputter-wrapper'>
            <div className='app-input-bar-container'>
                <img src={checkedSign} alt='checked sign'/>
                <input 
                    className='app-input-bar' 
                    type='text' 
                    placeholder='Note' />
            </div>
            <button
             onClick={() => addClickHandler()}
             className='app-inputter-button'
             type='button' 
             >
                <img src={plusSign} alt='Plus sign' />
             </button>
        </div>
    )
}

export default Inputter;