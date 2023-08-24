import './ToDoLine.css';

import { useState } from 'react';

import checkedSign from '../../assets/checked-icon.png'
import unCheckedSign from '../../assets/unChecked-icon.png'

import trashCan from '../../assets/trash-can-icon.png'
const ToDoLine = (props) =>
{
    const [signClicked, setSignClicked] = useState(false);

    const checkerClickHandler =() =>
    {
        setSignClicked(!signClicked);
    }
    const trashClickHandler = (e) =>
    {   
        const img = e.target;

        const parentLineWrapper = img.closest('.to-do-line-wrapper');

        parentLineWrapper.style.display = 'none';
    }

    return (
        <div className='to-do-line-wrapper' >
            <div className='to-do-line-left'>
                <h3>{props.toDoWork}</h3>
                <span>today at  {props.workHour}:{props.workMinute}  {(props.workHour < 12) ? 'am' : 'pm'}</span>
            </div>
            <div className='to-do-line-right'>
                <img 
                    onClick={() => checkerClickHandler()}
                    src={(signClicked) ? checkedSign : unCheckedSign} 
                    alt='check sign'/>
                <img 
                   
                    onClick={(e) => trashClickHandler(e)}
                    src={trashCan}
                    alt='Trash can icon'/>
            </div>
        </div>
    )
}

export default ToDoLine;