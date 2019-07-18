import React, { Component, Fragment } from 'react';
import { 
  forceSimulation, 
  forceManyBody, 
  forceCenter, 
  forceCollide,
  forceRadial } from 'd3-force';
import { select } from 'd3-selection';
import {range, map} from 'd3-array';
import TitleBanner from '../titleBanner/TitleBanner.js';

import './Force.css';

export default class Force extends Component {
  state = {
    height: 100,
    width: 100
  }

  updateDimensions = () => {
    const svg = document.getElementById('force1-SVG-wrapper');
    
    this.setState({
      height: svg.clientHeight,
      width: svg.clientWidth
    })
  }

  componentDidMount(){
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.updateDimensions);
    this.props.setRoute([]);
  }
  render() {
    let { height, width } = this.state;
    let margin = 50;
    let innerHeight = height - (margin * 2);
    let innerWidth = width - (margin * 2);

    // force layout start

    const fnodes = [{}, {}, {}, {}, {}, {}, {}];

    const ticked = () => {
      let selectElem = select('svg')
        .selectAll('circle')
        .data(fnodes);
      
      selectElem.enter()
        .append('circle')
        .attr('r', 20)
        .merge(selectElem)
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);

      selectElem.exit().remove();
    };

    const simulation = forceSimulation(fnodes)
      .force('charge', forceManyBody().strength(10))
      .force('center', forceCenter(innerWidth/2, innerHeight/2))
      .force('collision', forceCollide().radius(20))
      .on('tick', ticked);
  
      // start # 3
      const nodes3 = [
        ...range(40).map( () => {return {type: 'a'}}),
        ...range(40).map( () => {return {type: 'b'}})
      ];
  
      let node3 = select('#force3-g')
        .append('g')
        .selectAll('circle')
        .data(nodes3)
        .enter()
        .append('circle')
        .attr('r', 2.5)
        .attr('fill', d => d.type === 'a' ? 'brown' : 'steelblue');
  
      let simulation3 = forceSimulation(nodes3)
        .force('charge', forceCollide().radius(5))
        .force('r', forceRadial( d => d.type === 'a' ? 100 : 200))
        .on('tick', () => {
          node3.attr('cx', d => d.x).attr('cy', d => d.y);
        });

    return (
      <>
        <TitleBanner title='Force' />
        <div id="force1-SVG-wrapper">
          <svg
            className='force1-SVG'
            height={innerHeight}
            width={innerWidth}
          >
          
          </svg>
        </div>

        <TitleBanner title='Force 3' />
        <div id="force3-SVG-wrapper">
          <svg
            id='force3-SVG'
            height={innerHeight}
            width={innerWidth}
          >
            < g 
              id='force3-g'
              transform={`translate(${innerWidth/2},${innerHeight/2})`} >
              <circle r='100' stroke='brown' strokeOpacity='0.5' fill='none' />
              <circle r='200' stroke='steelblue' strokeOpacity='0.5' fill='none' />
            </g>
          </svg>
        </div>
      </>
    )
  }
}