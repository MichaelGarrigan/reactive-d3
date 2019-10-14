import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';

import Design from './resource/Design.js';
import D3 from './resource/D3.js';
import ReactJS from './resource/React.js';
import DataSources from './resource/DataSources.js';
import People from './resource/People.js';
import Groups from './resource/Groups.js';

import BooksSvg from './BooksSvg.js';
import BookSvg from './BookSvg.js';
import './Resources.css';

const categories = [
  { name: "Design", color: "", route: ["design", Design] },
  { name: "d3", color: "", route: ["d3", D3] },
  { name: "React", color: "", route: ["react", ReactJS] },
  { name: "Data", color: "", route: ["datasources", DataSources] },
  { name: "People", color: "", route: ["people", People] },
  { name: "Groups", color: "", route: ["groups", Groups] }
];


export default props => {
  const size = props.dimensions;
  
  const [route, setRoute] = useState([]);
  const HOC = (Comp, props, dimensions) => {

    props.setRoute = setRoute;
    props.dimensions = dimensions;
    
    return <Comp {...props} />;
  }

  const width80 = Math.round(props.dimensions.width * 0.8);
  const size20 = Math.round(props.dimensions.width * 0.2);
  
  return (
    route.length === 0
      ? (
      <div className="resources-wrapper">

        <div className="resources-title-wrapper"> 
          <BooksSvg dimensions={props.dimensions} />
          <p className="resources-title">Resources</p>
        </div>

        <div className="resources-summary-wrapper">

          <p className="resources-summary">
            A curated collection of informational links, articles, documentation and blogs.
          </p>
          <p className="resources-summary">
            Click a category below to explore.
          </p>
        
        </div>

        <div className="resources-categories-wrapper">
          {
            categories.map( category => (
              <Link 
                to={`/Resources/${category.route[0]}`}
                key={category.name}
              >
              <div 
                className="resources-category-wrapper"
                onClick={() => setRoute(category.route)}
              >
                <BookSvg
                  className="resources-book-svg"
                  color={category.color}
                  dimensions={props.dimensions}
                />
                <p className="resources-subtitle">
                  {category.name}
                </p>
              </div>
              </Link>
            ))
          }
        </div>
    </div>
    ) : (
      <Route 
        exact
        path={`/Resources/${route[0]}`}
        component={ (props) => HOC(route[1], {...props}, size) }
      />
    )
  )
};