
import React from 'react';
import SVGShape from './SVGShape.jsx';
import ControlsShape from './ControlsShape.jsx';

import './ShapeEditor.css';

class ShapeEditor extends React.Component {
  state = {
    shapeConfig: {

    }
  };

  handleControls = (e, config) => {
    console.log('config:', config);
    e.preventDefault();
    this.setState(prevState => ({
      shapeConfig: {
        ...prevState.shapeConfig,
        ...config
      }
    }));
  }

  render() {
    return (
      <div className="shape-editor-wrapper">
        <h2 className="shape-editor-title">Shape Editor</h2>
        <div className="shape-editor-flex">
          <SVGShape 
            shapeConfig={this.state.shapeConfig}
          />
          <ControlsShape 
            handleControls={this.handleControls}
          />
        </div>
        
      </div>
    )
  }
};

export default ShapeEditor;