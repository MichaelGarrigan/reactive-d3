
import React from 'react';
import {axisBottom, axisLeft} from 'd3-axis';
import {scaleOrdinal, scaleLinear, scaleBand} from 'd3-scale';
import freqData from '../../../../dist/data/FrequencyOfLetters.csv';
//console.log('freq:', freqData);

class FrequencyOfLetters extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: null
  //   };
  // }
  state = {
    data: null
  }

  // componentDidMount() {
  //   console.log('out:', this.state);
  //   if (this.state.data === null) {
  //     console.log('inDidMount');
  //     // convert csv data to an array of objects
  //     let convertCSV = [];
  //     for (let i = 1; i < freqData.length; i += 1) {
  //       convertCSV.push({'id': freqData[i][0], 'value': freqData[i][1]});
  //     }
  //     console.log('freq conv.:', convertCSV);
  //     this.setState({data: convertCSV});
  //   }
 //}
  render() {
    //console.log('out:', this.state);
    let convertCSV = [];
    //if (this.state.data === null) {
      //console.log('inDidMount');
      // convert csv data to an array of objects
      
    for (let i = 1; i < freqData.length; i += 1) {
      convertCSV.push({'id': freqData[i][0], 'value': freqData[i][1]});
    }
    //console.log('freq conv.:', convertCSV);
    //this.setState({data: convertCSV});
    //}
    const margin = {top:20, right:30, bottom:30, left:40};
    const height = 960; 
    const innerHeight = height - margin.left - margin.right;
    const width = 500;
    const innerWidth = width - margin.top - margin.bottom;

    const x = scaleBand().rangeRound([0, innerWidth]);
    const y = scaleLinear().range([innerHeight, 0]);

    const xAxis = axisBottom().scale(x);
    const yAxis = axisLeft().scale(y);
    
    

    return (
      <div>
        <svg className="svg-frequency-letters" height={height} width={width}>
          <g transform={`translate(${margin.left},${margin.top}`}>
            <g 
              className="x axis"
              transform={`translate(0,${innerHeight}`}
            >{xAxis()}
            </g>
            <g 
              className="y axis"
            >{yAxis()}
            </g>
            {
             
              convertCSV.map( (item) => {
                return (
                  <rect
                    key={item.name + item.value}
                    x={x(item.name)}
                    y={y(item.value)}
                    height={innerHeight - y(item.value)}
                    width={x.rangeRound()}
                  />
                );
              })
            }
          </g>
        </svg>
      </div>
    );
  }
  
};

export default FrequencyOfLetters;