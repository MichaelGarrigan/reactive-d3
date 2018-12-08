import React, { Component } from 'react';
import * as d3 from 'd3';
import { scaleLinear } from 'd3-scale';

import './ScaleEditor.css';

export default class ScaleEditor extends Component {
  state = {
    linear: {
      clamp: false,
      domain: [0,1],
      range: [0,1],
      invert: false,
      arguments: ['', '', ''],
      results: ['', '', '']
    }
  }

  handleClampingLinear = event => {
    event.preventDefault();
    this.setState(prevState => ({
      linear: {
        clamp: !prevState.linear.clamp
      }
    }));
  }

  handleDomainEntry = (event, scaleName) => {
    event.preventDefault();

    let entryAsString = event.target.value;
    let splitStringToArray = entryAsString.split(',');
    
    if (splitStringToArray.length === 0) {
      this.setState(prevState => ({
        [scaleName]: { 
          ...prevState[scaleName],
          domain: [0,1] 
        }
      }));
    } else {
      let container = [];
      splitStringToArray.forEach( item => {
        
        if (item !== '' && Object.prototype.toString.call(+item).slice(8, -1) === 'Number') {
          container.push(+item);
        } else {
          container.push(item);
        }
      });
      
      this.setState(prevState => ({
        [scaleName]: { 
          ...prevState[scaleName],
          domain: container 
        }
      }));
    }
  }

  handleRangeEntry = (event, scaleName) => {
    event.preventDefault();

    let entryAsString = event.target.value;
    let splitStringToArray = entryAsString.split(',');
    
    if (splitStringToArray.length === 0) {
      this.setState(prevState => ({
        [scaleName]: { 
          ...prevState[scaleName],
          range: [0,1] 
        }
      }));
    } else {
      let container = [];
      splitStringToArray.forEach( item => {
        
        if (item !== '' && Object.prototype.toString.call(+item).slice(8, -1) === 'Number') {
          container.push(+item);
        } else {
          container.push(item);
        }
      });
      
      this.setState(prevState => ({
        [scaleName]: { 
          ...prevState[scaleName],
          range: container 
        }
      }));
    }
  }

  executeLinearScale = () => {
    let scale = scaleLinear().domain(this.state.linear.domain).range(this.state.linear.range);
    let scaleResult = scale(this.state.linear.arguments[0]);
    console.log('scale: ', scaleResult);

    this.setState( prevState => ({
      linear: {
        ...prevState.linear,
        results: [scaleResult]
      }
    }));
  }

  handleArgumentsLinear = event => {
    event.preventDefault();
    let value = event.target.value;
    if (value !== '') {
      this.setState(prevState => ({
        linear: {
          ...prevState.linear,
          arguments: [+value]
        }
      }), () => {console.log('here');this.executeLinearScale()}
      );
    }
  }
  

  render() {
    console.log('range: ', this.state.linear.range)
    return (
      <div className="scale-editor-wrapper">
      <h1 className="editor-title">Interact with and explore D3 Scales</h1>
        <div className="scale-editor-intro">
          <p>D3 provides 7 categories of scales, some of the categories have multiple scale types.</p>
        </div>

        <div className="scale-category">
          <h2>Continuous</h2>

          <div className="scale-continuous-type">
            <h3>Linear</h3>
            <span>Enable Clamping</span>
            <button 
              type="button" 
              onClick={e => this.handleClampingLinear(e)}
            >
              {this.state.linear.clamp + ''}
            </button>
          <p className="scale-continuous-scale-function">
            const linear = scaleLinear()
          </p>
          <div className="scale-continuous-domain">
            <span>.domain([</span>
            <input 
              type="text" name="domain" 
              id="scaleLinearDomain" 
              value={this.state.linear.domain}
              onChange={ e => this.handleDomainEntry(e, 'linear')}
            />
            <span>])</span>
          </div>
          <div className="scale-continuous-range">
            <span>.range([</span>
            <input type="text" name="range" id="scaleLinearRange"
              value={this.state.linear.range}
              onChange={ e => this.handleRangeEntry(e, 'linear')}
            />
            <span>])</span>
          </div>
          {
            this.state.linear.clamp 
              ? (
                  <p className="scale-continuous-scale-function">
                    .clamp(true)
                  </p>
                )
              : ''
          }

          <div className="scale-continuous-results-wrapper">
            
            <div className="scale-continuous-results-each">
              <span>linear(</span>
              <input 
                type="text" name="range" 
                id="scaleLinearRange"
                value={this.state.linear.arguments[0]}
                onChange={ e => this.handleArgumentsLinear(e)}
              />
              <span>)</span>
              <span>=></span>
              <span>{this.state.linear.results[0]}</span>
            </div>


          </div>
          </div>
        </div>
      
      </div>
    )
  }
}
