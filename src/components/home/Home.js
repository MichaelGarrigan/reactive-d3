
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default ({dimensions}) => {
  const verbs = ["Exploring", "Understanding", "Hacking", "Building"];
  return (
    <div className="home-wrapper">
      <div className="home-summary-wrapper">
        <b>
          <div class="home-summary-verbs">
            Exploring<br /> 
            Understanding<br />
            Hacking<br />
            Building
            </div>
        </b>
        <p>d3 and React</p>
      </div>
  
    </div>
  );
};

{/* <div class="Iam">

<p>This is</p>
<b>
  <div class="innerIam">
    leggera<br /> 
    a theme in progress<br />
    built on bootstrap<br />
    how I learn stuff<br />
    how we do it
    </div>
</b>

</div> */}