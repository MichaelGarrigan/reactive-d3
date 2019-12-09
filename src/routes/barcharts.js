
import React from 'react';

import { BarCharts, BarChartsCode, BarChartsSummary } from '../components/Examples/BarCharts/index.js';
import ExampleTemplate from '../components/ExampleHelpers/ExampleTemplate.js';

  const Example = props => (
    <ExampleTemplate 
      {...props}
      title='Bar Charts'
      demo={BarCharts}
      code={BarChartsCode}
      summary={BarChartsSummary}
    />
  );

export default Example;