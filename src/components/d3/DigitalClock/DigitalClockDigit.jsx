import React from 'react';
import './DigitalClock.css';

const DigitalClockDigit = ({number, dimensions}) => {
  const styles = {
    height: dimensions.height,
    width: dimensions.width
  };

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
    <div 
      className="digital-clock-digit"
      style={styles}
    >
      <div className="digit-grid">
        {
          digitMap[number].map( (item, idx) => {
            return (
              <div
                key={item + '' + idx}
                className={ 
                  item === 1 
                    ? 'digital-clock-elem-active'
                    : 'digital-clock-elem'
                  }
              />
            )
          })
        }
      </div>
    </div>
  )
};

export default DigitalClockDigit;