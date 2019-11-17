
import React, { useState } from 'react';

import Banner from './Banner/Banner.js';

import './ExampleTemplate.css';

export default props => {

  const [tab, setTab] = useState("Demo");

  return (
    <div className="template-example">
      <Banner title={props.title} />

      <section className="template-section">
        <div className="template-tab-group">
          <button 
            className={tab === "Demo" ? "template-tab-active" : "template-tab"}
            onClick={() => setTab("Demo")}
          >Demo</button>
          <button 
            className={tab === "Summary" ? "template-tab-active" : "template-tab"}
            onClick={() => setTab("Summary")}
          >Summary</button>
          <button 
            className={tab === "Code" ? "template-tab-active" : "template-tab"}
            onClick={() => setTab("Code")}
          >Code</button>
        </div>

        <div className="template-body-wrapper">
          {props[tab]}
        </div>
      </section>
    </div>
  );
};