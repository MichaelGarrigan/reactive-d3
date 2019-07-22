import React, { useState, useLayoutEffect } from 'react';
import TitleBanner from '../titleBanner/TitleBanner.js';
import DigitalClockDigit from './DigitalClockDigit.js';

import './DigitalClock.css';

const DigitalClock = props => {

  const [time, setTime] = useState({
    hour: '12',
    minute: '00',
    second: '00',
    amPm: 'am'
  });

  let timer;

  useLayoutEffect( () => {
    timer = setInterval(() => tick(), 1000)
    return () => { clearInterval(timer); props.setRoute([]); }
  }, [] );

  const parseCurrentTime = (timeString) => {
    let splitTime = timeString.split(' ');
    let splitHrMinSec = splitTime[0].split(':');
    
    return {
      hour: splitHrMinSec[0],
      minute: splitHrMinSec[1],
      second: splitHrMinSec[2],
      amPm: splitTime[1]
    }
  } 
  
  const tick = () => {
    let current = new Date().toLocaleTimeString();

    setTime(parseCurrentTime(current));
  } 
  
  const dimensions = {
    height: 125,
    width: 100
  };

  return (
    <div className="digital-clock-wrapper">
      <TitleBanner title="Digital Clock" />
      <div className="digit-flex">
        <DigitalClockDigit 
          number={
            time.hour.length === 1 
              ? 0 
              : +time.hour[0]
          } 
          dimensions={dimensions}
        />
        <DigitalClockDigit 
          number={
            time.hour.length === 1 
              ? +time.hour[0]
              : +time.hour[1]
          } 
          dimensions={dimensions}
        />
        <DigitalClockDigit 
          number={+time.minute[0]} 
          dimensions={dimensions}
        />
        <DigitalClockDigit 
          number={+time.minute[1]} 
          dimensions={dimensions}
        />
        <DigitalClockDigit 
          number={+time.second[0]} 
          dimensions={{height: 75, width: 100}}
        />
        <DigitalClockDigit 
          number={+time.second[1]} 
          dimensions={{height: 75, width: 100}}
        />
      </div>
    </div>
  )
}

export default DigitalClock;

// export default class DigitalClock extends Component {
//   state = {
//     time: {
//       hour: '12',
//       minute: '00',
//       second: '00',
//       amPm: 'am'
//     }
//   };
//   componentDidMount = () => {
//     this.timer = setInterval(() => this.tick(), 1000);
//   }
//   componentWillUnmount = () => {
//     clearInterval(this.timer);
//   }

//   parseCurrentTime = (timeString) => {
//     let splitTime = timeString.split(' ');
//     let splitHrMinSec = splitTime[0].split(':');
    
//     return {
//       hour: splitHrMinSec[0],
//       minute: splitHrMinSec[1],
//       second: splitHrMinSec[2],
//       amPm: splitTime[1]
//     }
//   } 
  
//   tick = () => {
//     let current = new Date().toLocaleTimeString();

//     this.setState({
//       time: this.parseCurrentTime(current)
//     })
//   } 
  
//   render() {
//     const dimensions = {
//       height: 125,
//       width: 100
//     };
//     console.log(new Date().toLocaleTimeString())
//     return (
//       <div className="digital-clock-wrapper">
//         <TitleBanner title="Digital Clock" />
//         <div className="digit-flex">
//           <DigitalClockDigit 
//             number={
//               this.state.time.hour.length === 1 
//                 ? 0 
//                 : +this.state.time.hour[0]
//             } 
//             dimensions={dimensions}
//           />
//           <DigitalClockDigit 
//             number={
//               this.state.time.hour.length === 1 
//                 ? +this.state.time.hour[0]
//                 : +this.state.time.hour[1]
//             } 
//             dimensions={dimensions}
//           />
//           <DigitalClockDigit 
//             number={+this.state.time.minute[0]} 
//             dimensions={dimensions}
//           />
//           <DigitalClockDigit 
//             number={+this.state.time.minute[1]} 
//             dimensions={dimensions}
//           />
//           <DigitalClockDigit 
//             number={+this.state.time.second[0]} 
//             dimensions={{height: 75, width: 100}}
//           />
//           <DigitalClockDigit 
//             number={+this.state.time.second[1]} 
//             dimensions={{height: 75, width: 100}}
//           />
//         </div>
        
//       </div>
//     )
//   }
// }
