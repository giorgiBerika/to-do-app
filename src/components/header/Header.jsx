import './Header.css';



const Header = () =>
{

    return (
        <div className='app-header-wrapper'>
            <div className='app-header-date-wrapper'>
                <div className='app-date-day-num'>
                    <span className='app-date-day'>thur</span>
                    <span className='app-date-num'>9</span>
                </div>
                <div className='app-date-time-am-pm'>
                    <span className='app-date-time'></span>
                    <span className='app-date-am-pm'>am</span>
                </div>
            </div>
        </div>
    )
};

 const setClock = () =>
    {   
        const hourHtml = document.querySelector('.app-date-time');
        const weekDay= document.querySelector('.app-date-day');
        const dayNum = document.querySelector('.app-date-num');
        const amPm = document.querySelector('.app-date-am-pm');
        let weekDaysArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

        const currentTime = new Date();
        let currentMinute = currentTime.getMinutes();
        let currentHour = currentTime.getHours();
        let currentDay = currentTime.getDay();

        let fullTimer = `${currentHour} : ${currentMinute}`;

        hourHtml.innerHTML = fullTimer;
        dayNum.innerHTML = currentDay;
        weekDay.innerHTML = weekDaysArray[currentDay].substring(0, 4);
        amPm.innerHTML = (currentHour < 12) ? "AM" : "PM";
    }
    setInterval(() =>
    {
        setClock();
    }, );

export default Header;