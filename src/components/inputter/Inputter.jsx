import './Inputter.css';

import checkedSign from '../../assets/checked-icon.png'
import plusSign from '../../assets/plus-sign.png'
const Inputter = () =>
{
    return (
        <div className='app-inputter-wrapper'>
            <div className='app-input-bar-container'>
                <img src={checkedSign} alt='checked sign'/>
                <input type='text' placeholder='Note' />
            </div>
            <button
             className='app-inputter-button'
             type='button' 
             >
                <img src={plusSign} alt='Plus sign' />
             </button>
        </div>
    )
}

export default Inputter;