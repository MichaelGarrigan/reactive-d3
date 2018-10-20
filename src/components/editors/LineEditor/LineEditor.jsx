

import React, {Component} from 'react';
import LineSVG from './LineSVG.jsx';
import * as d3 from 'd3';
import './LineEditor.css';

const curveTypes = [
  'curveLinear', 'curveLinearClosed', 'curveBasis', 'curveBasisClosed', 
  'curveBasisOpen', 'curveBundle', 'curveCardinal', 'curveCardinalClosed', 
  'curveCardinalOpen', 'curveCatmullRom', 'curveCatmullRomClosed', 
  'curveCatmullRomOpen', 'curveMonotoneX', 'curveMonotoneY',
  'curveNatural', 'curveStep', 'curveStepAfter', 'curveStepBefore'
];

class LineEditor extends React.Component {
  state = {
    width: 960,
    height: 500,
    margins: {top: 50, bottom: 50, left: 50, right: 50},
    
    controller: {
      dataPoints: 10,
      random: true,
      userDefinedData: [],
      curveType: 'curveLinear'
    }
  }

  handleRadioValue = (e) => {
    console.log('called handleControls:', e.target.value);
    e.preventDefault();
  }

  handleCurveSelection = (e) => {
    let value = e.target.value;
    e.preventDefault();
    this.setState(prevState => ({
      ...this.state.controller,
      ...prevState.controller.curveType = value
    }));
  }
  handleSVGHeightChange = (e) => {
    e.preventDefault();
    this.setState({
      height: e.target.value
    })
  }
  handleSVGWidthChange = (e) => {
    e.preventDefault();
    this.setState({
      width: e.target.value
    })
  }
  handleDataPointChange = (e) => {
    let value = e.target.value;
    e.preventDefault();
    this.setState(prevState => ({
      ...this.state.controller,
      ...prevState.controller.dataPoints = +value
    }));
  }
  


  render() {
    return (
      <div className="lineEditor">

        <div className="lineEditor-wrapper">
          <p className="lineEditor-title">A Line Chart Editor</p>
          <div className="lineEditor-ctrl-grid">

            <div className="lineEditor-ctrl-1 lineEditor-ctrl-box">
              <h2 className="lineEditor-ctrl-subtitle">Data</h2>
              <label htmlFor="data_points"># of data points:
                <input 
                  type="text" 
                  id="data_points"  
                  placeholder="10" 
                  value={this.state.dataPoints}
                  onChange={this.handleDataPointChange}
                />
              </label>
              <br />
              <label>
                <input type="radio" defaultChecked />
                select random data set
              </label>
              <br />
              <label>
                <input type="radio" />
                i'll define the data set
              </label>
            </div>

            <div className="lineEditor-ctrl-2 lineEditor-ctrl-box">
              <h2 className="lineEditor-ctrl-subtitle">Chart</h2>
              <p>
                Curve
              </p>
              <select 
                name="curve" 
                id="curve-select"
                value={this.state.controller.curveType}
                onChange={this.handleCurveSelection}
              >
                { 
                  curveTypes.map( (curve, idx) => {
                    return (
                      <option
                        key={curve}
                        className="line-curve-option"
                      >
                        {curve}
                      </option>
                    );
                  })
                }
              </select>
            </div>

            <div className="lineEditor-ctrl-3 lineEditor-ctrl-box">
              <h2 className="lineEditor-ctrl-subtitle">Styles</h2>
              <label>Height:
                <input 
                  type="text" 
                  value={this.state.height} 
                  onChange={this.handleSVGHeightChange}
                />
              </label>
              <br />
              <label>Width:
                <input 
                  type="text" 
                  value={this.state.width} 
                  onChange={this.handleSVGWidthChange}
                />
              </label>
            </div>
          </div>

          <LineSVG  
            className="lineEditorSVG"
            height={this.state.height}
            width={this.state.width}
            margins={this.state.margins}
            controller={this.state.controller}
          />
            
        </div>
      </div>
    )
  }
};

export default LineEditor;