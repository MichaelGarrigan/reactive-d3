import React from 'react';
import {Link} from 'react-router-dom';
import './EditorShell.css';

const EditorShell = () => (
  <div className="editor-wrapper">
    <h1 className="editor-title">Interact and explore D3 & SVG</h1>
    <div className="editor-flex">
      <Link to="/ShapeEditor">
        <div className="d3-editor-item">
          <span className="d3-editor-text">Editor</span>
          <span className="d3-editor-text">d3-shape</span>
        </div>
      </Link>
      <Link to="/LineEditor">
        <div className="d3-editor-item">
          <span className="d3-editor-text">LineEditor</span>
        </div>
      </Link>
      <Link to="/ScaleEditor">
        <div className="d3-editor-item">
          <span className="d3-editor-text">Scale Editor</span>
        </div>
      </Link>
    </div>
  </div>
);

export default EditorShell;