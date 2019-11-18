import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';

import './Code.css';

export default props => {
  
  const [file, setFile] = useState(props.code[0]);
  // Initialize syntax highting
  useEffect( () => Prism.highlightAll(), [file]);

  return (
    <div className="code-examples-wrapper">

      <div className="code-tabs-wrapper">
        {
          props.code.map( tab => (
            <button 
              key={tab.name}
              className={ tab.name === file.name ? "code-tab-active" : "code-tab"}
              onClick={() => setFile(tab)}
            >{tab.name}</button>
          ))
        }
      </div>

      <pre id="code-pre"> 
        <code className="language-js">
          {file.code.trim()}
        </code>
      </pre>

    </div>
  );
};