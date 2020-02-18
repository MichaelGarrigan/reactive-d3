
import React, { useState, useEffect } from 'react';

import { range } from 'd3-array';
import { randomUniform } from 'd3-random';
import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { curveStep, line } from 'd3-shape';
import './Home.css';


export default ({ dimensions }) => {

  const [width, setWidth] = useState(dimensions.width);
  const [height, setHeight] = useState(dimensions.height);

  const [lineDarkData, setLineDarkData] = useState(range(8).map(d => ({ "y": randomUniform(1)() })));
  const [lineMedData, setLineMedData] = useState(range(15).map(d => ({ "y": randomUniform(1)() })));
  const [lineLightData, setLineLightData] = useState(range(30).map(d => ({ "y": randomUniform(1)() })));
  const [yellowRect, setYellowRect] = useState('');

  const [verbs] = useState(["Exploring", "Hacking", "Building"]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log('cycle: ', index, verbs[index % 3])
    let cycle = () => { setIndex(index + 1); };

    let interval = setInterval(cycle, 4000);

    return () => clearInterval(interval);
  }, [index]);


  useEffect(() => {
    setYellowRect(
      range(25).map(d => (
        {
          x: randomUniform()(),
          y: randomUniform()(),
          height: randomUniform(height * 0.03, height * 0.1)(),
          width: randomUniform(width * 0.01, width * 0.03)()
        }
      ))
    )

  }, []);

  // dark line shape
  const darkX = scaleLinear()
    .domain([0, 7])
    .range([0, width]);

  const darkY = scaleLinear()
    .domain([0, 1])
    .range([height, 0]);

  const darkLine = line()
    .x((d, i) => darkX(i))
    .y(d => darkY(d.y))
    .curve(curveStep);

  // med line shape
  const medX = scaleLinear()
    .domain([0, 14])
    .range([0, width]);

  const medY = scaleLinear()
    .domain([1, 0])
    .range([height, 0]);

  const medLine = line()
    .x((d, i) => medX(i))
    .y(d => medY(d.y))
    .curve(curveStep);

  // light line shape
  const lightX = scaleLinear()
    .domain([0, 29])
    .range([0, width]);

  const lightY = scaleLinear()
    .domain([1, 0])
    .range([height, 0]);

  const lightLine = line()
    .x((d, i) => lightX(i))
    .y(d => lightY(d.y))
    .curve(curveStep);

  const windowScaleX = scaleLinear()
    .domain([0, 1])
    .range([0, width]);

  const windowScaleY = scaleLinear()
    .domain([0, 1])
    .range([height, 0]);


  return (
    <div className="home-wrapper">

      <svg
        className="home-svg"
        height={height}
        width={width}
      >
        <path
          className="home-darkLine"
          ref={node => select(node).datum(lineDarkData).attr("d", darkLine)}
        />
        <path
          className="home-medLine"
          ref={node => select(node).datum(lineMedData).attr("d", medLine)}
        />
        {
          yellowRect
            ?
            yellowRect.map((window, idx) => (
              <rect
                key={idx}
                fill="#FEFF3477"
                x={windowScaleX(window.x)}
                y={windowScaleY(window.y)}
                height={window.height}
                width={window.width}
              />
            ))
            : ''
        }

        <path
          className="home-lightLine"
          ref={node => select(node).datum(lineLightData).attr("d", lightLine)}
        />

      </svg>

      <div className="home-box-text-wrapper">
        <div className="home-box-dynamic">
          <span className="home-text-dynamic">{verbs[index % 3]}</span>
        </div>

        <div className="home-box-static">
          <p className="home-text-static">d3 and React</p>
        </div>
      </div>

    </div>
  );
};