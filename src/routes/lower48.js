
import React from 'react';

import { Lower48, Lower48Code, Lower48Summary } from '../components/Examples/Lower48/index.js';
import ExampleTemplate from '../components/ExampleHelpers/ExampleTemplate.js';

  const Example = props => (
    <ExampleTemplate 
      {...props}
      title='Bar Charts'
      demo={Lower48}
      code={Lower48Code}
      summary={Lower48Summary}
    />
  );

export default Example;