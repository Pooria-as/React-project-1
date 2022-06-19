import React from 'react'
import Fade from 'react-reveal/Fade';



class CountDown extends React.Component {
    state = {
        deadline: 'Nov, 20, 2022',
        days: '',
        hours: '',
        minutes: '',
        seconds: ''
    }
    CountDown = (deadLine) => {
        //conver to big int number
        const DeadLine = Date.parse(deadLine)
        const now = Date.parse(new Date);
        const Time = DeadLine - now;
        if (Time < 0) {
            console.log("Sorry the Event was Ended")
        }
        else {
            const days = Math.floor(Time / (1000 * 60 * 60 * 24));
            const hours = Math.floor((Time / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((Time / 1000 / 60) % 60);
            const seconds = Math.floor((Time / 1000) % 60);
            this.setState({
                days,
                hours,
                minutes,
                seconds
            })
        }
    }
    componentDidMount() {
        setInterval(() =>
            this.CountDown(this.state.deadline)
            , 1000);
    }

    render() {
        const { days, hours, minutes, seconds } = this.state
        return (
            <Fade left delay={1000}>
                <div className='countdown_wrapper'>
                    <div className='countdown_item'>
                        <div className='countdown_top'>
                            Event Time
                        </div>
                        <div className='countdown_bottom'>
                            <div className='countdown_item'>
                                <div className='countdown_time'>{days}</div>
                                <div className='countdown_tag'>Day</div>
                            </div>
                            <div className='countdown_item'>
                                <div className='countdown_time'>{hours}</div>
                                <div className='countdown_tag'>hour</div>
                            </div>
                            <div className='countdown_item'>
                                <div className='countdown_time'>{minutes}</div>
                                <div className='countdown_tag'>Minutes</div>
                            </div>
                            <div className='countdown_item'>
                                <div className='countdown_time'>{seconds}</div>
                                <div className='countdown_tag'>Seconds</div>
                            </div>
                        </div>

                    </div>

                </div>
            </Fade>)
    }
}

export default CountDown