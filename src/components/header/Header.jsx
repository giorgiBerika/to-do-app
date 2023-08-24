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
                    <span className='app-date-time'>6:23</span>
                    <span className='app-date-am-pm'>am</span>
                </div>
            </div>
        </div>
    )
}

export default Header;