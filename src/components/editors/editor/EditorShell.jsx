import React from 'react';
import {Link} from 'react-router-dom';
import './EditorShell.css';

const EditorShell = () => (
  <div className="editor-wrapper">
    <h1 className="editor-title">An area to explore D3</h1>
    <Link to="/ShapeEditor">
      <div className="d3-editor">
        <span className="d3-editor-text">Editor</span>
        <span className="d3-editor-text">d3-shape</span>
      </div>
    </Link>
    <Link to="/LineEditor">
      <div className="d3-editor">
        <span className="d3-editor-text">LineEditor</span>
      </div>
    </Link>
    <Link to="/ScaleEditor">
      <div className="d3-editor">
        <span className="d3-editor-text">ScaleEditor</span>
      </div>
    </Link>
    
    
    
    
  </div>
);

export default EditorShell;