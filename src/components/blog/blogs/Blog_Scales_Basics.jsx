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

    <h3>!important</h3>
    <ol>
      <li>Calling the scaleLinear function returns a function.</li>
      <li>Many scales can operate in reverse with the .invert() method</li>
      <li>All the scales are pure functions.</li>
      <li></li>
      <li></li>
    </ol>


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

    <p>let linear_1 = scaleLinear().domain([0, 10]).range([0, 100])</p>
    <p><span>linear_1(0)</span><span className="lin-result">// returns 0</span></p>
    <p><span>linear_1(2)</span><span className="lin-result">// returns 20</span></p>
    <p><span>linear_1(5)</span><span className="lin-result">// returns 50</span></p>
    <p><span>linear_1(10)</span><span className="lin-result">// returns 100</span></p>

    <p>let linear_2 = scaleLinear().domain([-10, 0, 10]).range([100, 550, 1000])</p>
    <p><span>linear_2(-10)</span><span className="lin-result">// returns 100</span></p>
    <p><span>linear_2(0)</span><span className="lin-result">// returns 550</span></p>
    <p><span>linear_2(5)</span><span className="lin-result">// returns 775</span></p>
    <p><span>linear_2(10)</span><span className="lin-result">// returns 1000</span></p>

    <p>let linear_3 = scaleLinear().domain([0, 10]).range(['white', 'red'])</p>
    <p><span>linear_3(0)</span><span className="lin-result">// returns rgb(255, 255, 255)</span></p>
    <p><span>linear_3(2)</span><span className="lin-result">// returns rgb(255, 204, 204)</span></p>
    <p><span>linear_3(5)</span><span className="lin-result">// returns rgb(255, 128, 128)</span></p>
    <p><span>linear_3(10)</span><span className="lin-result">// returns rgb(255, 0, 0)</span></p>
  </div>
  
);