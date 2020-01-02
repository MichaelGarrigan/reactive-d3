
const code1 = `

import React, { useState, useCallback, useLayoutEffect } from 'react';

import { range } from 'd3-array';
import { drag } from 'd3-drag';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { event, mouse, select } from 'd3-selection';

import './ClosestCircle.css';


export default props => {

  const [canvas, setCanvas] = useState(null);
  
  const canvasRef = useCallback(node => {
    setCanvas(node);
}, []);

  const width = Math.round(props.dimensions.width * 0.9);
  const height = Math.round(width * 0.6);
  const radius = Math.round(width * 0.05);;
  const maxDistance = Infinity;

  useLayoutEffect(() => {
    if (canvas) {
      let ctx = canvas.getContext('2d');

      // An assortment of randomly-positioned colorful circles.
      const circles = range(20).map(i => ({
        x: Math.random() * (width - radius * 2) + radius,
        y: Math.random() * (height - radius * 2) + radius,
        color: schemeCategory10[i % 10]
      }));

      // Whenever the circles move, redraw the canvas.
      function render() {
        ctx.clearRect(0, 0, width, height);
        for (const {x, y, color, active} of circles) {
          ctx.beginPath();
          ctx.moveTo(x + radius, y);
          ctx.arc(x, y, radius, 0, 2 * Math.PI);
          ctx.fillStyle = color;
          ctx.fill();
          if (active) {
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }
      }
  
    // Bind the drag behavior for interaction.
    select(canvas).call(dragFn(circles)
        .on("start.render drag.render end.render", render));
  
    // Render the initial canvas.
    render();

    }
  }, [canvas, height, width]); 


  const dragFn = circles => {

    // Choose the circle that is closest to the pointer for dragging.
    function dragsubject() {
      let subject = null;
      let distance = maxDistance;
      let mouseXY = mouse(canvas)
      for (const c of circles) {
        let d = Math.hypot(mouseXY[0] - c.x, mouseXY[1] - c.y);
       
        if (d < distance) {
          distance = d;
          subject = c;
        }
      }
      return subject;
    }
  
    // When starting a drag gesture, move the subject to the top and mark it as active.
    function dragstarted() {
      circles.splice(circles.indexOf(event.subject), 1);
      circles.push(event.subject);
      event.subject.active = true;
    }
  
    // When dragging, update the subject’s position.
    function dragged() {
      event.subject.x = event.x;
      event.subject.y = event.y;
    }
  
    // When ending a drag gesture, mark the subject as inactive again.
    function dragended() {
      event.subject.active = false;
    }
  
    return drag()
        .subject(dragsubject)
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
  }

  return (
    <div className="closest-wrapper">

      <canvas 
        ref={canvasRef}
        className="closest-canvas"
        height={height}
        width={width}
      ></canvas>
    </div>
  );
};
`;

const tab1 = {
  name: 'ClosestCircle.js',
  code: code1
};

const code2 = `
.closest-canvas {
  background: cornsilk;
  display: block;
  margin: 0 auto 2vw;
}
`;

const tab2 = {
  name: 'ClosestCircle.css',
  code: code2
};


const tabs = [tab1, tab2];

export default tabs;