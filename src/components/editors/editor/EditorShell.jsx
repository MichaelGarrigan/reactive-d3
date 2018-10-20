import React from 'react';
import {Link} from 'react-router-dom';
import './EditorShell.css';

const EditorShell = () => (
  <div className="editor-wrapper">
    <h1 className="editor-title">An area to explore D3</h1>
    <Link to="/ShapeEditor">
      <div className="d3-example">
        <span className="d3-example-text">Editor</span>
        <span className="d3-example-text">d3-shape</span>
      </div>
    </Link>
    <Link to="/LineEditor">
      <div className="d3-example">
        <span className="d3-example-text">LineEditor</span>
      </div>
    </Link>
    
    
    
    
  </div>
);

export default EditorShell;