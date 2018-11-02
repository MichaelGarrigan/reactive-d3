import React from 'react';
import './Blog_Scales_Basics.css';

export default () => (

  <div className="blog-scales-wrapper">
    <div className="blog-main-title">D3 Scales -- A gentle introduction</div>
    <p className="blog-p">
      One of the major concepts in the D3 ecosystem is a scale. It will be extremely important to have a good understanding of what a scale is doing for you and how they work. Although the terminology that D3 uses around scales can seem intemidating the basic concept is quite simple to grasp.
    </p>
    <p className="blog-p">
      So what is a scale?
    </p>
    <p className="blog-p">
      At the most basic level a scale is transforming a piece of data into another piece of data. 
    </p>
    <p className="blog-p">
      I find a visualization is helpful here.
    </p>
    <p>Abstract Data</p>
    <p>||</p>
    <p>V</p>
    <p>.domain = [][][][][][][]</p>
    <p>||</p>
    <p>V</p>
    <p>.range = [][][][][][][]</p>
    <p>||</p>
    <p>V</p>
    <p>Visual Variable</p>
    <p>Most times we are plotting a point onto a graph so we use 2 scales. 
      One for the x axis (or x coordinate) and one for the y axis (or y coordinate).
    </p>
    <p>Most scales are bidirectional so you can invert the data from the 'visable variable'
      back to 'abstract data'
    </p>
    <p>clamping - will inform the scale on how to act when the data entered is out of the domains 'range'.
      By default this is set to false, so the whole scale can be set to .clamp(true) or just each instance of it.
    </p>
    <p>nice - will 'format' or round to a more readable number</p>
    <p>Scales are pure functions and will always return the same output for a given input and do not produce side
      effects or mutate the original state.
    </p>
    <p className="blog-p-standard">
      The scale has three main components: scale name, range, domain.
    </p>

    <p>.continuous scales like scaleLinear have these methods available to them: </p>
    <p>.invert, .domain, .range, .rangeRound, .clamp, .interpolate</p>

    <p></p>
  </div>
  
);