import React, { Component, Fragment } from 'react';
import { range } from 'd3-array';
import { select } from 'd3-selection';
import {
  forceSimulation,
  forceCollide,
  forceRadial
} from 'd3-force';
import TitleBanner from '../../titleBanner/TitleBanner.jsx';
import './Force3.css';


export default class Force3 extends Component {
  state = {
    height: 100,
    width: 100
  }

  updateDimensions = () => {
    const svg = document.getElementById('force3-SVG-wrapper');
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
  }
  render() {
    let { height, width } = this.state;
    let margin = 50;
    let innerHeight = height - (margin * 2);
    let innerWidth = width - (margin * 2);

    const nodes = [
      ...range(40).map( () => {return {type: 'a'}}),
      ...range(40).map( () => {return {type: 'b'}})
    ];

    let node = select('#force3-g')
      .append('g')
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('r', 2.5)
      .attr('fill', d => d.type === 'a' ? 'brown' : 'steelblue');

    let simulation = forceSimulation(nodes)
      .force('charge', forceCollide().radius(5))
      .force('r', forceRadial( d => d.type === 'a' ? 100 : 200))
      .on('tick', () => {
        node.attr('cx', d => d.x).attr('cy', d => d.y);
      });

    return (
      <>
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
