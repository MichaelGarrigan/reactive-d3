
import React, {Component} from 'react';
import {arc} from 'd3-shape';
import './AnimatedCircles.css';
import TitleBanner from '../titleBanner/TitleBanner.js';

class AnimatedCircles extends Component {
  state = {
    rotation: 0,
    rotationPositions: [0, Math.PI / 4]
  }

  componentDidMount = () => {
    this.timer = setInterval(() => this.rotate(), 500);
  }

  componentWillUnmount = () => {
    clearInterval(this.timer);
  }
  
  rotate = () => {
    console.log('rotate', this.state.rotation);
    if (this.state.rotation === 7) {
      let positions = this.generateArcSegment(0);

      this.setState({
        rotation: 0,
        rotationPositions: positions
      });
    } else {
      let positions = this.generateArcSegment(this.state.rotation + 1);

      this.setState(prevState => ({
        rotation: prevState.rotation + 1,
        rotationPositions: positions
      }));
    }
  }

  generateArcSegment = (rotation) => {
    const segArray = [
      [0, Math.PI / 4],
      [Math.PI / 4, Math.PI / 2],
      [Math.PI / 2, Math.PI * 0.75],
      [Math.PI * 0.75, Math.PI],
      [Math.PI, Math.PI * 1.25],
      [Math.PI * 1.25, Math.PI * 1.5],
      [Math.PI * 1.5, Math.PI * 1.75],
      [Math.PI * 1.75, Math.PI * 2]
    ]
    return segArray[rotation];
  }

  render () {
    let arc1 = arc()
      .innerRadius(50)
      .outerRadius(150);
      
    return (
      <div className="animated-circles-wrapper">
        <TitleBanner title="Animated Circles" />
        <div className="svg-animateCircle-chart-wrapper">
          <svg 
            className="svg-animateCircle-chart" 
            width="400" 
            height="400"
          >
            <circle
              className="circle-lg"
              cx={200}
              cy={200}
              r={150}
              fill="olivedrab"
            />
            <g  
              transform="translate(200,200)"
            >
              <path
                className="arc-path-1"
                d={
                  arc1({
                    startAngle: this.state.rotationPositions[0],
                    endAngle: this.state.rotationPositions[1]
                  })
                }
              />
            </g>
          </svg>
        </div>
      </div>
    )
  }
}

export default AnimatedCircles;