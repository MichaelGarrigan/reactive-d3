import React from 'react';
import './Banner.css';

export default ({title}) => (
  <div className="example-banner">
    {title}
    <div className="example-banner-left"></div>
    <div className="example-banner-right"></div>
  </div>
);