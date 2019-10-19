
import React from 'react';

import BooksSvg from '../BooksSvg.js';
import '../Resources.css';

export default props => {

  return (
    <div className="resources-wrapper">

      <div className="resources-title-wrapper"> 
        <BooksSvg dimensions={props.dimensions} />
        <p className="resources-title">Groups</p>
      </div>

      <p>Two-n.com</p>
      <h4>Companies that sponsored OpenVis 2017 Conf</h4>
      <p>bocoup</p>
      <p>qlik playground</p>
      <p>datadog</p>
      <p>actblue</p>
      <p>edward tufte graphics press</p>
      <p>maps 4 news</p>
      <p>fjord</p>
      <p>info viz</p>
      <p>mlab</p>
      <p>policyviz</p>
    </div>
  );
};