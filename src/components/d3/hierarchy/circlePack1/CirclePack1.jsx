import React, { Component } from 'react';
import Dimensions from 'react-dimensions';
import { hierarchy , pack } from 'd3-hierarchy';
import { schemeCategory10 } from 'd3-scale-chromatic';

import './CirclePack1.css';

class CirclePack1 extends Component {
  render() {
    const { containerHeight, containerWidth } = this.props;
    let halfH = containerHeight / 2;
    let halfW = containerWidth / 2;

    const testObj = {
      name: 'root',
      value: 0,
      children: [
        {
          name: 'child1',
          value: 250,
        },
        {
          name: 'child2',
          value: 100
        },
        {
          name: 'child3',
          value: 50
        },
        {
          name: 'child4',
          value: 150
        }
      ]
    };

    let colors = schemeCategory10;

    let root = hierarchy(testObj).sum(d => d.value);
    console.log('root: ', root);
    console.log('rootDESC: ', root.descendants());

    let circleCluster = pack().size([containerWidth-2, containerHeight-2]).padding(20);
    console.log('cluster: ', circleCluster(root));
    console.log('clusterDESC: ', circleCluster(root).descendants());
    

    return (
      <div className='circlePack1-wrapper'>
        <svg className="svg-circlePack1"
          height={containerHeight}
          width={containerWidth}
        >
          <g transform={`translate(${1}, ${1})`} >
            {
              circleCluster(root).descendants().map( (d, idx) => {
                return (
                  <g 
                    key={d.data.name}
                    transform={`translate(${d.x}, ${d.y})`} 
                  >
                    <circle
                      r={d.value / 2}
                      fill={colors[idx]}
                      opacity='0.8'
                    />
                    <text
                        x='0'
                        y='0'
                      >{d.data.name}</text>  
                  </g>
                )
              })
            }
          </g>
        </svg>
      </div>
    )
  }
}

export default Dimensions()(CirclePack1);