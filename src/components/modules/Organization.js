
import React from 'react';

export default props => {
  const width = Math.round(props.dimensions.width * 0.12);
  
  return (
    <svg 
      width={width} height={width} 
      viewBox="0 0 499.99999 499.99999" 
      xmlns="http://www.w3.org/2000/svg" 
    >
      <defs>
        <linearGradient 
          id="linearGradient2473" 
          x1="2.4754" x2="485.17" y1="211.77" y2="217.47" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ffe375" offset="0"/>
          <stop stopColor="#ff876e" offset="1"/>
        </linearGradient>
      </defs>
      
      <g transform="matrix(1 0 0 1.3019 4.9508 -65.312)" fill="url(#linearGradient2473)" strokeWidth=".87643">
      <g fill="url(#linearGradient2473)" strokeWidth=".87643">
      <path 
        d="m177.3 76.95v111c0 6.8 5.5 12.3 12.3 12.3h43.2v33.4h-165c-6.8 0-12.3 5.5-12.3 12.3v43.9h-43.2c-6.8 0-12.3 5.5-12.3 12.3v111c0 6.8 5.5 12.3 12.3 12.3h111c6.8 0 12.3-5.5 12.3-12.3v-111c0-6.8-5.5-12.3-12.3-12.3h-43.3v-31.7h152.7v31.7h-43.2c-6.8 0-12.3 5.5-12.3 12.3v111c0 6.8 5.5 12.3 12.3 12.3h111c6.8 0 12.3-5.5 12.3-12.3v-111c0-6.8-5.5-12.3-12.3-12.3h-43.2v-31.7h152.7v31.7h-43.2c-6.8 0-12.3 5.5-12.3 12.3v111c0 6.8 5.5 12.3 12.3 12.3h111c6.8 0 12.3-5.5 12.3-12.3v-111c0-6.8-5.5-12.3-12.3-12.3h-43.2v-43.9c0-6.8-5.5-12.3-12.3-12.3h-165v-33.4h43.2c6.8 0 12.3-5.5 12.3-12.3v-111c0-6.8-5.5-12.3-12.3-12.3h-111c-6.7 0-12.2 5.5-12.2 12.3zm-66.3 323.8h-86.4v-86.5h86.4zm177.2 0h-86.5v-86.5h86.5zm177.2 0h-86.4v-86.5h86.5v86.5zm-263.6-311.6h86.5v86.5h-86.5z" 
        fill="url(#linearGradient2473)" 
        strokeWidth=".87643"
      />
      </g>
      </g>
    </svg>
  );
};
