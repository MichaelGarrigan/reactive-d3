
import React from 'react';
import './LinkedListEditor.css';

const LinkedListElement = ({value, size, offset}) => (
  <g>
    <rect // outter shell of the element
      x={offset[0]}
      y={offset[1]}
      width={size}
      height={size}
      fill='lightgray'
      stroke='steelblue'
      strokeWidth='6'
    />
    <text 
      className='ll-text'
      x={offset[0] + 25}
      y={offset[1] + 40}
      stroke='steelblue'
    >
      {value}
    </text>
    <circle // larger circle
      cx={offset[0] + (size * 0.75)}
      cy={offset[1] + (size * 0.75)}
      r='10'
      fill='steelblue'
    />
    <circle // smaller circle
      cx={offset[0] + (size * 0.75)}
      cy={offset[1] + (size * 0.75)}
      r='4'
      fill='lightgray'
    />
    <path
      stroke='steelblue'
      strokeWidth='6'
      d={
        `M${offset[0] + (size * 0.75) + 10}, ${offset[1] + (size * 0.75)}
         L${offset[0] + (size * 0.75) + 10 + 80}, ${offset[1] + (size * 0.75)}
        `
      }
    />
    <path
      fill='steelblue'
      stroke='steelblue'
      d={
        `M${offset[0] + (size * 0.75) + 10 + 80 + 10}, ${offset[1] + (size * 0.75)}
         L${offset[0] + (size * 0.75) + 10 + 80 + 10 - 30}, ${offset[1] + (size * 0.75) - 20}
         ${offset[0] + (size * 0.75) + 10 + 80 + 10 - 30}, ${offset[1] + (size * 0.75) + 20} Z
        `
      }

    />
  </g>
);

export default LinkedListElement;
  
