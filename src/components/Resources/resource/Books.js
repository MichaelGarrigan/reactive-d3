
import React from 'react';

import BooksSvg from '../BooksSvg.js';
import '../Resources.css';


export default props => {

  return (
    <div className="resources-wrapper">

      <div className="resources-title-wrapper"> 
        <BooksSvg dimensions={props.dimensions} />
        <p className="resources-title">Books</p>
      </div>

      <div className="resources-content-wrapper"> 
        <p className="resources-content-summary">
          When it comes time to consume information our choices are digital, audio, live lectures, video and physical. Although each has its advantages, nothing satisfies like the weight of a book with glossy pictures and the feel and smell of the pages. So put the laptop aside for a couple of hours and pick up a book.
        </p>

        <div className="resource-item-wrapper"> 
          <a href="https://www.amazon.com/Storytelling-Data-Visualization-Business-Professionals/dp/1119002257" className="resource-link">
            <p>Storytelling with Data</p>
          </a>
          <ul className="resource-ul">
            <li>Fundamentals of data visualization</li>
            <li>storytellingwithdata.com</li>
          </ul>
        </div>

        <div className="resource-item-wrapper"> 
          <a href="https://www.amazon.com/Functional-Art-introduction-information-visualization/dp/0321834739/ref=pd_sbs_14_2/142-6594327-2671628?_encoding=UTF8&pd_rd_i=0321834739&pd_rd_r=911e8698-f735-4436-bf84-be011108e760&pd_rd_w=tyWvF&pd_rd_wg=LJBFc&pf_rd_p=52b7592c-2dc9-4ac6-84d4-4bda6360045e&pf_rd_r=EHG37AD3D1ZYVBCFWKA7&psc=1&refRID=EHG37AD3D1ZYVBCFWKA7" className="resource-link">
            <p>The Functional Art</p>
          </a>
          <ul className="resource-ul">
            <li>by Alberto Cairo</li>
            <li>Covers all aspects of information graphics</li>
          </ul>
        </div>

      
      </div>
    </div>
  );
};