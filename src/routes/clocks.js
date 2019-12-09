
import React from 'react';

import { Clocks, ClocksCode, ClocksSummary } from '../components/Examples/Clocks/index.js';
import ExampleTemplate from '../components/ExampleHelpers/ExampleTemplate.js';

  const Example = props => (
    <ExampleTemplate 
      {...props}
      title='Classic World Clocks'
      demo={Clocks}
      code={ClocksCode}
      summary={ClocksSummary}
    />
  );

export default Example;