import React from 'react';
import './DigitalClock.css';

const Digit = ({number, width}) => {

  // split digit into tens place and ones place
  const tens = Math.floor(number / 10); 
  const ones = tens === 0 ? number : number % (tens * 10);

  const digitMap = [
    [1,1,1,1,0,1,1,0,1,1,0,1,1,1,1], // zero
    [0,0,1,0,0,1,0,0,1,0,0,1,0,0,1], // one
    [1,1,1,0,0,1,1,1,1,1,0,0,1,1,1], // two
    [1,1,1,0,0,1,1,1,1,0,0,1,1,1,1], // three
    [1,0,1,1,0,1,1,1,1,0,0,1,0,0,1], // four
    [1,1,1,1,0,0,1,1,1,0,0,1,1,1,1], // five
    [1,0,0,1,0,0,1,1,1,1,0,1,1,1,1], // six
    [1,1,1,0,0,1,0,0,1,0,0,1,0,0,1], // seven
    [1,1,1,1,0,1,1,1,1,1,0,1,1,1,1], // eight
    [1,1,1,1,0,1,1,1,1,0,0,1,0,0,1]  // nine
  ];
   
  return (
    <div className="digits">
      <div className="digit-grid">
        {
          digitMap[tens].map( (item, idx) => (
              <div
                key={item + '' + idx}
                className={ 
                  item === 1 
                    ? 'digital-clock-elem-active'
                    : 'digital-clock-elem'
                  }
              />
          ))
        }
      </div>
      <div className="digit-grid">
        {
          digitMap[ones].map( (item, idx) => (
              <div
                key={item + '' + idx}
                className={ 
                  item === 1 
                    ? 'digital-clock-elem-active'
                    : 'digital-clock-elem'
                  }
              />
          ))
        }
      </div>
    </div>
  )
};

export default Digit;