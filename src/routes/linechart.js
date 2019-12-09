
import React from 'react';

import { LineChart, LineChartCode, LineChartSummary } from '../components/Examples/LineChart/index.js';
import ExampleTemplate from '../components/ExampleHelpers/ExampleTemplate.js';

  const Example = props => (
    <ExampleTemplate 
      {...props}
      title='Line Chart with Curves'
      demo={LineChart}
      code={LineChartCode}
      summary={LineChartSummary}
    />
  );

export default Example;