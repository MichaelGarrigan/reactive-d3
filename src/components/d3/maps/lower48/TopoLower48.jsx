import React, { Component } from 'react';
import * as topojson from 'topojson-client';
import * as d3 from 'd3';
import './TopoLower48.css';

export default class TopoLower48 extends Component {
  state = {
    lower48data: null
  }

  componentDidMount() {
    if (!this.state.lower48data) {
      d3.json("https://unpkg.com/us-atlas@1/us/10m.json")
        .then(response => {
          let us = response;
          us.objects.lower48 = {
            type: "GeometryCollection",
            geometries: us.objects.states.geometries.filter(d => d.id !== "02" && d.id !== "15")
          };
          this.setState({lower48data: us});
        })
    }
  }

  render() {
    const path = d3.geoPath();

    if (this.state.lower48data) {
      return (
        <svg
          className='lower48-svg'
          height='600'
          width='960'
        >
          <path
            className='lower48-path-states'
            ref={
              node => d3.select(node)
                .datum(
                  topojson.merge(
                    this.state.lower48data, 
                    this.state.lower48data.objects.lower48.geometries
                  ))
                .attr('d', path)
            }
          />
          <path
            fill='none'
            stroke='black'
            strokeLinejoin='round'
            ref={
              node => d3.select(node)
                .datum(
                  topojson.mesh(
                    this.state.lower48data, 
                    this.state.lower48data.objects.lower48, 
                    (a,b) => a !== b)
                  )
                .attr('d', path)
            }
          />
        </svg>
      )
    } else {
      return (<div>Not loaded yet ....</div>)
    }
    
  }
}
