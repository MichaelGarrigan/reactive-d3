
import React from 'react';

import { Lower48, Lower48Code, Lower48Summary } from '../components/Examples/Lower48/index.js';
import ExampleTemplate from '../components/ExampleHelpers/ExampleTemplate.js';

  const Example = props => (
    <ExampleTemplate 
      {...props}
      title='US Lower 48 States'
      demo={Lower48}
      code={Lower48Code}
      summary={Lower48Summary}
    />
  );

export default Example;