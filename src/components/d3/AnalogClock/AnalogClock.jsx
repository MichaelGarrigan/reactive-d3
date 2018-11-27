import React, { Component } from 'react';
import {scaleLinear} from 'd3-scale';
import {select} from 'd3-selection';
import {arc} from 'd3-shape';
import TitleBanner from '../titleBanner/TitleBanner.jsx';
import './AnalogClock.css';

export default class AnalogClock extends Component {
  state = {
    dimensions: {
      height: 400,
      width: 400,
      margin: 100
    },
    time: [
      {
        seconds: 0,
        minutes: 0,
        hour: 0
      }
    ],
    longFormTime: (new Date()).toLocaleTimeString()
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => {
    let currentTime = new Date();
    this.setState({
      time: [
        {
          seconds: currentTime.getSeconds(),
          minutes: currentTime.getMinutes(),
          hour: currentTime.getHours() + currentTime.getMinutes() / 60
        }
      ],
      longFormTime: (new Date()).toLocaleTimeString()
    })
  } 

  render() {
    const pi = Math.PI;
    let scaleSec = scaleLinear().domain([0, 59 + 999/1000]).range([0, 2 * pi]);
    let scaleMin = scaleLinear().domain([0, 59 + 59/60]).range([0, 2 * pi]);
    let scaleHour = scaleLinear().domain([0, 11 + 59/60]).range([0, 2 * pi]);

    let arcSec = arc()
      .innerRadius(0)
      .outerRadius(((this.state.dimensions.width - this.state.dimensions.margin) / 2) - 10)
      .startAngle( d => scaleSec(d.seconds))
      .endAngle( d => scaleSec(d.seconds));
    
    let arcMin = arc()
      .innerRadius(0)
      .outerRadius(((this.state.dimensions.width - this.state.dimensions.margin) / 2) - 20)
      .startAngle( d => scaleMin(d.minutes))
      .endAngle( d => scaleMin(d.minutes));

    let arcHour = arc()
      .innerRadius(0)
      .outerRadius(((this.state.dimensions.width - this.state.dimensions.margin) / 2) - 30)
      .startAngle( d => scaleHour(d.hour % 12))
      .endAngle( d => scaleHour(d.hour % 12));

    return (
      <div className="analog-clock-wrapper">
        <TitleBanner title='Analog Clock' />
        <svg 
          className="svg-analog-clock"
          height={this.state.dimensions.height}
          width={this.state.dimensions.width}
        >
          <g 
            transform={`translate(${this.state.dimensions.width/2}, ${this.state.dimensions.height/2})`}>
            <circle
              className="analog-clock-large-circle"
              r={(this.state.dimensions.width - this.state.dimensions.margin) / 2}
            />
            <circle
              className="analog-clock-small-circle"
              r={5}
            />
            <path
              className="analog-clock-second-hand"
              d={arcSec(this.state.time[0])}
            />
            <path
              className="analog-clock-minute-hand"
              d={arcMin(this.state.time[0])}
            />
            <path
              className="analog-clock-hour-hand"
              d={arcHour(this.state.time[0])}
            />
          </g>
        </svg>
        <div>{this.state.longFormTime}</div>
      </div>
    )
  }
}
