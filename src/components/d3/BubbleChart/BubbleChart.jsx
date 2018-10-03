
import React, {Component} from 'react';

import {csv} from 'd3-fetch';
import {format} from 'd3-format';
import {pack} from 'd3-hierarchy';
import {scaleOrdinal} from 'd3-scale';
import {schemeDark2} from 'd3-scale-chromatic';

import dataCSV from '../../../../dist/data/BubbleChart.csv';

// console.log('dataCSV: ', Array.isArray(dataCSV));
// console.log('dataCSV: ', dataCSV[10]);
// console.log('dataCSV: ', dataCSV);
class BubbleChart extends Component {
  render () {
    const width = 960;
    const height = 960;
    const formatNum = format(",d");

    const darkColor = scaleOrdinal(schemeDark2);
    console.log('dartColor:', darkColor('red'));

    const packCircles = pack()
      .size([width, height])
      .padding(1.5);

    // convert csv data to an array of objects
    let convertCSV = [];
    for (let i = 1; i < dataCSV.length; i += 1) {
      convertCSV.push({'id': dataCSV[i][0], 'value': dataCSV[i][1]});
    }
    console.log('csv conv.:', convertCSV);

    csv('../../../../dist/data/BubbleChart.csv')
      .then(function (data) {console.log(data)})
      .catch(err => console.log(err)); 

    // const root = hierarchy(convertCSV)
    //   .sum(function(d) { return d.value; })
    //   .each(function(d) {
    //     if (id = d.data.id) {
    //       var id, i = id.lastIndexOf(".");
    //       d.id = id;
    //       d.package = id.slice(0, i);
    //       d.class = id.slice(i + 1);
    //     }
    //   });

//   var node = svg.selectAll(".node")
//     .data(pack(root).leaves())
//     .enter().append("g")
//       .attr("class", "node")
//       .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

//   node.append("circle")
//       .attr("id", function(d) { return d.id; })
//       .attr("r", function(d) { return d.r; })
//       .style("fill", function(d) { return color(d.package); });

//   node.append("clipPath")
//       .attr("id", function(d) { return "clip-" + d.id; })
//     .append("use")
//       .attr("xlink:href", function(d) { return "#" + d.id; });

//   node.append("text")
//       .attr("clip-path", function(d) { return "url(#clip-" + d.id + ")"; })
//     .selectAll("tspan")
//     .data(function(d) { return d.class.split(/(?=[A-Z][^A-Z])/g); })
//     .enter().append("tspan")
//       .attr("x", 0)
//       .attr("y", function(d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
//       .text(function(d) { return d; });

//   node.append("title")
//       .text(function(d) { return d.id + "\n" + format(d.value); });
// });

  
    return (
      <div className="bubble-chart-wrapper">
        <svg className="svg-bubble-chart" width="960" height="960"></svg>
      </div>
    )
  }
}

export default BubbleChart;