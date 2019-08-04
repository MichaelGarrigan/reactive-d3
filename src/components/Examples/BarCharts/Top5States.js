import React, { Component, Fragment } from 'react';
import { axisBottom, axisLeft } from 'd3-axis';
import { scaleLinear, scaleBand } from 'd3-scale';
import { schemeSet3 } from 'd3-scale-chromatic';
import { select } from 'd3-selection';
import Dimensions from 'react-dimensions';

import './Top5States.css';


class Top5States extends Component {
  state = {
    height: 600,
    width: 800,
    data: [
      {name: 'California', value: 39500000},
      {name: 'Texas', value: 28300000},
      {name: 'Flordia', value: 21000000},
      {name: 'New York', value: 19800000},
      {name: 'Pennsylvania', value: 12800000}
    ]
  }

  updateDimensions = () => {
    const svg = document.getElementById('topSVG');
    
    this.setState({
      height: svg.clientHeight,
      width: svg.clientWidth
    })
  }

  componentDidMount(){
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.updateDimensions);
    this.props.setRoute([]);
  }
  render() {
    let margin = Math.min(this.state.height, this.state.width) / 10;
    let innerHeight = this.state.height - (margin * 2);
    let innerWidth = this.state.width - (margin * 2);

    const xScale = scaleBand()
      .domain(this.state.data.map( item => item.name))
      .range([0, innerWidth]).padding(0.2);

    const yScale = scaleLinear()
      .domain([0, Math.max(...this.state.data.map( item => item.value))])
      .range([innerHeight, 0]);

    
    return (
      <div id="topSVG">
        <svg 
          height={this.state.height} 
          width={this.state.width} 
        >
          <g transform={`translate(${margin}, 0)`}>
            <g transform={`translate(0, ${innerHeight})`}>
              <g ref={node => select(node).call(axisBottom(xScale))} />
            </g>
            
            <g ref={node => select(node).call(axisLeft(yScale))} />
            {
              this.state.data.map( (item, idx) => {
                return (
                  <>
                    <rect 
                      key={item.name}
                      fill={schemeSet3[idx]}
                      x={xScale(item.name)}
                      y={yScale(item.value)}
                      width={xScale.bandwidth()}
                      height={innerHeight - yScale(item.value)}
                    />
                    <text
                      x={xScale(item.name)}
                      y={yScale(item.value)}
                    >
                      {item.name}
                    </text>
                  </>
                );
              })
            }
          </g>

        </svg>
      </div> 
    )
  }
};

export default Top5States;

