

import React from 'react';

class ControlsShape extends React.Component {
  state = {
    radioValue: 'arc',
    arcInnerRadius: 0,
    arcOuterRadius: 0,
    arcStartAngle: 0,
    arcEndAngle: 0,
  }

  handleRadioValue = (e) => {
    console.log('called handleControls:', e.target.value);
    e.preventDefault();
  }
  handleArcInnerRadius = (e) => {
    e.preventDefault();
    this.setState({arcInnerRadius: +e.target.value});
  }
  handleArcOuterRadius = (e) => {
    e.preventDefault();
    this.setState({arcOuterRadius: +e.target.value});
  }
  handleArcStartAngle = (e) => {
    e.preventDefault();
    this.setState({arcStartAngle: +e.target.value});
  }
  handleArcEndAngle = (e) => {
    e.preventDefault();
    this.setState({arcEndAngle: +e.target.value});
  }


  render() {
    return (
      <div className="controls-shape-wrapper">
        <div className="controls-shape">
          <form onChange={e => {this.handleRadioValue(e)}}>
            <input type="radio" name="gender" value="arc" checked /> Arc<br/>
            <input type="radio" name="gender" value="pie" /> Pie<br/>
            <input type="radio" name="gender" value="line" /> Line<br/>
            <input type="radio" name="gender" value="area" /> Area<br/>
            <input type="radio" name="gender" value="curve" /> Curve<br/>
            <input type="radio" name="gender" value="link" /> Link<br/>
            <input type="radio" name="gender" value="symbol" /> Symbols<br/>
            <input type="radio" name="gender" value="stack" /> Stack<br/>
          </form>
        </div>

        <div className="individual-controls-shape">
          {
            this.state.radioValue === 'arc' 
              ? (
                <div>
                  <h3>d3.arc()</h3>
                  <span>Inner Radius:</span><input type="text" value={this.state.arcInnerRadius} onChange={e => this.handleArcInnerRadius(e)}/><br/>
                  <span>Outer Radius:</span><input type="text" value={this.state.arcOuterRadius} onChange={e => this.handleArcOuterRadius(e)}/><br/>
                  <span>Start Angle:</span><input type="text" value={this.state.arcStartAngle} 
                  onChange={e => this.handleArcStartAngle(e)}/><br/>
                  <span>End Angle:</span><input type="text" value={this.state.arcEndAngle} 
                  onChange={e => this.handleArcEndAngle(e)}/><br/>
                  <button 
                    type="submit" 
                    onClick={e => this.props.handleControls(e, {
                      innerRadius: this.state.arcInnerRadius,
                      outerRadius: this.state.arcOuterRadius,
                      startAngle: this.state.arcStartAngle,
                      endAngle: this.state.arcEndAngle
                    })}>Make Arc</button>
                </div>
              ) : ""
          }
        </div>
        
      </div>
    )
  }
};

export default ControlsShape;