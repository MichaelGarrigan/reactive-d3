import React, { Component, Fragment } from 'react';
import { 
  forceSimulation, 
  forceManyBody, 
  forceCenter, 
  forceLink } from 'd3-force';
import { select } from 'd3-selection';
import TitleBanner from '../../titleBanner/TitleBanner.jsx';
import {range, map} from 'd3-array';
import './Force2.css';

export default class Force2 extends Component {
  state = {
    height: 100,
    width: 100
  }

  updateDimensions = () => {
    const svg = document.getElementById('force2-SVG-wrapper');
    
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

    console.log('ran:', range(4).map( () =>  {return {type: 'a'}}))
    // force layout start

    const fnodes = [
      {name: 'A'},
      {name: 'B'},
      {name: 'C'},
      {name: 'D'},
      {name: 'E'} ];

    const flinks = [
      {source: 0, target: 1},
      {source: 0, target: 2},
      {source: 0, target: 3},
      {source: 0, target: 4} ];

    const updateLinks = () => {
      let link = select('.force2-links')
        .selectAll('line').data(flinks);

      link.enter()
        .append('line')
        .merge(link)
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y)
        .style('stroke', 'grey');;

      link.exit().remove();
    };

    const updateNodes = () => {
      let node = select('.force2-nodes')
        .selectAll('text').data(fnodes);

      node.enter()
        .append('text')
        .text( d => d.name)
        .merge(node)
        .attr('x', d => d.x)
        .attr('y', d => d.y)
        .attr('dy', d => 10)
    };

    const ticked = () => {
      updateLinks();
      updateNodes();
    };

    const simulation = forceSimulation(fnodes)
      .force('charge', forceManyBody().strength(-100))
      .force('center', forceCenter(innerWidth/2, innerHeight/2))
      .force('link', forceLink().links(flinks).distance(50))
      .on('tick', ticked);

    return (
      <>
        <TitleBanner title='Force 2' />
        <div id="force2-SVG-wrapper">
          <svg
            className='force2-SVG'
            height={innerHeight}
            width={innerWidth}
          >
            <g className="force2-links"></g>
            <g className="force2-nodes"></g>
          </svg>
        </div>
      </>
    )
  }
}
