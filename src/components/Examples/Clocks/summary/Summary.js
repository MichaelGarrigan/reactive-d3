
import React from 'react';

import './Summary.css';

export default () => (
  <div className="clocks-summary-wrapper">
    <p className="clocks-summary-p">
      This example reminds me of old movies scenes of spy agencies or high power companies strategy rooms that have a whole line of world clocks on the wall.
    </p>

    <p className="clocks-summary-p">
      Here we have two interesting d3 modules being used. The first is arc from d3-shape which allows us to render full and partial circles. The second is scaleLinear from d3-scale which controls mapping each 'tick' to rendering a clock hand to its correct position.
    </p>

    <p className="clocks-summary-p">
      In the Clocks.js component we are using a useLayoutEffect hook to handle an interval function that handles each 'tick' or second. This interval handles calling a function that figures out the current time and sets the state to be shared by each clock.
    </p>

    <p className="clocks-summary-p">
      Since each clock is in a different time zone, we base the current time off of EST (eastern standard time). Each clock will adjust the time based off of EST, so London is +5 hours past NYC, Moscow is +7 ahead of NYC and Tokyo is +13 hours ahead of NYC.
    </p>
  </div>
);