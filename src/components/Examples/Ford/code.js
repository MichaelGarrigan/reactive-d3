
const code1 = `
import React, { useState } from 'react';

import FordButton from './FordButton.js';
import FordCharts from './FordCharts.js';

import DATA from './FordData.js';
import './Ford.css';


export default props => {

  const [category, setCategory] = useState('All');
  const [selectedItemData, setSelectedItemData] = useState(DATA.children[2]);
  const [selectedItemName, setSelectedItemName] = useState('Trucks');
  const [year, setYear] = useState('2018');

  
  return (
    <div className="ford-wrapper">
  
      <div className="ford-flex">

        <FordButton 
          category={category}
          DATA={DATA}
          year={year}

          setCategory={setCategory}
          setSelectedItemData={setSelectedItemData}
          setSelectedItemName={setSelectedItemName}
          setYear={setYear}
        />

        <FordCharts 
          category={category}
          DATA={DATA}
          dimensions={props.dimensions}
          selectedItemData={selectedItemData}
          selectedItemName={selectedItemName}
          year={year}

          setCategory={setCategory}
          setSelectedItemData={setSelectedItemData}
          setSelectedItemName={setSelectedItemName}
        />
        
      </div>
    </div>
  );
};
`;

const tab1 = {
  name: 'Ford.js',
  code: code1
};

const code2 = `
import React from 'react';

import { lookupMainCategory } from './helperFunctions.js';

import { max } from 'd3-array';
import { axisLeft } from 'd3-axis';
import { select } from 'd3-selection';
import { scaleLinear, scaleBand } from 'd3-scale';
import { schemeTableau10 } from 'd3-scale-chromatic';

import './Ford.css';


export default props => {
  const { category, DATA, year } = props;
  
  const width = props.dimensions.width;
  const sectionWidth = Math.round( (width * 0.95) * 0.8);
  const svgWidth = Math.round(sectionWidth * 0.6);
  const svgHeight = Math.round(sectionWidth * 0.4);

  const width75 = Math.round(svgWidth * 0.75);

  const categoryData = lookupMainCategory(DATA.children, category);
  categoryData.children = categoryData.children.sort( (a,b) => b[year] - a[year]);


  let total = categoryData[year + '_total'];
  
  const margin5 = Math.floor(svgWidth * 0.05);
  const margin10 = Math.floor(svgWidth * 0.1);
  const margin15 = Math.floor(svgWidth * 0.15);
  const margin20 = Math.floor(svgWidth * 0.2);

  const xScale = scaleLinear()
    .domain([max(categoryData.children.map( item => item[year])), 0])
    .range([width75 - margin15 , 0]);

      
  const yScale = scaleBand()
    .domain(categoryData.children.map( item => item.name))
    .range([0, svgHeight])
    .padding(0.4);
  

  return (
    <svg 
      className="svg-ford-bar" 
      width={svgWidth} 
      height={svgHeight}
    >
      <g 
        className="svg-ford-bar-yaxis" 
        transform={'translate(' Math.round(svgWidth * 0.25) + ', ' + 0 + ')'}
        ref={
          node => select(node).call(axisLeft(yScale))
        }
      >
      
      {
        categoryData.children.map( (item, idx) => {
          return (
            <g key={item.name}>
              <rect 
                className="ford-bar-rect"
                fill={schemeTableau10[idx]}
                x={10}
                y={yScale(item.name)}
                width={xScale(item[year])}
                height={yScale.bandwidth()}
              />
              <text
                className="ford-bar-text"
                x={xScale(item[year]) + 15 }
                y={yScale(item.name) + (yScale.bandwidth() * 0.7)}
                textAnchor="start"
              >
                {item[year + '_rounded']}
              </text>
            </g>
          )
        })
      }

      </g>
    </svg>
  );
};
`;

const tab2 = {
  name: 'FordBar.js',
  code: code2
};

const code3 = `
import React from 'react';

import './Ford.css';


export default props => (
  <div className="ford-button-wrapper">

    <div className="ford-button-group">
      <button 
        className={
          props.year === "2018"
            ? "ford-button-active"
            : "ford-button"
        }
        onClick={event => props.setYear(event.target.value)}
        value="2018"
      >2018</button>
      <button 
        className={
          props.year === "2017"
            ? "ford-button-active"
            : "ford-button"
        }
        onClick={event => props.setYear(event.target.value)}
        value="2017"
      >2017</button>
    </div>

    <div className="ford-button-group">
      <button 
        className={
          props.category === "All"
            ? "ford-button-active"
            : "ford-button"
        }
        onClick={() => {
          props.setCategory("All");
          props.setSelectedItemName("Trucks");
          props.setSelectedItemData(props.DATA.children[2])
        }}
        value="All"
      >All</button>
      <button 
        className={
          props.category === "Cars"
            ? "ford-button-active"
            : "ford-button"
        }
        onClick={() => {
          props.setCategory("Cars");
          props.setSelectedItemName(props.DATA.children[0].children[0].name);
          props.setSelectedItemData(props.DATA.children[0].children[0])
        }}
        value="Cars"
      >Cars</button>
      <button 
        className={
          props.category === "SUVs"
            ? "ford-button-active"
            : "ford-button"
        }
        onClick={() => {
          props.setCategory("SUVs");
          props.setSelectedItemName(props.DATA.children[1].children[0].name);
          props.setSelectedItemData(props.DATA.children[1].children[0])
        }}
        value="SUVs"
      >SUVs</button>
      <button 
        className={
          props.category === "Trucks"
            ? "ford-button-active"
            : "ford-button"
        }
        onClick={() => {
          props.setCategory("Trucks");
          props.setSelectedItemName(props.DATA.children[2].children[0].name);
          props.setSelectedItemData(props.DATA.children[2].children[0])
        }}
        value="Trucks"
      >Trucks</button>
    </div>
  </div>
);
`;

const tab3 = {
  name: 'FordButton.js',
  code: code3
};

const code4 = `
import React from 'react';

import FordSalesTotal from './FordSalesTotal.js';
import FordGauges from './FordGauges.js';
import FordLine from './FordLine.js';

import './Ford.css';


export default props => {
  
  return (
    <div className="ford-charts-wrapper">

      <FordSalesTotal
        category={props.category}
        DATA={props.DATA}
        year={props.year}
      />

      <FordGauges 
        category={props.category}
        DATA={props.DATA}
        dimensions={props.dimensions}
        selectedItemName={props.selectedItemName}
        year={props.year}
      />
      
      <FordLine 
        category={props.category}
        DATA={props.DATA}
        dimensions={props.dimensions}
        selectedItemName={props.selectedItemName}
        selectedItemData={props.selectedItemData}
        year={props.year}

        setCategory={props.setCategory}
        setSelectedItemName={props.setSelectedItemName}
        setSelectedItemData={props.setSelectedItemData}
      /> 

    </div>
  );
};
`;

const tab4 = {
  name: 'FordCharts.js',
  code: code4
};

const code5 = `

// data from:
// https://www.best-selling-cars.com/usa/2018-full-year-usa-ford-sales-americas-favorite-car-brand/

export default {
  name: "Ford",
  "2017_total": 2475556,
  "2018_total": 2393731,
  "2017_rounded": "2.47 M",
  "2018_rounded": "2.39 M",
  yearDiff: -3.3,
  "children": [
    {
      name: "Cars",
      "2017_total": 555838,
      "2018_total": 457414,
      "2017_rounded": "555 K",
      "2018_rounded": "457 K",
      yearDiff: -17.7,
      "children": [
        {
          name: "Fiesta",
          "2017": 46249,
          "2018": 51730,
          "2017_rounded": "46 K",
          "2018_rounded": "52 K",
          yearDiff: 11.9
        },
        {
          name: "Focus",
          "2017": 158385,
          "2018": 113345,
          "2017_rounded": "158 K",
          "2018_rounded": "113 K",
          yearDiff: -28.4
        },
        {
          name: "C-MAX",
          "2017": 18390,
          "2018": 6683,
          "2017_rounded": "18 K",
          "2018_rounded": "7 K",
          yearDiff: -63.7
        },
        {
          name: "Fusion",
          "2017": 209623,
          "2018": 173600,
          "2017_rounded": "210 K",
          "2018_rounded": "174 K",
          yearDiff: -17.2
        },
        {
          name: "Taurus",
          "2017": 33242,
          "2018": 28706,
          "2017_rounded": "33 K",
          "2018_rounded": "29 K",
          yearDiff: -13.6
        },
        {
          name: "Police Sedan",
          "2017": 7994,
          "2018": 7382,
          "2017_rounded": "8 K",
          "2018_rounded": "7 K",
          yearDiff: -7.7
        },
        {
          name: "GT",
          "2017": 89,
          "2018": 126,
          "2017_rounded": "89 units",
          "2018_rounded": "126 units",
          yearDiff: 41.6
        },
        {
          name: "Mustang",
          "2017": 81866,
          "2018": 75842,
          "2017_rounded": "82 K",
          "2018_rounded": "76 K",
          yearDiff: -7.4
        }
      ]
    },
    {
      name: "SUVs",
      "2017_total": 796302,
      "2018_total": 797238,
      "2017_rounded": "796 K",
      "2018_rounded": "797 K",
      yearDiff: 0.1,
      "children": [
        {
          name: "EcoSport",
          "2017": 0,
          "2018": 54348,
          "2017_rounded": "0 K",
          "2018_rounded": "54 K",
          yearDiff: 100
        },
        {
          name: "Escape",
          "2017": 308296,
          "2018": 272228,
          "2017_rounded": "308 K",
          "2018_rounded": "272 K",
          yearDiff: -11.7
        },
        {
          name: "Edge",
          "2017": 142603,
          "2018": 134122,
          "2017_rounded": "142 K",
          "2018_rounded": "134 K",
          yearDiff: -5.9
        },
        {
          name: "Flex",
          "2017": 22389,
          "2018": 20308,
          "2017_rounded": "22 K",
          "2018_rounded": "20 K",
          yearDiff: -9.3
        },
        {
          name: "Explorer",
          "2017": 238056,
          "2018": 227732,
          "2017_rounded": "238 K",
          "2018_rounded": "228 K",
          yearDiff: -4.3
        },
        {
          name: "Police Utility",
          "2017": 33075,
          "2018": 33839,
          "2017_rounded": "33 K",
          "2018_rounded": "34 K",
          yearDiff: 2.3
        },
        {
          name: "Expedition",
          "2017": 51883,
          "2018": 54661,
          "2017_rounded": "52 K",
          "2018_rounded": "55 K",
          yearDiff: 5.4
        }
      ]
    },
    {
      name: "Trucks",
      "2017_total": 1123416,
      "2018_total": 1139079,
      "2017_rounded": "1.12 M",
      "2018_rounded": "1.13 M",
      yearDiff: 1.4,
      "children": [
        {
          name: "F-Series",
          "2017": 896764,
          "2018": 909330,
          "2017_rounded": "897 K",
          "2018_rounded": "909 K",
          yearDiff: 1.4
        },
        {
          name: "E-Series",
          "2017": 53304,
          "2018": 47936,
          "2017_rounded": "53 K",
          "2018_rounded": "48 K",
          yearDiff: -10.1
        },
        {
          name: "Transit",
          "2017": 127360,
          "2018": 137794,
          "2017_rounded": "127 K",
          "2018_rounded": "138 K",
          yearDiff: 8.2
        },
        {
          name: "Transit Connect",
          "2017": 34473,
          "2018": 31923,
          "2017_rounded": "34 K",
          "2018_rounded": "32 K",
          yearDiff: -7.4
        },
        {
          name: "Heavy",
          "2017": 11515,
          "2018": 12096,
          "2017_rounded": "11 K",
          "2018_rounded": "12 K",
          yearDiff: 5
        }
      ]
    }
  ]
}
`;

const tab5 = {
  name: 'FordData.js',
  code: code5
};

const code6 = `
import React from 'react';
import { schemePaired } from 'd3-scale-chromatic';

import { sortMainCategoriesByYear } from './helperFunctions.js';

import CircleGauge from './CircleGauge.js';
import CircleGaugeMulti from './CircleGaugeMulti.js';
import FordBar from './FordBar.js';

import './Ford.css';

const colors = [ schemePaired[6], schemePaired[2], schemePaired[4] ];


export default props => {
  const sortedCategories = sortMainCategoriesByYear(props.DATA.children, props.year);

  const width = props.dimensions.width;
  const sectionWidth = Math.round( (width * 0.95) * 0.8);
  const gaugeWidth = Math.round(sectionWidth * 0.3);
  const svgWidth = Math.round(sectionWidth * 0.25);
  const svgHeight = Math.round(svgWidth * 0.6);
  
  return (
    <div className="ford-gague-wrapper">
    {
      props.category === "All"
        ? (
          <div className="ford-3circles-wrapper">
            <div className="ford-circles-icon-wrapper">
              <div 
                className="ford-truck-icon"
                style={{height: svgHeight, width: svgWidth}}
              ></div>
              <div 
                className="ford-suv-icon"
                style={{height: svgHeight, width: svgWidth}}
              ></div>
              <div 
                className="ford-car-icon"
                style={{height: svgHeight, width: svgWidth}}
              ></div>
            </div>
            <div className="ford-circle-wrapper">
              {
                sortedCategories.map( (item, idx) => (
                    <CircleGauge
                      key={item.name}
                      name={item.name}
                      color={colors[idx]}
                      width={gaugeWidth}
                      dimensions={props.dimensions}
                      actual={item[props.year + '_total']}
                    />
                ))
              }
            </div>
          </div>
        )
        : (
          <div className="ford-circle-bar-wrapper">
            <CircleGaugeMulti
              DATA={props.DATA}
              dimensions={props.dimensions}
              category={props.category}
              year={props.year}
            />
            <FordBar
              DATA={props.DATA}
              dimensions={props.dimensions}
              category={props.category}
              year={props.year}
            /> 
          </div>
        )
      }
    </div>
  ); 
};
`;

const tab6 = {
  name: 'FordGauges.js',
  code: code6
};

const code7 = `
import React, { useState, useLayoutEffect } from 'react';

import { formatData, calcExtentForAxis } from './helperFunctions.js';

import { axisBottom, axisLeft, axisRight } from 'd3-axis';
import { path } from 'd3-path';
import { scaleLinear, scaleBand } from 'd3-scale';
import { interpolatePiYG } from 'd3-scale-chromatic';
import { select } from 'd3-selection';

import './Ford.css';
import { format } from 'util';


export default props => {
  const data = props.selectedItemData;
  
  const [dataSorted, setDataSorted] = useState(formatData(props));
  
  const width = props.dimensions.width;
  const sectionWidth = Math.round( (width * 0.95) * 0.8);
  const svgWidth = Math.floor(sectionWidth * 0.9);
  const svgHeight = Math.floor(svgWidth * 0.7);

  const margin = Math.floor(svgWidth * 0.1);

  useLayoutEffect( () => {
    setDataSorted(formatData(props));
  }, [props.year, props.category])
  
  let renderPath = (x, y, x1, y1) => {
    let p = path();
    p.moveTo(x, y);
    p.lineTo(x1, y1);
    p.closePath(); 

    return p.toString();
  };

  const calcPercent = (year17, year18) => {
    let percent = ( (data[year17] - data[year18]) / data[year18] ) * 100;
    let formatPercent = parseFloat(Math.round(percent * 100) / 100).toFixed(2);

    // flip negative to positive and positive to negative
    let flipSign = formatPercent * -1; 

    if (flipSign > 0) return ('Up ' + flipSign + '%');
    else return ('Down ' + flipSign + '%';
  };

  
  const bottomScale = scaleBand()
    .domain(['2017', '', '2018'])
    .rangeRound([0, svgWidth - (margin * 2)])
    .padding(0.9);
  
  const leftScale = scaleLinear()
    .domain(calcExtentForAxis(data))
    .range([svgHeight - (margin * 2), 0]);

  const rightScale = scaleLinear()
    .domain(calcExtentForAxis(data)) 
    .range([svgHeight - (margin * 2), 0]);


  return (
    <div className="ford-line-wrapper">
      <div className="ford-line-button-wrapper">
      {
        dataSorted.map( item => (
          <button 
            className={ 
              props.selectedItemName === item.name
                ? "ford-line-button-active" 
                : "ford-line-button" 
            }
            key={item.name}
            onClick={ () => {
              props.setSelectedItemName(item.name);
              props.setSelectedItemData(item);
            }}
            value={item.name}
          >
            {item.name}
          </button>
        ))
      }
      </div>
      <svg 
        className="svg-ford-line" 
        width={svgWidth} 
        height={svgHeight}
      >
        <g transform={'translate(' + margin ', ' + margin + ')'}>
          <g 
            transform={'translate(0, ' + svgHeight - (margin * 2) + ')'}
            className="svg-ford-axis"
            ref={node => select(node).call(axisBottom(bottomScale) )} 
          />
          <g transform={'translate(0, 0)'}
            className="svg-ford-axis-side"
            ref={node => select(node).call(axisLeft(leftScale).ticks(6, "s"))} 
          />
          <g transform={'translate(' + svgWidth - (margin * 2) + ', 0)'}
            className="svg-ford-axis-side"
            ref={node => select(node).call(axisRight(rightScale).ticks(6, "s"))} 
          />

          {
            data['2017_total']
            ? (
              <text
                className="svg-text-percent"
                x={bottomScale('')}
                y={20}
                textAnchor="middle"
              >
                {calcPercent('2017_total', '2018_total')}
              </text>
            )
            : (
              <text
                className="svg-text-percent"
                x={bottomScale('')}
                y={20}
                textAnchor="middle"
              >
                {calcPercent('2017', '2018')}
              </text>
            )
          }
            
          <g>
            <path
              className="ford-line-path"
              d={ renderPath(
                    bottomScale('2017'),
                    (
                      data['2017_total']
                        ? rightScale(data['2017_total'])
                        : rightScale(data['2017'])
                    ),
                    bottomScale('2018'), 
                    (
                      data['2018_total']
                        ? rightScale(data['2018_total'])
                        : rightScale(data['2018'])
                    )
                  )
                }
              strokeWidth={10}
            />
            <circle
              className="ford-line-circle"
              cx={bottomScale('2017')}
              cy={
                data['2017_total']
                  ? rightScale(data['2017_total'])
                  : rightScale(data['2017'])
              }                                                 
              r={8}
            />
            <circle
              className="ford-line-circle"
              cx={bottomScale('2018')}
              cy={
                data['2018_total']
                  ? rightScale(data['2018_total'])
                  : rightScale(data['2018'])
              }
              r={8}
            />
          </g>   
        </g>
      </svg>
    </div>
  );
};
`;

const tab7 = {
  name: 'FordLine.js',
  code: code7
};

const code8 = `
import React from 'react';
import { schemePaired } from 'd3-scale-chromatic';
import { lookupMainCategory } from './helperFunctions.js';
import './Ford.css';

export default ({category, DATA, year}) => {
  const mainCategory = lookupMainCategory(DATA.children, category);

  return (
    <div className="ford-sales-wrapper">
      {
        category === "All" 
          ? (
            <div className="ford-sales-total" style={{color: schemePaired[1]}}>
              {year + 'Total Sales: ' + DATA[year + '_rounded']}
            </div>
          )
          : (
            <div className="ford-sales-total" style={{color: schemePaired[1]}}>
              {year + ' ' + category.slice(0, -1) + ' Sales: ' + mainCategory[year + '_rounded']}
            </div>
          )
      }
    </div>
  );
};
`;

const tab8 = {
  name: 'FordSalesTotal.js',
  code: code8
};

const code9 = `
import React, { useCallback, useLayoutEffect, useState } from 'react';
import { arc } from 'd3-shape';
import { format } from 'd3-format';
import { interpolate } from 'd3-interpolate';
import { select } from 'd3-selection';
import { transition } from 'd3-transition';

export default props => {
  const { actual, name, width, color } = props;

  const twoPI = 2 * Math.PI;
  let circleProgress = 0;
  let total = 2393731;
  let formatPercent = format('.0%');
  
  const [circleNode, setCircleNode] = useState(null);
  const [textNode, setTextNode] = useState(null);

  const svgWidth = props.width;
  
  const circleRef = useCallback(node => {
    setCircleNode(node);
  }, []);

  const textRef = useCallback(node => {
    setTextNode(node);
  }, []);

  let interCircle = interpolate(circleProgress, actual / total);

  useLayoutEffect(() => {
    
    if (circleNode) {
      transition(name)
        .duration(2000)
        .tween( 'circleProgress', () => {
          return t => {
            circleProgress = interCircle(t);
            select(circleNode).attr('d', circleForeground.endAngle(twoPI * (circleProgress + .4)));
            select(textNode).text(formatPercent(circleProgress));
          }
        });
    }
  }, [circleNode, width]); 
 

  let circleBackground = arc()
    .innerRadius(Math.round(svgWidth * 0.3))
    .outerRadius(Math.round(svgWidth * 0.4 ))
    .startAngle(0)
    .endAngle(twoPI);

  let circleForeground = arc()
    .innerRadius(Math.round(svgWidth * 0.25))
    .outerRadius(Math.round(svgWidth * 0.45))
    .startAngle(twoPI * .4)
    .endAngle(twoPI * .4);

  let circleInner = arc()
    .innerRadius(0)
    .outerRadius(Math.round(svgWidth * 0.25))
    .startAngle(0)
    .endAngle(twoPI);

  return (
    <svg 
      height={svgWidth} width={svgWidth}
    >
      <g transform={'translate(' + Math.round(svgWidth / 2) + ', ' + Math.round(svgWidth / 2) + ')'}>
        <path
          fill="#777"
          stroke="#333"
          strokeWidth="1"
          d={circleBackground()}
        />
        <path
          ref={circleRef}
          fill={props.color}
          stroke="#333"
          strokeWidth="1"
          d={circleForeground()}
        />
        <path
          fill="none"
          d={circleInner()}
        />
        <text 
          ref={textRef} 
          textAnchor="middle" 
          dy="0"
          style={{fontSize: '4vw', fill: '#333'}}
        ></text>
        <text 
          textAnchor="middle" 
          dy="28px"
          style={{fontSize: '1.5vw', fill: '#333'}}
        >Total Sales</text>
        
      </g>
    </svg>
  );
};
`;

const tab9 = {
  name: 'CircleGauge.js',
  code: code9
};

const code10 = `
import React, { useCallback, useLayoutEffect, useEffect, useRef, useState } from 'react';

import { arc } from 'd3-shape';
import { schemeTableau10 } from 'd3-scale-chromatic';
import { select } from 'd3-selection';

import { lookupMainCategory } from './helperFunctions.js';

export default props => {
  const { category, DATA, year } = props;
  
  const width = props.dimensions.width;
  const sectionWidth = Math.round( (width * 0.95) * 0.8);
  const svgWidth = Math.round(sectionWidth * 0.4);
  const svgHeight = Math.round(sectionWidth * 0.4);
  
  let segs = [];
  const twoPI = 2 * Math.PI;

  const categoryData = lookupMainCategory(DATA.children, category);
  categoryData.children = categoryData.children.sort( (a,b) => b[year] - a[year]);
  
  let total = categoryData[year + '_total'];

  let spaces = categoryData.children.length;
  let spaceWidthPercent = 10 / spaces;

  let gap = (spaceWidthPercent * 0.01) * total;
  let gapInPI = Number(Math.round(((gap / total) * twoPI)+'e3')+'e-3');
  

  categoryData.children.forEach( item => {
    let chunk = (item[year] - gap) / total;
    let chunkInPI = chunk * twoPI;
    
    segs.push(Number(Math.round(chunkInPI+'e3')+'e-3') )
  })
  
  let start = 0;
  let end;
  let arcFun = [];
  segs.forEach( (item, idx) => {
  
    end = start + item;
    
    let circleForeground = arc()
      .innerRadius(Math.round(svgWidth * 0.25))
      .outerRadius(Math.round(svgWidth * 0.45))
      .startAngle(start)
      .endAngle(end);

    arcFun.push( circleForeground);

    start = Number(Math.round((end + gapInPI)+'e3')+'e-3'); 
  })

  let circleBackground = arc()
    .innerRadius(0)
    .outerRadius(Math.round(svgWidth * 0.35 ))
    .startAngle(0)
    .endAngle(twoPI);

  return (
    <svg 
      height={svgHeight} width={svgWidth}
    >
      <g transform={'translate(' + Math.round(svgWidth / 2) + ', ' + Math.round(svgHeight / 2) + ')'}>
        <path
          fill="#777"
          stroke="#333"
          strokeWidth="1"
          d={circleBackground()}
        />
        {
          arcFun.map( (item, idx) => (
              <path
                key={idx + ""}
                fill={schemeTableau10[idx]}
                stroke="#333"
                strokeWidth="1"
                d={item()}
              />
            )
          )
        }
        
      </g>
    </svg>
  );
};
`;

const tab10 = {
  name: 'CircleGaugeMulti.js',
  code: code10
};

const code11 = `

/* ===================
       Ford
==================== */
.ford-flex {
  display: flex;
  
}

/* ===================
     FordButton
==================== */
.ford-button-wrapper {
  background: var(--gray5);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  width: 20%;
}
.ford-button-group {
  margin: 2vw 0;
}
.ford-button {
  background: var(--gray2);
  border: thin solid var(--grayDark);
  border-radius: 1vw;
  color: var(--grayDark);
  cursor: pointer;
  font-size: 3vw;
  margin: 0.5vw 0;
  padding: 0.5vw 0;
  width: 80%;
}
.ford-button-active {
  background: var(--yellow);
  border: thin solid var(--grayDark);
  border-radius: 1vw;
  color: var(--grayDark);
  cursor: pointer;
  font-size: 3vw;
  margin: 0.5vw 0;
  padding: 0.5vw 0;
  width: 80%;
}

/* ===================
     FordCharts
==================== */
.ford-charts-wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow-y: auto;
  width: 80vw;
}

/* ===================
   FordSalesTotal 
==================== */
.ford-sales-wrapper {
  background: var(--grayLight);
  border: thin solid var(--grayDark);
  margin: 2vw 0;
  padding: 1vw 0;
  width: 90%;
}
.ford-sales-total {
  font-size: 5vw;
  text-align: center;
}

/* ===================
      FordGagues 
==================== */
.ford-gague-wrapper {
  width: 100%;
}
.ford-3circles-wrapper {
  display: flex;
  flex-direction: column;
}
.ford-circles-icon-wrapper {
  align-items: center;
  display: flex;
  justify-content: space-evenly;
}
.ford-circle-wrapper {
  align-items: center;
  display: flex;
  justify-content: space-evenly;
}
.ford-circle-p {
  color: #333;
  font-size: 4vw;
}
.ford-circle-bar-wrapper {
  align-items: center;
  display: flex;
  width: 100%;
}

.ford-truck-icon {
  background-image: url('/icons/truck.svg');
  background-size: cover;
  background-repeat: no-repeat;
}
.ford-suv-icon {
  background-image: url('/icons/suv.svg');
  background-size: cover;
  background-repeat: no-repeat;
}
.ford-car-icon {
  background-image: url('/icons/car.svg');
  background-size: cover;
  background-repeat: no-repeat;
}

/* ===================
      FordBar 
==================== */
.svg-ford-bar-yaxis text {
  color: var(--grayDark);
  font-size: 1.6vw;
}
.ford-bar-rect {
  stroke: var(--grayDark);
  stroke-width: 0.06vw;
}

.svg-ford-bar-yaxis line {
  stroke: var(--grayDark);
  stroke-width: 0.06vw;
}
.ford-bar-text {
  fill: var(--grayDark);
  font-size: 1.2vw;
}

/* ===================
      FordLine 
==================== */
.ford-line-wrapper {
  align-items: center;
  background: var(--grayLight);
  border: thin solid var(--grayDark);
  display: flex;
  flex-direction: column;
  margin: 3vw 0;
  width: 90%
}
.ford-line-button-wrapper {
  display: flex;
  justify-content: space-evenly;
  margin-top: 2vw;
}
.ford-line-button {
  background: var(--gray2);
  border: thin solid var(--grayDark);
  border-radius: 1vw;
  color: var(--grayDark);
  cursor: pointer;
  font-size: 2vw;
  padding: 0.5vw;
}

.ford-line-button-active {
  background: var(--yellow);
  border: thin solid var(--grayDark);
  border-radius: 1vw;
  color: var(--grayDark);
  cursor: pointer;
  font-size: 2vw;
  padding: 0.5vw;
}
.svg-ford-axis text {
  fill: var(--grayDark);
  font-size: 2vw;
}
.svg-ford-axis path {
  stroke: var(--grayDark);
  stroke-width: 0.06vw;
}
.svg-ford-axis-side text {
  fill: var(--grayDark);
  font-size: 1.5vw;
}
.svg-ford-axis-side path {
  stroke: var(--grayDark);
  stroke-width: 0.06vw;
}
.svg-text-percent {
  fill: var(--grayDark);
  font-size: 4vw;
}
.ford-line-path {
  stroke: var(--blue);
}
.ford-line-circle {
  fill: var(--orange);
}
`;

const tab11 = {
  name: 'Ford.css',
  code: code11
};

const code12 = `
import { max, extent } from 'd3-array';

// @params :: 'children' - three subcategories as objects in an array
// @params :: 'year' - a string of ('2017'|'2018')
// @return :: an array of objects
export const sortMainCategoriesByYear = (children, year) => {
  const copy = [...children];

  return copy.sort( (a, b) => {
    if ( (a[year + '_total'] - b[year + '_total']) > 0 ) {
      return -1;
    }
    else if ( (a[year + '_total'] - b[year + '_total']) < 0 ) {
      return 1;
    } else return 0;
  })
};

// @params :: 'category' - an object (either - Car|SUV|Truck)
// @params :: 'year' - a string of ('2017'|'2018')
// @params :: 'rankBy' - a string of ('Yearly Increase'|'Sales Total')
// @return :: an array of objects
export const sortCategoryByRankBy = (category, year, rankBy) => {
  if (rankBy === 'Yearly Increase') {
    let copy = [...category.children];
    return copy.sort( (a, b) => {
      if ( (a.yearDiff - b.yearDiff) > 0 ) {
        return -1;
      }
      else if ( (a.yearDiff - b.yearDiff) < 0 ) {
        return 1;
      } else return 0;
    });
  } else {
    let copy = [...category.children];
    return copy.sort( (a, b) => {
      if ( (a[year] - b[year]) > 0 ) {
        return -1;
      }
      else if ( (a[year] - b[year]) < 0 ) {
        return 1;
      } else return 0;
    });
  }
};

// @params :: 'children' - three subcategories as objects in an array
// @params :: 'category' - a string of either 'All', 'Cars', 'SUVs' or 'Trucks'
// @return :: an object
export const lookupMainCategory = (children, category) => {
  for (let child of children) {
    if (child.name === category) {
      return child;
    }
  }
}

// @params :: 'item' - an object describing the sales data for a vehicle model
// @return :: a tuple [ MIN, MAX ]
export const calcExtentForAxis = item => {
  let year17 = item['2017_total'] ? item['2017_total'] : item['2017'];
  let year18 = item['2018_total'] ? item['2018_total'] : item['2018'];
  let buff10Percent = Math.round(year18 * 0.1); 
  
  let tuple = extent([ year17, year18 ]);
  
  tuple[0] -= buff10Percent;
  tuple[1] += buff10Percent;
  
  return tuple;

}

// @params :: 'props' - the props being passed to this component
// @return :: an array of objects
export const formatData = props => {
  if (props.category === 'All') {
    return sortMainCategoriesByYear(
      props.DATA.children, 
      props.year
    );
  } else {
    return sortCategoryByRankBy(
      lookupMainCategory(props.DATA.children, props.category), 
      props.year,
      props.rankBy
    );
  }
}
`;

const tab12 = {
  name: 'helperFunctions.js',
  code: code12
};

const tabs = [tab1, tab2, tab3, tab4, tab5, tab6, tab7, tab8, tab9, tab10, tab11, tab12];

export default tabs;