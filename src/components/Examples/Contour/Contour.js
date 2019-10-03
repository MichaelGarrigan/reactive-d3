
import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react';

import { extent, range } from 'd3-array';
import { contours } from 'd3-contour';
import { geoPath } from 'd3-geo';
import { scaleLinear, scaleLog } from 'd3-scale';
import { interpolateMagma } from 'd3-scale-chromatic';
import { select } from 'd3-selection';

import TitleBanner from '../titleBanner/TitleBanner.js';
import useElementSize from '../../../useElementSize.js';
import './Contour.css';

const value = (x, y) =>
  (1 + (x + y + 1) ** 2 * (19 - 14 * x + 3 * x ** 2 - 14 * y + 6 * x * y + 3 * y ** 2))
  * (30 + (2 * x - 3 * y) ** 2 * (18 - 32 * x + 12 * x * x + 48 * y - 36 * x * y + 27 * y ** 2));

const genGrid = (width, height, x, y) => {
  const q = 4; // The level of detail, e.g., sample every 4 pixels in x and y.
  const x0 = -q / 2, x1 = width + 28 + q;
  const y0 = -q / 2, y1 = height + q;
  const n = Math.ceil((x1 - x0) / q);
  const m = Math.ceil((y1 - y0) / q);
  const grid = new Array(n * m);
  for (let j = 0; j < m; ++j) {
    for (let i = 0; i < n; ++i) {
      grid[j * n + i] = value(x.invert(i * q + x0), y.invert(j * q + y0));
    }
  }
  grid.x = -q;
  grid.y = -q;
  grid.k = q;
  grid.n = n;
  grid.m = m;

  return grid;
};

export default props => {
  const [svg, setSvg] = useState(null);
  const [sizeRef, dimensions] = useElementSize();

  const width = Math.round(dimensions.width * 0.9);
  const height = Math.round(width * 0.6);

  const svgRef = useCallback(node => {
    setSvg(node);
  }, []);

  useEffect( () => {
    return () => props.setRoute([]);
  }, []);

  const x = scaleLinear([-2, 2], [0, width]);
  const y = scaleLinear([-2, 1], [height, 0]);

  const grid = genGrid(width, height, x, y);
  
  const thresholds = range(1, 20).map(i => Math.pow(2, i));
  
  const colorScale = scaleLog()
    .domain(extent(thresholds))
    .interpolate(d => interpolateMagma);

  // Converts from grid coordinates (indexes) to screen coordinates (pixels).
  const transform = ({type, value, coordinates}) => {
    return {type, value, coordinates: coordinates.map(rings => {
      return rings.map(points => {
        return points.map(([x, y]) => ([
          grid.x + grid.k * x,
          grid.y + grid.k * y
        ]));
      });
    })};
  }

  const contourData = contours()
    .size([grid.n, grid.m])
    .thresholds(thresholds)
    (grid)
      .map(transform);
   

  return (
    <div className="closest-wrapper" ref={sizeRef}>
      
      <TitleBanner title="Contour" />

      <svg 
        ref={svgRef}
        className="contour-svg"
        height={height}
        width={width}
        viewBox={[0, 0, width, height]}
      >
        <g style={{stroke: '#fff', stopOpacity: 0.5}} >
          {
            contourData.map( (item, idx) => (
              <path
                key={idx}
                ref={node => select(node).attr('d', geoPath()(item)).attr('fill', colorScale(item.value))}
              />
            ))
          }
        </g>
      </svg>
    </div>
  )

};