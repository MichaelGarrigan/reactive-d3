
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { range } from 'd3-array';

import TitleBanner from '../titleBanner/TitleBanner.js';
import PieClass from "./PieClass";
import PieHooks from "./PieHooks";
import PieSVG from "./PieSVG";



import useElementSize from '../../../useElementSize.js';
// import version from './versionsPie.js';
import "./Pie3Versions.css";

const generateData = () =>
    range(5).map((item, index) => ({
      date: index,
      value: Math.random() * 100
    }));


export default props => {
  const [build, setBuild] = useState("svg");

  useEffect( () => {
    return () => props.setRoute([]);
  });


  return (
    <div className="pie-wrapper">  
      <TitleBanner title="3 Ways to Build in React" />                                                                  
      <div className="pie-summary-wrapper">
        <div className="pie-summary-title">Summary</div>
        <p className="pie-summary-p">
          React allows us several patterns to construct our components, so when we are displaying a d3 graphic in a React component we have choices.
        </p>
        <p className="pie-summary-p">
          Below we are providing a Class based component, a Functional Hook based component and a SVG based component.
        </p>
      </div>

      <div className="pie-button-group">
        <button 
          className={build === "class" ? "pie-button-active" : "pie-button"}
          onClick={() => setBuild("class")}
        >Class Based</button>
        <button 
          className={build === "hooks" ? "pie-button-active" : "pie-button"}
          onClick={() => setBuild("hooks")}
        >Hooks Based</button>
        <button 
          className={build === "svg" ? "pie-button-active" : "pie-button"}
          onClick={() => setBuild("svg")}
        >SVG Based</button>
      </div>

      {
        build === "class" 
          ? <PieClass data={generateData()} />
          : build === "hooks" 
            ? <PieHooks data={generateData()} />
            : build === "svg" 
              ? <PieSVG data={generateData()} />
              : "" 
      }
        
    </div>
  );
};