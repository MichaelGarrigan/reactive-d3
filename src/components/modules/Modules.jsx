
import React from 'react';

import Module from './Module.jsx';
import modulesData from './modulesData.js';
import './Modules.css';

const Modules = () => (
  <div className="modules-wrapper">
    {
      modulesData.map( item => {
        return (
          <Module 
            key={item.name} 
            title={item.name}
            subs={item.subs}
          />
        );
      })
    }
  </div>
);

export default Modules;