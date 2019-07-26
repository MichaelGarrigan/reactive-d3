import React, { useState, Fragment } from 'react';
import {extent} from 'd3-array';
import {axisBottom, axisLeft, axisRight} from 'd3-axis';
import {scaleLinear, scaleBand, scaleOrdinal} from 'd3-scale';
import {select} from 'd3-selection';
import {interpolatePiYG} from 'd3-scale-chromatic';
import {path} from 'd3-path';

import './Ford.css';

const formatData = obj => {
  let dataArr = [];

  // extract a subcategory 
  if (obj.category === 'All') {
    dataArr = obj.data.children.map(item => item);
  } else {
    let category = obj.data.children.forEach(item => {
      if (item[obj.category]) return item;
    });
    dataArr = category.children.map(item => item);
  }

  // sort the array
  if (obj.rankBy === 'Yearly Increase') {
    return dataArr.sort( (a,b) => {
      if ( (a.yearDiff - b.yearDiff) > 0 ) return -1;
      else if ( (a.yearDiff - b.yearDiff) < 0 ) return 1;
      else return 0;
    });
  } else {
    return dataArr.sort( (a,b) => {
      if ( (a[obj.year] - b[obj.year]) > 0 ) return -1;
      else if ( (a[obj.year] - b[obj.year]) < 0 ) return 1;
      else return 0;
    });
  }
}

const FordLine = props => {
  
  const {width, height} = props.dimensions;
  const [data, setData] = useState(formatData({...props}));
  
  const marginWidth = width * 0.1;
  const marginHeight = height * 0.1;
  const svgWidth = width - marginWidth;
  const svgHeight = height - marginHeight;
  
  // TODO - place both the 2017 and 2018 sales total into array to be 'extent'
  let calcExtentForAxis = () => {
    if (props.category === 'All') {
      let totals = [];
      data.forEach( item => {
        totals.push(item['total_2017']);
        totals.push(item['total_2018']);
      });
      let ext = extent(totals);
      ext[0] -= 200000; // lower the lowest value
      ext[1] += 200000; // increase the highest value
      return ext;
    } else {
      let totals = [];
      data.forEach( item => {
        totals.push(item['2017']);
        totals.push(item['2018']);
      });
      return extent(totals);
    }
  }

  const renderPath = (x, y, x1, y1) => {
    let p = path();
    p.moveTo(x, y);
    p.lineTo(x1, y1);
    p.closePath(); 

    return p.toString();
  }
  
  // Scales
  const bottomScale = scaleBand()
    .domain(['2017', '', '2018'])
    .range([0, svgWidth - (marginWidth * 2)])
    .padding(0.9);

  const leftScale = scaleBand()
    .domain(data.map( item => item.name))
    .range([svgHeight - marginHeight, 0])
    .padding(0.5);

  const rightScale = scaleLinear()
    .domain(calcExtentForAxis())
    .range([svgHeight - marginHeight, 0]);

  return (
    <div className="ford-line-wrapper">
      <svg 
        className="svg-ford-line" 
        width={svgWidth} 
        height={svgHeight}
      >
        <g transform={`translate(${marginWidth}, 0)`}>
          <g transform={`translate(0, ${svgHeight - marginHeight})`}
            ref={node => select(node).call(axisBottom(bottomScale))} 
          />
          <g transform={`translate(0, 0)`}
            ref={node => select(node).call(axisLeft(leftScale))} 
          />
          <g transform={`translate(${svgWidth - (marginWidth * 2)}, 0)`}
            ref={node => select(node).call(axisRight(rightScale))} 
          />
            
          {
            formatData({...props}).map( (item, idx) => {
              return (
                <Fragment>
                  <circle
                    cx={bottomScale("2017")}
                    cy={rightScale(item["total_2017"])}
                    r={20}
                    fill={interpolatePiYG(idx * 0.1 - 0.05)}
                  />
                  <circle
                    cx={bottomScale("2018")}
                    cy={rightScale(item["total_2018"])}
                    r={20}
                    fill={interpolatePiYG(idx * 0.1 - 0.05)}
                  />
                  <path
                    d={ renderPath(
                          bottomScale("2017"),
                          rightScale(item["total_2017"]),
                          bottomScale("2018"), 
                          rightScale(item["total_2018"])
                        )
                      }
                    strokeWidth={10}
                    stroke="blue"
                  />
                  <circle
                    cx={bottomScale("2017")}
                    cy={rightScale(item["total_2017"])}
                    r={10}
                    fill={interpolatePiYG(idx * 0.1)}
                  />
                  <circle
                    cx={bottomScale("2018")}
                    cy={rightScale(item["total_2018"])}
                    r={10}
                    fill={interpolatePiYG(idx * 0.1)}
                  />
                </Fragment>
              )
            })
          }
          
          </g>
      </svg>
    </div>
  );
};

export default FordLine;