import './ToDoLine.css';

import { useState } from 'react';

import checkedSign from '../../assets/checked-icon.png'
import unCheckedSign from '../../assets/unChecked-icon.png'

import trashCan from '../../assets/trash-can-icon.png'
const ToDoLine = () =>
{
    const [signClicked, setSignClicked] = useState(false);

    const checkerClickHandler =() =>
    {
        setSignClicked(!signClicked);
    }

    return (
        <div className='to-do-line-wrapper'>
            <div className='to-do-line-left'>
                <h3>dinner</h3>
                <span>today at 8:00 pm</span>
            </div>
            <div className='to-do-line-right'>
                <img 
                    onClick={() => checkerClickHandler()}
                    src={(signClicked) ? checkedSign : unCheckedSign} 
                    alt='check sign'/>
                <img 
                    src={trashCan}
                    alt='Trash can icon'/>
            </div>
        </div>
    )
}

export default ToDoLine;