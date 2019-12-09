
import React from 'react';

import { Ford, FordCode, FordSummary } from '../components/Examples/Ford/index.js';  
import ExampleTemplate from '../components/ExampleHelpers/ExampleTemplate.js';

  const Example = props => (
    <ExampleTemplate 
      {...props}
      title='Ford Sales - 2017 & 2018'
      demo={Ford}
      code={FordCode}
      summary={FordSummary}
    />
  );

export default Example;