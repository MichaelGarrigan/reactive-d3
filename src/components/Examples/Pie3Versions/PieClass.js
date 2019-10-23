
import React, { createRef, Component } from "react";
import Prism from 'prismjs';

import { format } from 'd3-format';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { select } from 'd3-selection';
import { arc, pie } from 'd3-shape';

import '../../../../node_modules/prismjs/themes/prism-okaidia.css';
import "./Pie3Versions.css";


class PieClass extends Component {
  constructor(props) {
    super(props);
    this.svgRef = createRef();

    this.width = Math.round(props.dimensions.width * 0.3);
    this.innerRadius = Math.round(this.width * 0.25);
    this.outerRadius = Math.round(this.width * 0.5);

    this.createPie = pie()
      .value(d => d.value)
      .sort(null);

    this.createArc = arc()
      .innerRadius(this.innerRadius)
      .outerRadius(this.outerRadius);

    this.colors = scaleOrdinal(schemeCategory10);
    this.formatText = format(".2f");
  }

  componentDidMount() {
    // Initialize syntax highting
    Prism.highlightAll();

    const svg = select(this.svgRef.current);
    const data = this.createPie(this.props.data);

    svg
      .attr("class", "chart")
      .attr("width", this.width)
      .attr("height", this.width);

    const group = svg
      .append("g")
      .attr("transform", `translate(${this.outerRadius}, ${this.outerRadius})`);

    const groupWithEnter = group
      .selectAll("g.arc")
      .data(data)
      .enter();

    const path = groupWithEnter.append("g").attr("class", "arc");

    path
      .append("path")
      .attr("class", "arc")
      .attr("d", this.createArc)
      .attr("fill", (d, i) => this.colors(d.index));

    path
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("transform", d => `translate(${this.createArc.centroid(d)})`)
      .style("fill", "white")
      .style("font-size", 10)
      .text(d => this.formatText(d.value));
  }

  componentWillUpdate(nextProps, nextState) {
    const svg = select(this.svgRef.current);
    const data = this.createPie(nextProps.data);

    const group = svg
      .select("g")
      .selectAll("g.arc")
      .data(data);

    group.exit().remove();

    const groupWithUpdate = group
      .enter()
      .append("g")
      .attr("class", "arc");

    const path = groupWithUpdate.append("path").merge(group.select("path.arc"));

    path
      .attr("class", "arc")
      .attr("d", this.createArc)
      .attr("fill", (d, i) => this.colors(i));

    const text = groupWithUpdate.append("text").merge(group.select("text"));

    text
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("transform", d => `translate(${this.createArc.centroid(d)})`)
      .text(d => this.formatText(d.value));
  }

  render() {
    return (
      <div className="pie-build-wrapper">
        <div className="pie-chart-wrapper">
          <svg ref={this.svgRef} />
          <div className="pie-chart-info">
            <p>
              Class based components have the advantage of being part of React for a long time and are well known by most developers.
            </p>
            <p>
              The biggest downside to React class based components is when a component gets significantly complicated your lifecycle methods can become filled with mixed concerns and will start to be hard to reason about.
            </p>
            <p>
              Class based components may be your only option if you are dealing with a legacy project or if your project needs state but does not support hooks.
            </p>
          </div>
        </div>

        <div className="pie-code-wrapper">
          <p className="pie-code-title">
            Class based React component
          </p>
        
      <pre className="pie-code language-js"> 
        <code className="language-js">
{
`import React, { createRef, Component } from "react";

import { format } from 'd3-format';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { select } from 'd3-selection';
import { arc, pie } from 'd3-shape';

import "./Pie3Versions.css";


class PieClass extends Component {
  constructor(props) {
    super(props);
    this.svgRef = createRef();

    this.width = Math.round(props.dimensions.width * 0.3);
    this.innerRadius = Math.round(this.width * 0.25);
    this.outerRadius = Math.round(this.width * 0.5);

    this.createPie = pie()
      .value(d => d.value)
      .sort(null);

    this.createArc = arc()
      .innerRadius(this.innerRadius)
      .outerRadius(this.outerRadius);

    this.colors = scaleOrdinal(schemeCategory10);
    this.formatText = format(".2f");
  }

  componentDidMount() {

    const svg = select(this.svgRef.current);
    const data = this.createPie(this.props.data);

    svg
      .attr("class", "chart")
      .attr("width", this.width)
      .attr("height", this.width);

    const group = svg
      .append("g")
      .attr("transform", "translate(" + this.outerRadius + ", " + this.outerRadius + ")");

    const groupWithEnter = group
      .selectAll("g.arc")
      .data(data)
      .enter();

    const path = groupWithEnter.append("g").attr("class", "arc");

    path
      .append("path")
      .attr("class", "arc")
      .attr("d", this.createArc)
      .attr("fill", (d, i) => this.colors(d.index));

    path
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("transform", d => "translate(" + this.createArc.centroid(d) + ")")
      .style("fill", "white")
      .style("font-size", 10)
      .text(d => this.formatText(d.value));
  }

  componentWillUpdate(nextProps, nextState) {
    const svg = select(this.svgRef.current);
    const data = this.createPie(nextProps.data);

    const group = svg
      .select("g")
      .selectAll("g.arc")
      .data(data);

    group.exit().remove();

    const groupWithUpdate = group
      .enter()
      .append("g")
      .attr("class", "arc");

    const path = groupWithUpdate.append("path").merge(group.select("path.arc"));

    path
      .attr("class", "arc")
      .attr("d", this.createArc)
      .attr("fill", (d, i) => this.colors(i));

    const text = groupWithUpdate.append("text").merge(group.select("text"));

    text
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("transform", d => "translate(" + this.createArc.centroid(d) + ")")
      .text(d => this.formatText(d.value));
  }

  render() {
    return (
      <div className="pie-chart-wrapper">
        <svg ref={this.svgRef} />
      </div>
    );
  };
};

export default PieClass;`.trim()
}
        </code>
      </pre>
      </div>
      </div>
    )
  }
};

export default PieClass;