import React, { Component, Fragment } from 'react';
import { 
  forceSimulation, 
  forceManyBody, 
  forceCenter, 
  forceCollide } from 'd3-force';
import { select } from 'd3-selection';
import TitleBanner from '../../titleBanner/TitleBanner.jsx';

import './Force1.css';

export default class Force1 extends Component {
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

    return (
      <>
        <TitleBanner title='Force 1' />
        <div id="force1-SVG-wrapper">
          <svg
            className='force1-SVG'
            height={innerHeight}
            width={innerWidth}
          >
          
          </svg>
        </div>
      </>
    )
  }
}
