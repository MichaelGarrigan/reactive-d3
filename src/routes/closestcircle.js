
import React from 'react';

import { ClosestCircle, ClosestCircleCode, ClosestCircleSummary } from '../components/Examples/ClosestCircle/index.js';
import ExampleTemplate from '../components/ExampleHelpers/ExampleTemplate.js';

  const Example = props => (
    <ExampleTemplate 
      {...props}
      title='Closest Circle'
      demo={ClosestCircle}
      code={ClosestCircleCode}
      summary={ClosestCircleSummary}
    />
  );

export default Example;