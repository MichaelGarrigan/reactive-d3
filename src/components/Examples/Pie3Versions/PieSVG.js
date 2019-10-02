
import React from "react";
import { format } from 'd3-format';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { select } from 'd3-selection';
import { arc, pie } from 'd3-shape';


const Arc = ({ data, index, createArc, colors, format }) => (
  <g key={index} className="arc">
    <path className="arc" d={createArc(data)} fill={colors(index)} />
    <text
      transform={`translate(${createArc.centroid(data)})`}
      textAnchor="middle"
      alignmentBaseline="middle"
      fill="white"
      fontSize="10"
    >
      {format(data.value)}
    </text>
  </g>
);

const PieSVG = props => {
  const createPie = pie()
    .value(d => d.value)
    .sort(null);
  const createArc = arc()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius);
  const colors = scaleOrdinal(schemeCategory10);
  const formatText = format(".2f");
  const data = createPie(props.data);

  return (
    <svg width={props.width} height={props.height}>
      <g transform={`translate(${props.outerRadius} ${props.outerRadius})`}>
        {data.map((d, i) => (
          <Arc
            key={i}
            data={d}
            index={i}
            createArc={createArc}
            colors={colors}
            format={formatText}
          />
        ))}
      </g>
    </svg>
  );
};

export default PieSVG;